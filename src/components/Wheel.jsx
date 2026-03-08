import { useState } from "react";

const SEGMENTS = [
    { id: "drink", label: "Tomar trago" },
    { id: "truth", label: "Verdad" },
    { id: "dare", label: "Reto" },
    { id: "card", label: "Carta al azar" },
    { id: "change_player", label: "Cambio de jugador" },
    { id: "skip_turn", label: "Salta turno" },
];

function Wheel({ onResult, disabled }) {
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleSpin = () => {
        if (isSpinning || disabled) return;

        setIsSpinning(true);

        const fullTurns = 5 * 360;
        const randomExtra = Math.floor(Math.random() * 360);
        const newRotation = rotation + fullTurns + randomExtra;

        setRotation(newRotation);

        const segmentAngle = 360 / SEGMENTS.length;
        const normalized = (newRotation % 360 + 360) % 360;
        const index = Math.floor((SEGMENTS.length - normalized / segmentAngle) % SEGMENTS.length);
        const segment = SEGMENTS[index];

        setTimeout(() => {
            setIsSpinning(false);
            if (onResult) onResult(segment);
        }, 2200);
    };

    return (
        <div className="wheel">
            <div className="wheel__container">
                <div className="wheel__pointer" />
                <div
                    className={`wheel__disc ${isSpinning ? "wheel__disc--spinning" : ""}`}
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {SEGMENTS.map((seg, idx) => (
                        <div
                            key={seg.id}
                            className="wheel__segment"
                            style={{
                                transform: `rotate(${(360 / SEGMENTS.length) * idx}deg)`,
                            }}
                        >
                            <span>{seg.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                className="wheel__btn"
                onClick={handleSpin}
                disabled={isSpinning || disabled}
            >
                {isSpinning ? "Girando..." : "Girar ruleta"}
            </button>
        </div>
    );
}

export default Wheel;
