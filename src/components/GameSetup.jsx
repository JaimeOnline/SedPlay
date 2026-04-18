import { useState, useEffect } from "react";
import ButtonWithLoader from "./ButtonWithLoader";
import { motion, AnimatePresence } from "framer-motion";

const MODOS = [
    { value: "cartas", label: "Cartas" },
    { value: "position", label: "Posiciones" },
    { value: "ruleta", label: "Ruleta" },
    { value: "verdad_reto", label: "Verdad o Reto" },

];


const CATEGORIAS = [
    { value: "rompehielos", label: "Rompehielos" },
    { value: "romantico", label: "Romántico" },
    { value: "picante", label: "Picante" },
    { value: "extremo", label: "Extremo" },
    { value: "locuras", label: "Locuras / Random" },
];

const DURACIONES = [
    { value: 15, label: "15 minutos" },
    { value: 30, label: "30 minutos" },
    { value: 60, label: "60 minutos" },
];

function GameSetup({ onBack, onStart, initialConfig, onExitToMenu }) {
    const STORAGE_KEY = "sedplay_setup_draft";

    const loadDraft = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch {
            return null;
        }
    };

    const draft = !initialConfig ? loadDraft() : null;

    const DEFAULT_POSITION_FILTERS = {
        Todas_Las_Posiciones: [],
        tipo_de_posicion_sexual: [],
        Estimulacion: [],
        Penetracion: [],
        Acariciamiento_extra: [],
        Ubicacion: [],
        Actividad: [],
        Complejidad: [],
    };

    const [pasoActual, setPasoActual] = useState(draft?.pasoActual || 1); // 1-4

    const [players, setPlayers] = useState(
        initialConfig?.players && initialConfig.players.length
            ? initialConfig.players
            : draft?.players && draft.players.length
                ? draft.players
                : ["Jugador 1", "Jugador 2"]
    );
    const [mode, setMode] = useState(
        initialConfig?.mode || draft?.mode || "cartas"
    );
    const [positionFilters, setPositionFilters] = useState(
        initialConfig?.positionFilters ||
        draft?.positionFilters ||
        DEFAULT_POSITION_FILTERS
    );
    const [openPositionSections, setOpenPositionSections] = useState({
        Todas_Las_Posiciones: false,
        tipo_de_posicion_sexual: false,
        Estimulacion: false,
        Penetracion: false,
        Acariciamiento_extra: false,
        Ubicacion: false,
        Actividad: false,
        Complejidad: false,
    });

    const [activeCategories, setActiveCategories] = useState(
        initialConfig?.activeCategories && initialConfig.activeCategories.length
            ? initialConfig.activeCategories
            : draft?.activeCategories && draft.activeCategories.length
                ? draft.activeCategories
                : CATEGORIAS.map((c) => c.value)
    );

    const formatPositionLabel = (value) =>
        value
            .replace(/_/g, " ")
            .split(" ")
            .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
            .join(" ");

    const POSITION_OPTIONS = {
        Todas_Las_Posiciones: [
            "Todas_Las_Posiciones",
        ],
        tipo_de_posicion_sexual: [
            "acostados",
            "angulo_recto",
            "anilingus",
            "cara_a_cara",
            "cruzar",
            "cunnilingus",
            "de lado",
            "de perrito",
            "de_cucharita",
            "de_espalda",
            "de_pie",
            "de_rodillas",
            "hombre_arriba",
            "invertidas",
            "mamada",
            "mujer_arriba",
            "por_Detras",
            "posición_sexual_69",
            "sentados",
            "sexo_anal",
            "sexo_oral",
            "vaquera",
        ],
        Estimulacion: [
            "estimulacion_uniforme",
            "estimular_el_clitoris",
            "estimular_el_punto_A",
            "estimular_el_punto_G",
            "estimular_el_punto_P",
        ],
        Penetracion: [
            "no_penetracion",
            "penetracion_media",
            "penetracion_poco_profunda",
            "penetracion_profunda",
        ],
        Acariciamiento_extra: [
            "abrazos",
            "besar",
            "besar el pecho",
            "digitacion_del_ano",
            "estimular_el_clitoris_con_la_mano",
            "tocar_las_nalgas",
            "tocar_los_pechos",
        ],
        Ubicacion: [
            "cama",
            "mesa",
            "pelota_de_fitness",
            "silla",
            "sillon",
            "sofa",
        ],
        Actividad: [
            "hombre_lleva_el_ritmo",
            "mujer_lleva_el_ritmo",
        ],
        Complejidad: [
            "nivel_difícil",
            "nivel_medio",
            "nivel_sencillas",
        ],
    };

    const togglePositionSection = (classification) => {
        setOpenPositionSections((prev) => ({
            ...prev,
            [classification]: !prev[classification],
        }));
    };

    const toggleAllPositionFilters = (classification) => {
        setPositionFilters((prev) => {
            const allValues = POSITION_OPTIONS[classification] || [];
            const current = prev[classification] || [];
            const allSelected = allValues.length > 0 && current.length === allValues.length;

            return {
                ...prev,
                [classification]: allSelected ? [] : [...allValues],
            };
        });
    };

    const togglePositionFilter = (classification, subcategory) => {
        setPositionFilters((prev) => {
            const current = prev[classification] || [];
            const exists = current.includes(subcategory);
            const next = exists
                ? current.filter((s) => s !== subcategory)
                : [...current, subcategory];
            return {
                ...prev,
                [classification]: next,
            };
        });
    };

    // duración inicial
    let initialDurationType = "none";
    let initialPreset = 30;
    let initialCustom = "";

    if (typeof initialConfig?.duration === "number") {
        if ([15, 30, 60].includes(initialConfig.duration)) {
            initialDurationType = "preset";
            initialPreset = initialConfig.duration;
        } else {
            initialDurationType = "custom";
            initialCustom = String(initialConfig.duration);
        }
    } else if (draft?.durationType) {
        initialDurationType = draft.durationType;
        if (draft.durationType === "preset" && typeof draft.durationPreset === "number") {
            initialPreset = draft.durationPreset;
        }
        if (draft.durationType === "custom" && draft.durationCustom) {
            initialCustom = String(draft.durationCustom);
        }
    } else {
        initialDurationType = "none";
    }

    const [durationType, setDurationType] = useState(initialDurationType); // "preset" | "custom" | "none"
    const [durationPreset, setDurationPreset] = useState(initialPreset);
    const [durationCustom, setDurationCustom] = useState(initialCustom);

    const [errors, setErrors] = useState({
        players: "",
        categories: "",
        duration: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const minPlayers = 2;
    const maxPlayers = 10;

    const handlePlayerNameChange = (index, value) => {
        const updated = [...players];
        updated[index] = value;
        setPlayers(updated);
    };

    const handleAddPlayer = () => {
        if (players.length >= maxPlayers) return;
        setPlayers([...players, `Jugador ${players.length + 1}`]);
    };

    const handleRemovePlayer = (index) => {
        if (players.length <= minPlayers) return;
        const updated = players.filter((_, i) => i !== index);
        setPlayers(updated);
    };

    const handleToggleCategory = (value) => {
        if (activeCategories.includes(value)) {
            setActiveCategories(activeCategories.filter((c) => c !== value));
        } else {
            setActiveCategories([...activeCategories, value]);
        }
    };

    const validarPaso1 = () => {
        const trimmedPlayers = players
            .map((p) => p.trim())
            .filter((p) => p.length > 0);

        if (trimmedPlayers.length < 2) {
            setErrors((prev) => ({
                ...prev,
                players: "Debes tener al menos 2 jugadores.",
            }));
            return false;
        }

        setErrors((prev) => ({ ...prev, players: "" }));
        return true;
    };

    const validarPaso2 = () => {
        // categorías solo se exigen para verdad_reto (según lógica original)
        if (mode === "verdad_reto" && activeCategories.length === 0) {
            setErrors((prev) => ({
                ...prev,
                categories: "Selecciona al menos una categoría.",
            }));
            return false;
        }

        if (durationType === "custom") {
            const n = Number(durationCustom);
            if (!Number.isFinite(n) || n <= 0) {
                setErrors((prev) => ({
                    ...prev,
                    duration: "Introduce una duración válida en minutos.",
                }));
                return false;
            }
        }

        setErrors((prev) => ({
            ...prev,
            categories: "",
            duration: "",
        }));
        return true;
    };

    const calcularDuracionFinal = () => {
        if (durationType === "preset") {
            return Number(durationPreset);
        }
        if (durationType === "custom") {
            const n = Number(durationCustom);
            if (!Number.isFinite(n) || n <= 0) {
                return null;
            }
            return n;
        }
        return null; // sin límite
    };

    const modoUsaPosiciones = mode === "position" || mode === "ruleta";

    const handleSiguiente = () => {
        if (pasoActual === 1 && !validarPaso1()) return;
        if (pasoActual === 2 && !validarPaso2()) return;

        setPasoActual((prev) => {
            // del 2 al 3 solo si el modo usa posiciones
            if (prev === 2 && !modoUsaPosiciones) {
                return 4;
            }
            return Math.min(4, prev + 1);
        });
    };

    const handleAnterior = () => {
        setPasoActual((prev) => {
            // si estamos en 4 y el modo no usa posiciones, volver al 2
            if (prev === 4 && !modoUsaPosiciones) {
                return 2;
            }
            return Math.max(1, prev - 1);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        // validamos todo antes de enviar
        if (!validarPaso1() || !validarPaso2()) return;

        setIsSubmitting(true);

        const trimmedPlayers = players
            .map((p) => p.trim())
            .filter((p) => p.length > 0);

        const finalDuration = calcularDuracionFinal();

        const gameConfig = {
            id: initialConfig?.id || Date.now().toString(),
            mode,
            players: trimmedPlayers,
            currentPlayerIndex: initialConfig?.currentPlayerIndex || 0,
            activeCategories,
            duration: finalDuration,
            startTime: initialConfig?.startTime || null,
            positionFilters,
        };

        console.log("Configuración de partida:", gameConfig);

        try {
            // limpiamos borrador al confirmar configuración (si era un nuevo setup)
            if (!initialConfig) {
                try {
                    localStorage.removeItem(STORAGE_KEY);
                } catch {
                    // ignorar errores
                }
            }

            if (onStart) {
                // por si en un futuro onStart es async
                const maybePromise = onStart(gameConfig);
                if (maybePromise && typeof maybePromise.then === "function") {
                    await maybePromise;
                }
            } else {
                alert("Configuración lista. (Luego cargaremos la pantalla de juego).");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Guardado automático de borrador (solo si no venimos de una partida existente)
    useEffect(() => {
        if (initialConfig) return;

        const trimmedPlayers = players
            .map((p) => p.trim())
            .filter((p) => p.length > 0);

        const payload = {
            pasoActual,
            mode,
            players: trimmedPlayers,
            activeCategories,
            durationType,
            durationPreset,
            durationCustom,
            positionFilters,
        };

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        } catch {
            // ignorar errores de almacenamiento
        }
    }, [
        pasoActual,
        mode,
        players,
        activeCategories,
        durationType,
        durationPreset,
        durationCustom,
        positionFilters,
        initialConfig,
    ]);

    return (
        <motion.div
            className="setup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
        >
            <div className="setup__top-bar">
                <button className="setup__back" onClick={onBack}>
                    ← Volver
                </button>

                {onExitToMenu && (
                    <button
                        type="button"
                        className="setup__back setup__back--menu"
                        onClick={onExitToMenu}
                    >
                        Menú principal
                    </button>
                )}
            </div>

            <h2>Configurar partida</h2>

            <form className="setup__form" onSubmit={handleSubmit}>
                {/* Indicador de paso */}
                <div className="setup__steps-indicator">
                    <button
                        type="button"
                        className={pasoActual === 1 ? "setup__step setup__step--active" : "setup__step"}
                        onClick={() => setPasoActual(1)}
                    >
                        Paso 1: Básico
                    </button>
                    {" · "}
                    <button
                        type="button"
                        className={pasoActual === 2 ? "setup__step setup__step--active" : "setup__step"}
                        onClick={() => {
                            if (validarPaso1()) setPasoActual(2);
                        }}
                    >
                        Paso 2: Categorías y tiempo
                    </button>
                    {modoUsaPosiciones && (
                        <>
                            {" · "}
                            <button
                                type="button"
                                className={pasoActual === 3 ? "setup__step setup__step--active" : "setup__step"}
                                onClick={() => {
                                    if (validarPaso1() && validarPaso2()) setPasoActual(3);
                                }}
                            >
                                Paso 3: Posiciones
                            </button>
                        </>
                    )}
                    {" · "}
                    <button
                        type="button"
                        className={pasoActual === 4 ? "setup__step setup__step--active" : "setup__step"}
                        onClick={() => {
                            if (validarPaso1() && validarPaso2()) {
                                // si el modo usa posiciones y estamos "saltando" al 4, asumimos que el 3 es opcional
                                setPasoActual(4);
                            }
                        }}
                    >
                        {modoUsaPosiciones ? "Paso 4: Resumen" : "Paso 3: Resumen"}
                    </button>

                </div>

                {/* PASO 1: Modo + jugadores */}
                <AnimatePresence mode="wait">
                    {pasoActual === 1 && (
                        <motion.div
                            key="step-1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <section className="setup__section">
                                <h3>Modo de juego</h3>
                                <div className="setup__options setup__options--grid">
                                    {MODOS.map((m) => (
                                        <label
                                            key={m.value}
                                            className={`pill ${mode === m.value ? "pill--active" : ""}`}
                                        >
                                            <input
                                                type="radio"
                                                name="mode"
                                                value={m.value}
                                                checked={mode === m.value}
                                                onChange={(e) => setMode(e.target.value)}
                                            />
                                            {m.label}
                                        </label>
                                    ))}
                                </div>
                                {errors.players && (
                                    <p className="setup__error">{errors.players}</p>
                                )}
                            </section>

                            <section className="setup__section">
                                <h3>Jugadores ({players.length})</h3>
                                <p className="setup__hint">
                                    Mínimo {minPlayers}, máximo {maxPlayers}. Puedes jugar en
                                    pareja o en grupo.
                                </p>

                                <div className="setup__players">
                                    <AnimatePresence>
                                        {players.map((player, index) => (
                                            <motion.div
                                                key={index}
                                                className="setup__player-row"
                                                initial={{ opacity: 0, x: -15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 15 }}
                                                transition={{ duration: 0.18 }}
                                            >
                                                <input
                                                    type="text"
                                                    value={player}
                                                    onChange={(e) =>
                                                        handlePlayerNameChange(index, e.target.value)
                                                    }
                                                    placeholder={`Jugador ${index + 1}`}
                                                />
                                                {players.length > minPlayers && (
                                                    <button
                                                        type="button"
                                                        className="setup__player-remove"
                                                        onClick={() => handleRemovePlayer(index)}
                                                        title="Eliminar jugador"
                                                    >
                                                        ✕
                                                    </button>
                                                )}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {players.length < maxPlayers && (
                                    <button
                                        type="button"
                                        className="setup__add-btn"
                                        onClick={handleAddPlayer}
                                    >
                                        + Añadir jugador
                                    </button>
                                )}
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* PASO 2: Categorías + duración */}
                <AnimatePresence mode="wait">
                    {pasoActual === 2 && (
                        <motion.div
                            key="step-2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <section className="setup__section">
                                <h3>Categorías (Verdad o reto / Mixto)</h3>
                                <p className="setup__hint">
                                    Activa o desactiva las categorías que quieras usar.
                                </p>
                                <div className="setup__options setup__options--grid">
                                    {CATEGORIAS.map((c) => (
                                        <label
                                            key={c.value}
                                            className={`pill ${activeCategories.includes(c.value) ? "pill--active" : ""
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                value={c.value}
                                                checked={activeCategories.includes(c.value)}
                                                onChange={() => handleToggleCategory(c.value)}
                                            />
                                            {c.label}
                                        </label>
                                    ))}
                                </div>
                                {errors.categories && (
                                    <p className="setup__error">{errors.categories}</p>
                                )}
                            </section>

                            <section className="setup__section">
                                <h3>Duración de la partida</h3>
                                <p className="setup__hint">
                                    Elige un tiempo aproximado o juega sin límite.
                                </p>

                                <div className="setup__options setup__options--inline">
                                    <label
                                        className={`pill ${durationType === "preset" ? "pill--active" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="preset"
                                            checked={durationType === "preset"}
                                            onChange={() => setDurationType("preset")}
                                        />
                                        Tiempo predefinido
                                    </label>
                                    <label
                                        className={`pill ${durationType === "custom" ? "pill--active" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="custom"
                                            checked={durationType === "custom"}
                                            onChange={() => setDurationType("custom")}
                                        />
                                        Personalizado
                                    </label>
                                    <label
                                        className={`pill ${durationType === "none" ? "pill--active" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="none"
                                            checked={durationType === "none"}
                                            onChange={() => setDurationType("none")}
                                        />
                                        Sin límite
                                    </label>
                                </div>

                                {durationType === "preset" && (
                                    <div
                                        className="setup__options setup__options--inline"
                                        style={{ marginTop: "0.6rem" }}
                                    >
                                        {DURACIONES.map((d) => (
                                            <label
                                                key={d.value}
                                                className={`pill ${Number(durationPreset) === d.value
                                                    ? "pill--active"
                                                    : ""
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="durationPreset"
                                                    value={d.value}
                                                    checked={Number(durationPreset) === d.value}
                                                    onChange={(e) => setDurationPreset(e.target.value)}
                                                />
                                                {d.label}
                                            </label>
                                        ))}
                                    </div>
                                )}

                                {durationType === "custom" && (
                                    <div style={{ marginTop: "0.6rem" }}>
                                        <input
                                            type="number"
                                            min="1"
                                            step="1"
                                            value={durationCustom}
                                            onChange={(e) => setDurationCustom(e.target.value)}
                                            placeholder="Minutos (ej. 45)"
                                            style={{
                                                width: "100%",
                                                padding: "0.5rem 0.7rem",
                                                borderRadius: "999px",
                                                border: "1px solid rgba(255,255,255,0.12)",
                                                background: "rgba(7,6,18,0.8)",
                                                color: "var(--text)",
                                            }}
                                        />
                                    </div>
                                )}

                                {errors.duration && (
                                    <p className="setup__error">{errors.duration}</p>
                                )}
                            </section>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* PASO 3: Filtros posiciones (solo si el modo lo usa) */}
                <AnimatePresence mode="wait">
                    {modoUsaPosiciones && pasoActual === 3 && (
                        <motion.section
                            key="step-3"
                            className="setup__section"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3>Filtros de posiciones</h3>
                            <p className="setup__hint">
                                Estos filtros se usan en el modo "Posiciones" y cuando la ruleta
                                caiga en "Posición". Si no marcas nada, se usarán todas las
                                imágenes disponibles.
                            </p>

                            <div className="setup__options setup__options--grid">
                                {/* Todas las posiciones */}
                                <div>
                                    <div className="setup__position-header">
                                        <button
                                            type="button"
                                            className="setup__position-toggle"
                                            onClick={() => togglePositionSection("Todas_Las_Posiciones")}
                                        >
                                            {openPositionSections.Todas_Las_Posiciones ? "▾" : "▸"}{" "}
                                            Todas las posiciones
                                        </button>
                                        <button
                                            type="button"
                                            className={`setup__position-all ${positionFilters.Todas_Las_Posiciones.length ===
                                                POSITION_OPTIONS.Todas_Las_Posiciones.length
                                                ? "setup__position-all--active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleAllPositionFilters("Todas_Las_Posiciones")
                                            }
                                        >
                                            {positionFilters.Todas_Las_Posiciones.length ===
                                                POSITION_OPTIONS.Todas_Las_Posiciones.length
                                                ? "Deseleccionar todo"
                                                : "Seleccionar todo"}
                                        </button>
                                    </div>

                                    {openPositionSections.Todas_Las_Posiciones && (
                                        <div className="setup__options setup__options--grid">
                                            {POSITION_OPTIONS.Todas_Las_Posiciones.map((sub) => (
                                                <label
                                                    key={sub}
                                                    className={`pill ${positionFilters.Todas_Las_Posiciones.includes(sub)
                                                        ? "pill--active"
                                                        : ""
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={positionFilters.Todas_Las_Posiciones.includes(
                                                            sub
                                                        )}
                                                        onChange={() =>
                                                            togglePositionFilter(
                                                                "Todas_Las_Posiciones",
                                                                sub
                                                            )
                                                        }
                                                    />
                                                    {formatPositionLabel(sub)}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Tipo de posición sexual */}
                                <div>
                                    <div className="setup__position-header">
                                        <button
                                            type="button"
                                            className="setup__position-toggle"
                                            onClick={() =>
                                                togglePositionSection("tipo_de_posicion_sexual")
                                            }
                                        >
                                            {openPositionSections.tipo_de_posicion_sexual
                                                ? "▾"
                                                : "▸"}{" "}
                                            Tipo de posición sexual
                                        </button>
                                        <button
                                            type="button"
                                            className={`setup__position-all ${positionFilters.tipo_de_posicion_sexual.length ===
                                                POSITION_OPTIONS.tipo_de_posicion_sexual.length
                                                ? "setup__position-all--active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleAllPositionFilters("tipo_de_posicion_sexual")
                                            }
                                        >
                                            {positionFilters.tipo_de_posicion_sexual.length ===
                                                POSITION_OPTIONS.tipo_de_posicion_sexual.length
                                                ? "Deseleccionar todo"
                                                : "Seleccionar todo"}
                                        </button>
                                    </div>

                                    {openPositionSections.tipo_de_posicion_sexual && (
                                        <div className="setup__options setup__options--grid">
                                            {POSITION_OPTIONS.tipo_de_posicion_sexual.map((sub) => (
                                                <label
                                                    key={sub}
                                                    className={`pill ${positionFilters.tipo_de_posicion_sexual.includes(
                                                        sub
                                                    )
                                                        ? "pill--active"
                                                        : ""
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={positionFilters.tipo_de_posicion_sexual.includes(
                                                            sub
                                                        )}
                                                        onChange={() =>
                                                            togglePositionFilter(
                                                                "tipo_de_posicion_sexual",
                                                                sub
                                                            )
                                                        }
                                                    />
                                                    {formatPositionLabel(sub)}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>


                                {/* Estimulación */}
                                <div>
                                    <div className="setup__position-header">
                                        <button
                                            type="button"
                                            className="setup__position-toggle"
                                            onClick={() => togglePositionSection("Estimulacion")}
                                        >
                                            {openPositionSections.Estimulacion
                                                ? "▾"
                                                : "▸"}{" "}
                                            Estimulación
                                        </button>
                                        <button
                                            type="button"
                                            className={`setup__position-all ${positionFilters.Estimulacion.length ===
                                                POSITION_OPTIONS.Estimulacion.length
                                                ? "setup__position-all--active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleAllPositionFilters("Estimulacion")
                                            }
                                        >
                                            {positionFilters.Estimulacion.length ===
                                                POSITION_OPTIONS.Estimulacion.length
                                                ? "Deseleccionar todo"
                                                : "Seleccionar todo"}
                                        </button>
                                    </div>

                                    {openPositionSections.Estimulacion && (
                                        <div className="setup__options setup__options--grid">
                                            {POSITION_OPTIONS.Estimulacion.map((sub) => (
                                                <label
                                                    key={sub}
                                                    className={`pill ${positionFilters.Estimulacion.includes(sub)
                                                        ? "pill--active"
                                                        : ""
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={positionFilters.Estimulacion.includes(
                                                            sub
                                                        )}
                                                        onChange={() =>
                                                            togglePositionFilter("Estimulacion", sub)
                                                        }
                                                    />
                                                    {formatPositionLabel(sub)}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Acariciamiento extra */}
                                <div>
                                    <div className="setup__position-header">
                                        <button
                                            type="button"
                                            className="setup__position-toggle"
                                            onClick={() =>
                                                togglePositionSection("Acariciamiento_extra")
                                            }
                                        >
                                            {openPositionSections.Acariciamiento_extra
                                                ? "▾"
                                                : "▸"}{" "}
                                            Acariciamiento extra
                                        </button>
                                        <button
                                            type="button"
                                            className={`setup__position-all ${positionFilters.Acariciamiento_extra.length ===
                                                POSITION_OPTIONS.Acariciamiento_extra.length
                                                ? "setup__position-all--active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleAllPositionFilters("Acariciamiento_extra")
                                            }
                                        >
                                            {positionFilters.Acariciamiento_extra.length ===
                                                POSITION_OPTIONS.Acariciamiento_extra.length
                                                ? "Deseleccionar todo"
                                                : "Seleccionar todo"}
                                        </button>
                                    </div>

                                    {openPositionSections.Acariciamiento_extra && (
                                        <div className="setup__options setup__options--grid">
                                            {POSITION_OPTIONS.Acariciamiento_extra.map((sub) => (
                                                <label
                                                    key={sub}
                                                    className={`pill ${positionFilters.Acariciamiento_extra.includes(sub)
                                                        ? "pill--active"
                                                        : ""
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={positionFilters.Acariciamiento_extra.includes(
                                                            sub
                                                        )}
                                                        onChange={() =>
                                                            togglePositionFilter(
                                                                "Acariciamiento_extra",
                                                                sub
                                                            )
                                                        }
                                                    />
                                                    {formatPositionLabel(sub)}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Penetración */}
                                <div>
                                    <div className="setup__position-header">
                                        <button
                                            type="button"
                                            className="setup__position-toggle"
                                            onClick={() => togglePositionSection("Penetracion")}
                                        >
                                            {openPositionSections.Penetracion
                                                ? "▾"
                                                : "▸"}{" "}
                                            Penetración
                                        </button>
                                        <button
                                            type="button"
                                            className={`setup__position-all ${positionFilters.Penetracion.length ===
                                                POSITION_OPTIONS.Penetracion.length
                                                ? "setup__position-all--active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleAllPositionFilters("Penetracion")
                                            }
                                        >
                                            {positionFilters.Penetracion.length ===
                                                POSITION_OPTIONS.Penetracion.length
                                                ? "Deseleccionar todo"
                                                : "Seleccionar todo"}
                                        </button>
                                    </div>

                                    {openPositionSections.Penetracion && (
                                        <div className="setup__options setup__options--grid">
                                            {POSITION_OPTIONS.Penetracion.map((sub) => (
                                                <label
                                                    key={sub}
                                                    className={`pill ${positionFilters.Penetracion.includes(sub)
                                                        ? "pill--active"
                                                        : ""
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={positionFilters.Penetracion.includes(
                                                            sub
                                                        )}
                                                        onChange={() =>
                                                            togglePositionFilter("Penetracion", sub)
                                                        }
                                                    />
                                                    {formatPositionLabel(sub)}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Ubicación */}
                                <div>
                                    <div className="setup__position-header">
                                        <button
                                            type="button"
                                            className="setup__position-toggle"
                                            onClick={() => togglePositionSection("Ubicacion")}
                                        >
                                            {openPositionSections.Ubicacion
                                                ? "▾"
                                                : "▸"}{" "}
                                            Ubicación
                                        </button>
                                        <button
                                            type="button"
                                            className={`setup__position-all ${positionFilters.Ubicacion.length ===
                                                POSITION_OPTIONS.Ubicacion.length
                                                ? "setup__position-all--active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleAllPositionFilters("Ubicacion")
                                            }
                                        >
                                            {positionFilters.Ubicacion.length ===
                                                POSITION_OPTIONS.Ubicacion.length
                                                ? "Deseleccionar todo"
                                                : "Seleccionar todo"}
                                        </button>
                                    </div>

                                    {openPositionSections.Ubicacion && (
                                        <div className="setup__options setup__options--grid">
                                            {POSITION_OPTIONS.Ubicacion.map((sub) => (
                                                <label
                                                    key={sub}
                                                    className={`pill ${positionFilters.Ubicacion.includes(sub)
                                                        ? "pill--active"
                                                        : ""
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={positionFilters.Ubicacion.includes(sub)}
                                                        onChange={() =>
                                                            togglePositionFilter("Ubicacion", sub)
                                                        }
                                                    />
                                                    {formatPositionLabel(sub)}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Actividad */}
                                <div>
                                    <div className="setup__position-header">
                                        <button
                                            type="button"
                                            className="setup__position-toggle"
                                            onClick={() => togglePositionSection("Actividad")}
                                        >
                                            {openPositionSections.Actividad
                                                ? "▾"
                                                : "▸"}{" "}
                                            Actividad
                                        </button>
                                        <button
                                            type="button"
                                            className={`setup__position-all ${positionFilters.Actividad.length ===
                                                POSITION_OPTIONS.Actividad.length
                                                ? "setup__position-all--active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleAllPositionFilters("Actividad")
                                            }
                                        >
                                            {positionFilters.Actividad.length ===
                                                POSITION_OPTIONS.Actividad.length
                                                ? "Deseleccionar todo"
                                                : "Seleccionar todo"}
                                        </button>
                                    </div>

                                    {openPositionSections.Actividad && (
                                        <div className="setup__options setup__options--grid">
                                            {POSITION_OPTIONS.Actividad.map((sub) => (
                                                <label
                                                    key={sub}
                                                    className={`pill ${positionFilters.Actividad.includes(sub)
                                                        ? "pill--active"
                                                        : ""
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={positionFilters.Actividad.includes(sub)}
                                                        onChange={() =>
                                                            togglePositionFilter("Actividad", sub)
                                                        }
                                                    />
                                                    {formatPositionLabel(sub)}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Complejidad */}
                                <div>
                                    <div className="setup__position-header">
                                        <button
                                            type="button"
                                            className="setup__position-toggle"
                                            onClick={() => togglePositionSection("Complejidad")}
                                        >
                                            {openPositionSections.Complejidad
                                                ? "▾"
                                                : "▸"}{" "}
                                            Complejidad
                                        </button>
                                        <button
                                            type="button"
                                            className={`setup__position-all ${positionFilters.Complejidad.length ===
                                                POSITION_OPTIONS.Complejidad.length
                                                ? "setup__position-all--active"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                toggleAllPositionFilters("Complejidad")
                                            }
                                        >
                                            {positionFilters.Complejidad.length ===
                                                POSITION_OPTIONS.Complejidad.length
                                                ? "Deseleccionar todo"
                                                : "Seleccionar todo"}
                                        </button>
                                    </div>

                                    {openPositionSections.Complejidad && (
                                        <div className="setup__options setup__options--grid">
                                            {POSITION_OPTIONS.Complejidad.map((sub) => (
                                                <label
                                                    key={sub}
                                                    className={`pill ${positionFilters.Complejidad.includes(sub)
                                                        ? "pill--active"
                                                        : ""
                                                        }`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={positionFilters.Complejidad.includes(sub)}
                                                        onChange={() =>
                                                            togglePositionFilter("Complejidad", sub)
                                                        }
                                                    />
                                                    {formatPositionLabel(sub)}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>

                {/* PASO 4: Resumen */}
                <AnimatePresence mode="wait">
                    {pasoActual === 4 && (
                        <motion.section
                            key="step-4"
                            className="setup__section"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h3>Resumen de configuración</h3>
                            <p className="setup__hint">Revisa que todo esté correcto antes de empezar.</p>

                            <div className="setup__summary">
                                <h4>Modo de juego</h4>
                                <p>{MODOS.find((m) => m.value === mode)?.label || mode}</p>

                                <h4>Jugadores</h4>
                                <ul>
                                    {players
                                        .map((p) => p.trim())
                                        .filter((p) => p.length > 0)
                                        .map((p, i) => (
                                            <li key={i}>{p}</li>
                                        ))}
                                </ul>

                                <h4>Categorías activas</h4>
                                <p>
                                    {activeCategories.length > 0
                                        ? activeCategories
                                            .map((c) => {
                                                const cat = CATEGORIAS.find(
                                                    (categoria) => categoria.value === c
                                                );
                                                return cat ? cat.label : c;
                                            })
                                            .join(", ")
                                        : "Ninguna (según modo de juego)"}
                                </p>

                                <h4>Duración</h4>
                                <p>
                                    {durationType === "none" && "Sin límite"}
                                    {durationType === "preset" && `${durationPreset} minutos`}
                                    {durationType === "custom" &&
                                        (durationCustom
                                            ? `${durationCustom} minutos`
                                            : "Personalizado (revisa el valor)")}
                                </p>

                                <h4>Filtros de posiciones</h4>
                                <p>
                                    Se aplicarán los filtros seleccionados en el paso anterior
                                    cuando corresponda.
                                </p>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>


                {/* Controles de navegación del wizard */}
                <div className="setup__wizard-controls">
                    {pasoActual > 1 && (
                        <button
                            type="button"
                            className="setup__back"
                            onClick={handleAnterior}
                        >
                            Anterior
                        </button>
                    )}

                    {pasoActual < 4 && (
                        <button
                            type="button"
                            className="setup__submit"
                            onClick={handleSiguiente}
                        >
                            Siguiente
                        </button>
                    )}

                    {pasoActual === 4 && (
                        <ButtonWithLoader
                            type="submit"
                            className="setup__submit"
                            isLoading={isSubmitting}
                        >
                            Iniciar juego
                        </ButtonWithLoader>
                    )}
                </div>
            </form>
        </motion.div>
    );
}

export default GameSetup;
