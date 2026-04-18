import { useEffect, useRef, useState } from "react";
import Wheel from "./Wheel";
import { motion } from "framer-motion";
import { getRandomItem } from "../utils/gameLogic";
import AdBanner from "./AdBanner";
import { getRandomPosition } from "../utils/positionLogic";
import SkeletonBox from "./SkeletonBox";

function formatMode(mode) {
    switch (mode) {
        case "ruleta":
            return "Ruleta";
        case "verdad_reto":
            return "Verdad o Reto";
        case "cartas":
            return "Cartas";
        case "mixto":
            return "Mixto";
        default:
            return mode;
    }
}

function formatIntensity(intensity) {
    switch (intensity) {
        case "suave":
            return "Suave";
        case "medio":
            return "Medio";
        case "alto":
            return "Alto";
        case "todos":
            return "Todos los niveles";
        default:
            return intensity;
    }
}

function formatCategory(cat) {
    const map = {
        rompehielos: "Rompehielos",
        romantico: "Romántico",
        picante: "Picante",
        extremo: "Extremo",
        locuras: "Locuras / Random",
    };
    return map[cat] || cat;
}

function formatClassification(classification) {
    return classification
        .replace(/_/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function formatRemaining(ms) {
    if (ms == null) return "";
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
}


function GameScreen({ game, onExit, onEditConfig }) {
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(
        game.currentPlayerIndex || 0
    );
    const [remainingMs, setRemainingMs] = useState(null);
    const categoryPriority = ["rompehielos", "romantico", "picante", "extremo", "locuras"];

    // Lista ordenada de categorías permitidas en esta partida
    const orderedCategories = categoryPriority.filter((c) =>
        (game.activeCategories || []).includes(c)
    );

    // Índice de categoría actual (0,1,2...)
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

    const currentCategory =
        orderedCategories.length > 0
            ? orderedCategories[Math.min(currentCategoryIndex, orderedCategories.length - 1)]
            : null;

    const [turnCount, setTurnCount] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [lastResult, setLastResult] = useState(null);
    const [lastItem, setLastItem] = useState(null);
    const [currentTruthOrDare, setCurrentTruthOrDare] = useState(null); // "truth" | "dare" | null
    const [isCardModeActive, setIsCardModeActive] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(null); // imagen de posición actual
    const [galleryPositions, setGalleryPositions] = useState([]); // lista para galería
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [isGalleryFullscreen, setIsGalleryFullscreen] = useState(false);
    const [isLoadingPosition, setIsLoadingPosition] = useState(false);
    const [isLoadingGallery, setIsLoadingGallery] = useState(false);

    const touchStartXRef = useRef(null);
    const touchEndXRef = useRef(null);

    const increaseCategoriesLevel = () => {

        // Solo tiene sentido si hay más de una categoría disponible
        if (orderedCategories.length <= 1) return;
        setCurrentCategoryIndex((prev) =>
            Math.min(prev + 1, orderedCategories.length - 1)
        );
    };

    const decreaseCategoriesLevel = () => {
        if (orderedCategories.length <= 1) return;
        setCurrentCategoryIndex((prev) => Math.max(prev - 1, 0));
    };

    // Mantener un startTime interno basado en game.startTime si existe
    const startTimeRef = useRef(game.startTime || null);

    useEffect(() => {
        // Si no hay duración -> sin límite, no hay temporizador
        if (!game.duration) {
            setRemainingMs(null);
            return;
        }

        // Si aún no teníamos startTime (partida nueva), lo fijamos ahora
        if (!startTimeRef.current) {
            startTimeRef.current = Date.now();
        }

        const totalMs = game.duration * 60 * 1000;

        // función para actualizar el tiempo restante
        const tick = () => {
            const elapsed = Date.now() - startTimeRef.current;
            const left = totalMs - elapsed;

            if (left <= 0) {
                setRemainingMs(0);
                setIsFinished(true);
                return;
            }
            setRemainingMs(left);
        };

        // primer cálculo inmediato
        tick();

        const interval = setInterval(tick, 1000);

        return () => clearInterval(interval);
    }, [game.duration]);

    const players = game.players || [];
    const currentPlayer = players[currentPlayerIndex] || "Jugador";

    // Núcleo para avanzar turno (no borra el resultado, solo cambia jugador y cuenta)
    const advanceTurnCore = () => {
        if (!players.length) return;

        setCurrentPlayerIndex((prev) => (prev + 1) % players.length);

        const nextTurn = turnCount + 1;
        setTurnCount(nextTurn);

        // solo cada 4 rondas
        if (nextTurn % 4 === 0) {
            // Preguntar por CATEGORÍAS (solo si hay más de una posible)
            const availableCats = game.activeCategories || [];
            if (availableCats.length > 1) {
                const maxIndex = orderedCategories.length - 1;
                if (currentCategoryIndex < maxIndex) {
                    const wantsMoreCategories = window.confirm(
                        "¿Quieren pasar a una CATEGORÍA más intensa?"
                    );
                    if (wantsMoreCategories) {
                        increaseCategoriesLevel();
                    }
                }
            }
        }
    };

    // Avanzar turno desde la ruleta: no limpiamos el resultado
    const advanceTurn = () => {
        advanceTurnCore();
    };

    // En modos sin ruleta, si usáramos "siguiente jugador", sí podríamos limpiar aquí
    const handleNextPlayer = () => {
        setLastResult(null);
        setLastItem(null);
        setCurrentTruthOrDare(null);
        setIsCardModeActive(false);
        setCurrentPosition(null);
        setGalleryPositions([]);
        setIsGalleryOpen(false);
        setGalleryIndex(0);
        setIsGalleryFullscreen(false);
        advanceTurnCore();
    };

    // Construye filtros efectivos de posiciones:
    // si no se seleccionó nada en alguna clasificación, se considera "todas".
    const buildEffectivePositionFilters = () => {
        const base = game.positionFilters || {};
        const effective = {};

        const allKeys = [
            "Todas_Las_Posiciones",
            "tipo_de_posicion_sexual",
            "Estimulacion",
            "Penetracion",
            "Acariciamiento_extra",
            "Ubicacion",
            "Actividad",
            "Complejidad",
        ];

        allKeys.forEach((key) => {
            const arr = base[key] || [];
            if (arr.length > 0) {
                effective[key] = arr;
            }
        });

        // Si no hay ningún filtro marcado en absoluto, devolvemos objeto vacío,
        // lo que hará que el loader pueda usar todas las imágenes disponibles.
        return Object.keys(effective).length > 0 ? effective : {};
    };

    const handleWheelResult = (segment) => {
        const baseResult = {
            source: "wheel",
            segment,
            player: currentPlayer,
            timestamp: Date.now(),
        };

        setLastResult(baseResult);
        setLastItem(null);
        setCurrentTruthOrDare(null);
        setIsCardModeActive(false);

        const categoriesForPick =
            currentCategory ? [currentCategory] : game.activeCategories;

        if (segment.id === "truth" || segment.id === "dare") {
            const type = segment.id === "truth" ? "truth" : "dare";

            const item = getRandomItem({
                type,
                categories: categoriesForPick,
            });

            setLastItem(item);
        } else if (segment.id === "card") {
            // Obtener una carta al azar
            const card = getRandomItem({
                type: "card",
                categories: categoriesForPick,
            });

            setLastItem(card);
        } else if (segment.id === "position") {
            // Obtener una posición al azar según filtros
            const filters = buildEffectivePositionFilters();
            setIsLoadingPosition(true);

            getRandomPosition(filters)
                .then((pos) => {
                    if (!pos) {
                        setCurrentPosition(null);
                        return;
                    }
                    setCurrentPosition(pos);
                })
                .finally(() => {
                    setIsLoadingPosition(false);
                });
        }

        // Al terminar el giro, pasamos al siguiente jugador y contamos ronda
        advanceTurn();
    };


    const isWheelMode = game.mode === "ruleta";

    // Segments base de la ruleta
    const baseSegments = [
        { id: "drink", label: "Tomar trago" },
        { id: "truth", label: "Verdad" },
        { id: "dare", label: "Reto" },
        { id: "card", label: "Carta al azar" },
    ];

    // Solo añadimos "Posición" a partir de Picante
    const shouldShowPosition =
        currentCategory === "picante" ||
        currentCategory === "extremo" ||
        currentCategory === "locuras";

    const wheelSegments = shouldShowPosition
        ? [...baseSegments, { id: "position", label: "Posición" }]
        : baseSegments;

    const handleChangeItem = () => {
        if (!lastResult && !currentTruthOrDare && !isCardModeActive) return;

        const categoriesForPick =
            currentCategory ? [currentCategory] : game.activeCategories;

        // Caso ruleta
        if (lastResult) {
            const segId = lastResult.segment.id;

            // Cambiar VERDAD / RETO
            if (segId === "truth" || segId === "dare") {
                const typeFromWheel = segId === "truth" ? "truth" : "dare";

                const item = getRandomItem({
                    type: typeFromWheel,
                    categories: categoriesForPick,
                });

                setLastItem(item);
                return;
            }

            // Cambiar POSICIÓN
            if (segId === "position") {
                const filters = buildEffectivePositionFilters();
                setIsLoadingPosition(true);

                getRandomPosition(filters)
                    .then((pos) => {
                        if (!pos) {
                            setCurrentPosition(null);
                            return;
                        }
                        setCurrentPosition(pos);
                    })
                    .finally(() => {
                        setIsLoadingPosition(false);
                    });
                return;
            }

            // Otros segmentos (drink, card...) no cambian aquí
            return;
        }

        // Caso modo Verdad o Reto sin ruleta
        if (currentTruthOrDare) {
            const item = getRandomItem({
                type: currentTruthOrDare,
                categories: categoriesForPick,
            });

            setLastItem(item);
            return;
        }

        // Caso Cartas
        if (isCardModeActive) {
            const item = getRandomItem({
                type: "card",
                categories: categoriesForPick,
            });

            setLastItem(item);
            return;
        }

        // Caso modo Posición sin ruleta
        if (game.mode === "position") {
            const filters = buildEffectivePositionFilters();
            setIsLoadingPosition(true);

            getRandomPosition(filters)
                .then((pos) => {
                    if (!pos) {
                        setCurrentPosition(null);
                        alert(
                            "No se encontraron imágenes de posiciones con los filtros actuales."
                        );
                        return;
                    }
                    setCurrentPosition(pos);
                })
                .finally(() => {
                    setIsLoadingPosition(false);
                });
        }
    };

    const handleDirectTruthOrDare = (type) => {
        setCurrentTruthOrDare(type);
        setLastResult(null);
        setIsCardModeActive(false);

        const categoriesForPick =
            currentCategory ? [currentCategory] : game.activeCategories;

        const item = getRandomItem({
            type,
            categories: categoriesForPick,
        });

        setLastItem(item);
    };

    const handleDrawCard = () => {
        setLastResult(null);
        setCurrentTruthOrDare(null);
        setIsCardModeActive(true);

        const categoriesForPick =
            currentCategory ? [currentCategory] : game.activeCategories;

        const item = getRandomItem({
            type: "card",
            categories: categoriesForPick,
        });

        setLastItem(item);

        // después de robar carta, pasar al siguiente jugador
        advanceTurnCore();
    };

    // Para modo "position" sin ruleta: obtener una nueva posición
    const handleShowPosition = () => {
        const filters = buildEffectivePositionFilters();
        setIsLoadingPosition(true);

        getRandomPosition(filters)
            .then((pos) => {
                if (!pos) {
                    setCurrentPosition(null);
                    alert(
                        "No se encontraron imágenes de posiciones con los filtros actuales."
                    );
                    return;
                }
                setCurrentPosition(pos);
                setIsGalleryOpen(false);
            })
            .finally(() => {
                setIsLoadingPosition(false);
            });
    };

    const handleOpenGallery = () => {
        const filters = buildEffectivePositionFilters();
        setIsLoadingGallery(true);

        import("../utils/positionLogic")
            .then(({ getAllPositionsWithFilters }) => {
                return getAllPositionsWithFilters(filters);
            })
            .then((list) => {
                if (!list || list.length === 0) {
                    alert(
                        "No se encontraron imágenes de posiciones con los filtros actuales."
                    );
                    setGalleryPositions([]);
                    setIsGalleryOpen(false);
                    return;
                }
                setGalleryPositions(list);
                setGalleryIndex(0);
                setIsGalleryOpen(true);
                setIsGalleryFullscreen(false);
            })
            .finally(() => {
                setIsLoadingGallery(false);
            });
    };

    const handleGalleryPrev = () => {
        if (!galleryPositions.length) return;
        setGalleryIndex((prev) =>
            prev === 0 ? galleryPositions.length - 1 : prev - 1
        );
    };

    const handleGalleryNext = () => {
        if (!galleryPositions.length) return;
        setGalleryIndex((prev) =>
            prev === galleryPositions.length - 1 ? 0 : prev + 1
        );
    };

    const handleGallerySelectIndex = (index) => {
        if (!galleryPositions.length) return;
        if (index < 0 || index >= galleryPositions.length) return;
        setGalleryIndex(index);
    };

    const handleGalleryTouchStart = (e) => {
        if (!e.touches || e.touches.length === 0) return;
        touchStartXRef.current = e.touches[0].clientX;
        touchEndXRef.current = null;
    };

    const handleGalleryTouchMove = (e) => {
        if (!e.touches || e.touches.length === 0) return;
        touchEndXRef.current = e.touches[0].clientX;
    };

    const handleGalleryTouchEnd = () => {
        if (touchStartXRef.current == null || touchEndXRef.current == null) return;
        const deltaX = touchEndXRef.current - touchStartXRef.current;
        const threshold = 40; // píxeles mínimos para considerar swipe

        if (Math.abs(deltaX) < threshold) return;

        if (deltaX < 0) {
            // swipe izquierda -> siguiente
            handleGalleryNext();
        } else {
            // swipe derecha -> anterior
            handleGalleryPrev();
        }

        touchStartXRef.current = null;
        touchEndXRef.current = null;
    };

    const handleFinishGame = () => {
        if (
            window.confirm(
                "¿Terminar la partida ahora? Podrás volver al menú y crear otra."
            )
        ) {
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <div className="game">
                <header className="game__header">
                    <button className="game__back" onClick={onExit}>
                        ← Salir
                    </button>
                    <div className="game__meta">
                        <span className="game__badge">Partida finalizada</span>
                    </div>
                </header>

                <main className="game__main">
                    <section className="game__current">
                        <p className="game__label">Tiempo agotado</p>
                        <h2 className="game__player">¡Fin del juego!</h2>
                        <p className="game__result-text">
                            El tiempo de la partida ha terminado. Puedes volver al menú o
                            iniciar una nueva partida con otra configuración.
                        </p>
                    </section>
                </main>

                <footer className="game__footer">
                    <button
                        className="game__btn-secondary game__btn-secondary--right"
                        type="button"
                        onClick={onExit}
                    >
                        Volver al menú
                    </button>
                </footer>
            </div>
        );
    }

    return (
        <>
            <motion.div
                className="game"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
            >
                <header className="game__header">
                    <button
                        className="game__back"
                        onClick={onEditConfig}
                    >
                        ← Configuración
                    </button>
                    <div className="game__meta">
                        <span className="game__badge">{formatMode(game.mode)}</span>
                        <span className="game__badge game__badge--soft">
                            {players.length} jugador(es)
                        </span>
                    </div>
                </header>

                <main className="game__main">
                    <section className="game__current">
                        <p className="game__label">Turno de</p>
                        <h2 className="game__player">{currentPlayer}</h2>

                        <div className="game__info-row">
                            {game.duration ? (
                                <span className="game__chip">
                                    Tiempo: {formatRemaining(remainingMs)}
                                </span>
                            ) : (
                                <span className="game__chip">
                                    Tiempo: sin límite
                                </span>
                            )}
                        </div>

                        {game.mode !== "position" && (
                            <div className="game__categories">
                                <p className="game__label">Categorías activas</p>
                                <div className="game__chips">
                                    {game.activeCategories.map((cat) => (
                                        <span key={cat} className="game__chip game__chip--ghost">
                                            {formatCategory(cat)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>

                    {game.mode !== "position" && (
                        <section className="game__control">
                            {orderedCategories.length > 1 && currentCategory && (
                                <div className="game__chips" style={{ flexWrap: "wrap", gap: "0.4rem" }}>
                                    <span className="game__chip game__chip--ghost">
                                        Categoría actual: {formatCategory(currentCategory)}
                                    </span>

                                    <button
                                        type="button"
                                        className="game__btn-secondary"
                                        onClick={decreaseCategoriesLevel}
                                    >
                                        Categoría anterior
                                    </button>
                                    <button
                                        type="button"
                                        className="game__btn-secondary"
                                        onClick={increaseCategoriesLevel}
                                    >
                                        Siguiente categoría
                                    </button>
                                </div>
                            )}
                        </section>
                    )}

                    <section className="game__body">
                        {isWheelMode ? (
                            <>
                                <Wheel onResult={handleWheelResult} segments={wheelSegments} />
                                <div className="game__result">
                                    {lastResult ? (
                                        <>
                                            <p className="game__label">Resultado</p>
                                            <h3 className="game__result-title">
                                                {lastResult.segment.label}
                                            </h3>
                                            <p className="game__result-text">
                                                {lastResult.segment.id === "drink" &&
                                                    `${lastResult.player}, toma un trago.`}

                                                {lastResult.segment.id === "truth" &&
                                                    (lastItem
                                                        ? lastItem.text
                                                        : `${lastResult.player}, es tu turno de VERDAD (no hay preguntas disponibles con esta configuración).`)}

                                                {lastResult.segment.id === "dare" &&
                                                    (lastItem
                                                        ? lastItem.text
                                                        : `${lastResult.player}, te toca un RETO (no hay retos disponibles con esta configuración).`)}

                                                {lastResult.segment.id === "card" &&
                                                    (lastItem
                                                        ? lastItem.text
                                                        : `${lastResult.player}, roba una carta al azar (no hay cartas disponibles con esta configuración).`)}


                                                {lastResult.segment.id === "position" && (
                                                    <>
                                                        {currentCategory === "picante"
                                                            ? `Realicen esta posición sexual con ropa o sin penetración.`
                                                            : currentCategory === "extremo" || currentCategory === "locuras"
                                                                ? `Realicen esta posición sexual sin ropa y con penetración.`
                                                                : `Realicen esta posición sexual juntos.`}

                                                        {isLoadingPosition && (
                                                            <div className="game__position-image">
                                                                <SkeletonBox
                                                                    width="100%"
                                                                    height="260px"
                                                                    radius="12px"
                                                                />
                                                            </div>
                                                        )}

                                                        {!isLoadingPosition && currentPosition && (
                                                            <>
                                                                <span>
                                                                    {" "}
                                                                    (clasificación:{" "}
                                                                    {formatClassification(
                                                                        currentPosition.classification
                                                                    )}{" "}
                                                                    /{" "}
                                                                    {formatClassification(
                                                                        currentPosition.subcategory
                                                                    )}
                                                                    )
                                                                </span>
                                                                <div
                                                                    className="game__position-image"
                                                                    onTouchStart={handleGalleryTouchStart}
                                                                    onTouchMove={handleGalleryTouchMove}
                                                                    onTouchEnd={handleGalleryTouchEnd}
                                                                >
                                                                    <img
                                                                        src={currentPosition.url}
                                                                        alt={`${currentPosition.classification} - ${currentPosition.subcategory}`}
                                                                    />
                                                                </div>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </p>
                                        </>
                                    ) : (
                                        <p className="game__label">
                                            Gira la ruleta para ver qué les toca.
                                        </p>
                                    )}
                                </div>
                            </>
                        ) : game.mode === "verdad_reto" ? (
                            <div className="game__vrd">
                                <div className="game__vrd-buttons">
                                    <button
                                        type="button"
                                        className={`game__btn-secondary ${currentTruthOrDare === "truth" ? "pill--active" : ""
                                            }`}
                                        onClick={() => handleDirectTruthOrDare("truth")}
                                    >
                                        Verdad
                                    </button>
                                    <button
                                        type="button"
                                        className={`game__btn-secondary ${currentTruthOrDare === "dare" ? "pill--active" : ""
                                            }`}
                                        onClick={() => handleDirectTruthOrDare("dare")}
                                    >
                                        Reto
                                    </button>
                                </div>

                                <div className="game__result">
                                    {lastItem ? (
                                        <>
                                            <p className="game__label">
                                                {currentTruthOrDare === "truth"
                                                    ? "Pregunta de verdad"
                                                    : "Reto"}
                                            </p>
                                            <p className="game__result-text">{lastItem.text}</p>
                                        </>
                                    ) : (
                                        <p className="game__label">
                                            Elige Verdad o Reto para comenzar.
                                        </p>
                                    )}
                                </div>
                            </div>
                        ) : game.mode === "cartas" ? (
                            <div className="game__vrd">
                                <div className="game__vrd-buttons">
                                    <button
                                        type="button"
                                        className="game__btn-secondary"
                                        onClick={handleDrawCard}
                                    >
                                        Robar carta
                                    </button>
                                </div>

                                <div className="game__result">
                                    {lastItem ? (
                                        <>
                                            <p className="game__label">Carta</p>
                                            <p className="game__result-text">{lastItem.text}</p>
                                        </>
                                    ) : (
                                        <p className="game__label">
                                            Pulsa "Robar carta" para comenzar.
                                        </p>
                                    )}
                                </div>
                            </div>
                        ) : game.mode === "position" ? (
                            <div className="game__vrd">
                                <div className="game__vrd-buttons">
                                    <button
                                        type="button"
                                        className="game__btn-secondary"
                                        onClick={handleShowPosition}
                                    >
                                        Mostrar posición
                                    </button>
                                    <button
                                        type="button"
                                        className="game__btn-secondary"
                                        onClick={handleOpenGallery}
                                    >
                                        Ver galería
                                    </button>
                                </div>

                                <div className="game__result">
                                    {isGalleryOpen && galleryPositions.length > 0 ? (
                                        <div
                                            className={
                                                isGalleryFullscreen
                                                    ? "game__gallery-fullscreen"
                                                    : ""
                                            }
                                        >
                                            <p className="game__label">Galería de posiciones</p>
                                            <p className="game__result-text">
                                                Imagen {galleryIndex + 1} de {galleryPositions.length}
                                                <br />
                                                (clasificación:{" "}
                                                {formatClassification(
                                                    galleryPositions[galleryIndex].classification
                                                )}{" "}
                                                /{" "}
                                                {formatClassification(
                                                    galleryPositions[galleryIndex].subcategory
                                                )}
                                                )
                                            </p>
                                            <div className="game__position-image">
                                                {isLoadingGallery ? (
                                                    <SkeletonBox
                                                        width="100%"
                                                        height="260px"
                                                        radius="12px"
                                                    />
                                                ) : (
                                                    <img
                                                        src={galleryPositions[galleryIndex].url}
                                                        alt={`${galleryPositions[galleryIndex].classification} - ${galleryPositions[galleryIndex].subcategory}`}
                                                    />
                                                )}
                                            </div>

                                            {/* Miniaturas tipo mosaico */}
                                            <div className="game__gallery-thumbs">
                                                {galleryPositions.map((pos, idx) => (
                                                    <button
                                                        key={`${pos.classification}-${pos.subcategory}-${pos.filename}-${idx}`}
                                                        type="button"
                                                        className={`game__gallery-thumb ${idx === galleryIndex
                                                            ? "game__gallery-thumb--active"
                                                            : ""
                                                            }`}
                                                        onClick={() =>
                                                            handleGallerySelectIndex(idx)
                                                        }
                                                    >
                                                        <img
                                                            src={pos.url}
                                                            alt={`${pos.classification} - ${pos.subcategory}`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="game__vrd-buttons" style={{ marginTop: "0.6rem" }}>
                                                <button
                                                    type="button"
                                                    className="game__btn-secondary"
                                                    onClick={handleGalleryPrev}
                                                >
                                                    Anterior
                                                </button>
                                                <button
                                                    type="button"
                                                    className="game__btn-secondary"
                                                    onClick={handleGalleryNext}
                                                >
                                                    Siguiente
                                                </button>
                                                <button
                                                    type="button"
                                                    className="game__btn-secondary"
                                                    onClick={() =>
                                                        setIsGalleryFullscreen((prev) => !prev)
                                                    }
                                                >
                                                    {isGalleryFullscreen
                                                        ? "Salir pantalla completa"
                                                        : "Pantalla completa"}
                                                </button>
                                                <button
                                                    type="button"
                                                    className="game__btn-secondary"
                                                    onClick={() => {
                                                        setIsGalleryOpen(false);
                                                        setIsGalleryFullscreen(false);
                                                    }}
                                                >
                                                    Cerrar galería
                                                </button>
                                            </div>

                                        </div>
                                    ) : currentPosition ? (
                                        <>
                                            <p className="game__label">Posición seleccionada</p>
                                            <p className="game__result-text">
                                                Realicen esta posición sexual sin ropa y con penetración.
                                                <br />
                                                (clasificación:{" "}
                                                {formatClassification(currentPosition.classification)} /{" "}
                                                {formatClassification(currentPosition.subcategory)})
                                            </p>
                                            <div className="game__position-image">
                                                {isLoadingPosition ? (
                                                    <SkeletonBox
                                                        width="100%"
                                                        height="260px"
                                                        radius="12px"
                                                    />
                                                ) : (
                                                    <img
                                                        src={currentPosition.url}
                                                        alt={`${currentPosition.classification} - ${currentPosition.subcategory}`}
                                                    />
                                                )}
                                            </div>
                                        </>
                                    ) : (
                                        <p className="game__label">
                                            Pulsa "Mostrar posición" o "Ver galería" para usar las
                                            imágenes según los filtros configurados.
                                        </p>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <section className="game__placeholder">
                                <p>Este modo aún no está implementado.</p>
                            </section>
                        )}
                    </section>
                </main>

                <footer className="game__footer">
                    {(
                        (lastResult &&
                            (lastResult.segment.id === "truth" ||
                                lastResult.segment.id === "dare" ||
                                lastResult.segment.id === "position")) ||
                        currentTruthOrDare ||
                        isCardModeActive
                    ) && (
                            <button
                                className="game__btn-secondary"
                                type="button"
                                onClick={handleChangeItem}
                            >
                                Cambiar por otro
                            </button>
                        )}

                    <button
                        className="game__btn-secondary"
                        type="button"
                        onClick={handleFinishGame}
                    >
                        Terminar partida
                    </button>

                </footer>
            </motion.div>

            {/* Espacio para anuncio durante la partida */}
            {/* <AdBanner position="bottom" /> */} {/* Habilitar esta linea */}
        </>
    );
}

export default GameScreen;
