import { useState } from "react";

// segmentos por defecto (sin "Posición"; se agrega desde GameScreen según categoría)
const DEFAULT_SEGMENTS = [
    { id: "drink", label: "Tomar trago" },
    { id: "truth", label: "Verdad" },
    { id: "dare", label: "Reto" },
    { id: "card", label: "Carta al azar" },
];

function Wheel({ onResult, disabled, segments }) {
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    // si no se pasan segmentos desde fuera, usamos los por defecto
    const segs = segments && segments.length ? segments : DEFAULT_SEGMENTS;

    const handleSpin = () => {
        if (isSpinning || disabled) return;

        setIsSpinning(true);

        const fullTurns = 5 * 360;
        const randomExtra = Math.floor(Math.random() * 360);
        const newRotation = rotation + fullTurns + randomExtra;

        setRotation(newRotation);

        const segmentAngle = 360 / segs.length;
        const normalized = (newRotation % 360 + 360) % 360;
        const index = Math.floor((segs.length - normalized / segmentAngle) % segs.length);
        const segment = segs[index];

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
                    {segs.map((seg, idx) => (
                        <div
                            key={seg.id}
                            className="wheel__segment"
                            style={{
                                transform: `rotate(${(360 / segs.length) * idx}deg)`,
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

