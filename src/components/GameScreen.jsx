import { useEffect, useRef, useState } from "react";
import Wheel from "./Wheel";
import { getRandomItem } from "../utils/gameLogic";
import AdBanner from "./AdBanner";


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
        advanceTurnCore();
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
            if (segId !== "truth" && segId !== "dare") return;

            const typeFromWheel = segId === "truth" ? "truth" : "dare";

            const item = getRandomItem({
                type: typeFromWheel,
                categories: categoriesForPick,
            });

            setLastItem(item);
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
            <div className="game">
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
                    </section>

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
                                                    currentCategory === "picante"
                                                        ? `Elijan una posición sexual. Pueden practicar con ropa o sin penetración.`
                                                        : currentCategory === "extremo" || currentCategory === "locuras"
                                                            ? `Elijan una posición sexual sin ropa y con penetración.`
                                                            : `Elijan una posición sexual juntos.`
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
                        ) : (
                            <section className="game__placeholder">
                                <p>
                                    Este modo aún no está implementado.
                                </p>
                            </section>
                        )}
                    </section>
                </main>

                <footer className="game__footer">
                    {((lastResult &&
                        (lastResult.segment.id === "truth" ||
                            lastResult.segment.id === "dare")) ||
                        currentTruthOrDare ||
                        isCardModeActive) && (
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
            </div>

            {/* Espacio para anuncio durante la partida */}
            {/* <AdBanner position="bottom" /> */} {/* Habilitar esta linea */}
        </>
    );
}

export default GameScreen;
