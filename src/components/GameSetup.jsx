import { useState } from "react";

const MODOS = [
    { value: "cartas", label: "Cartas" },
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
    const [players, setPlayers] = useState(
        initialConfig?.players && initialConfig.players.length
            ? initialConfig.players
            : ["Jugador 1", "Jugador 2"]
    );
    const [mode, setMode] = useState(initialConfig?.mode || "cartas");
    const [activeCategories, setActiveCategories] = useState(
        initialConfig?.activeCategories && initialConfig.activeCategories.length
            ? initialConfig.activeCategories
            : CATEGORIAS.map((c) => c.value)
    );

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
    } else {
        initialDurationType = "none";
    }

    const [durationType, setDurationType] = useState(initialDurationType); // "preset" | "custom" | "none"
    const [durationPreset, setDurationPreset] = useState(initialPreset);
    const [durationCustom, setDurationCustom] = useState(initialCustom);

    const minPlayers = 1;
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedPlayers = players
            .map((p) => p.trim())
            .filter((p) => p.length > 0);

        if (trimmedPlayers.length < 1) {
            alert("Debes tener al menos un jugador.");
            return;
        }

        if (activeCategories.length === 0 && mode !== "cartas" && mode !== "ruleta") {
            alert("Selecciona al menos una categoría.");
            return;
        }

        let finalDuration = null;
        if (durationType === "preset") {
            finalDuration = Number(durationPreset);
        } else if (durationType === "custom") {
            const n = Number(durationCustom);
            if (!Number.isFinite(n) || n <= 0) {
                alert("Introduce una duración personalizada válida (en minutos).");
                return;
            }
            finalDuration = n;
        } else {
            finalDuration = null; // sin límite
        }

        const gameConfig = {
            // si viene de partida existente, mantenemos el mismo id
            id: initialConfig?.id || Date.now().toString(),
            mode,
            players: trimmedPlayers,
            // si editamos, mantenemos índice de jugador actual; si no, empezamos en 0
            currentPlayerIndex: initialConfig?.currentPlayerIndex || 0,
            activeCategories,
            duration: finalDuration, // número o null
            // si editamos una partida en curso, podemos mantener el startTime
            startTime: initialConfig?.startTime || null,
        };



        console.log("Configuración de partida:", gameConfig);

        if (onStart) {
            onStart(gameConfig);
        } else {
            alert("Configuración lista. (Luego cargaremos la pantalla de juego).");
        }
    };

    return (
        <div className="setup">
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
                {/* Modo de juego */}
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
                </section>

                {/* Jugadores */}
                <section className="setup__section">
                    <h3>Jugadores ({players.length})</h3>
                    <p className="setup__hint">
                        Mínimo {minPlayers}, máximo {maxPlayers}. Puedes jugar solo, en
                        pareja o en grupo.
                    </p>

                    <div className="setup__players">
                        {players.map((player, index) => (
                            <div key={index} className="setup__player-row">
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
                            </div>
                        ))}
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


                {/* Categorías */}
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
                </section>

                {/* Duración */}
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
                        <div className="setup__options setup__options--inline" style={{ marginTop: "0.6rem" }}>
                            {DURACIONES.map((d) => (
                                <label
                                    key={d.value}
                                    className={`pill ${Number(durationPreset) === d.value ? "pill--active" : ""
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
                </section>


                <button type="submit" className="setup__submit">
                    Iniciar juego
                </button>
            </form>
        </div>
    );
}

export default GameSetup;
