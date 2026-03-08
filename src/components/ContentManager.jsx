import { useEffect, useState } from "react";
import { defaultItems } from "../data/defaultContent";
import {
    loadCustomItems,
    addCustomItem,
    updateCustomItem,
    deleteCustomItem,
} from "../utils/storage";

const TYPES = [
    { value: "truth", label: "Verdad" },
    { value: "dare", label: "Reto" },
    { value: "card", label: "Carta" },
];

const CATEGORIES = [
    { value: "rompehielos", label: "Rompehielos" },
    { value: "romantico", label: "Romántico" },
    { value: "picante", label: "Picante" },
    { value: "extremo", label: "Extremo" },
    { value: "locuras", label: "Locuras / Random" },
];

const INTENSIDADES = [
    { value: "suave", label: "Suave" },
    { value: "medio", label: "Medio" },
    { value: "alto", label: "Alto" },
];

const EMPTY_FORM = {
    id: null,
    type: "truth",
    category: "rompehielos",
    intensity: "suave",
    text: "",
};

function ContentManager({ onBack }) {
    const [customItems, setCustomItems] = useState([]);
    const [filters, setFilters] = useState({
        type: "all",
        category: "all",
        intensity: "all",
    });
    const [form, setForm] = useState(EMPTY_FORM);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setCustomItems(loadCustomItems());
    }, []);

    const totalDefaults = defaultItems.length;
    const totalCustom = customItems.length;

    const handleFilterChange = (field, value) => {
        setFilters((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const filteredCustomItems = customItems.filter((item) => {
        if (filters.type !== "all" && item.type !== filters.type) return false;
        if (filters.category !== "all" && item.category !== filters.category)
            return false;
        if (filters.intensity !== "all" && item.intensity !== filters.intensity)
            return false;
        return true;
    });

    const handleFormChange = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = form.text.trim();
        if (!text) {
            alert("El texto no puede estar vacío.");
            return;
        }

        if (isEditing && form.id) {
            const updated = updateCustomItem(form.id, {
                type: form.type,
                category: form.category,
                intensity: form.intensity,
                text,
            });
            setCustomItems(updated);
        } else {
            const created = addCustomItem({
                type: form.type,
                category: form.category,
                intensity: form.intensity,
                text,
            });
            setCustomItems((prev) => [...prev, created]);
        }

        setForm(EMPTY_FORM);
        setIsEditing(false);
    };

    const handleEdit = (item) => {
        setForm({
            id: item.id,
            type: item.type,
            category: item.category,
            intensity: item.intensity,
            text: item.text,
        });
        setIsEditing(true);
    };

    const handleDelete = (item) => {
        if (!window.confirm("¿Eliminar este ítem?")) return;
        const updated = deleteCustomItem(item.id);
        setCustomItems(updated);

        if (isEditing && form.id === item.id) {
            setForm(EMPTY_FORM);
            setIsEditing(false);
        }
    };

    const handleCancelEdit = () => {
        setForm(EMPTY_FORM);
        setIsEditing(false);
    };

    return (
        <div className="setup">
            <button className="setup__back" onClick={onBack}>
                ← Volver
            </button>
            <h2>Gestionar contenido</h2>

            {/* Resumen */}
            <section className="setup__section">
                <h3>Resumen</h3>
                <p className="setup__hint">
                    Crea o modifica las preguntas, retos y cartas del juego. El contenido
                    personalizado se guarda solo en este dispositivo.
                </p>

                <ul className="cm__stats">
                    <li>
                        <strong>Contenido por defecto:</strong> {totalDefaults} ítems
                    </li>
                    <li>
                        <strong>Contenido personalizado:</strong> {totalCustom} ítems
                    </li>
                </ul>
            </section>

            {/* Filtros */}
            <section className="setup__section">
                <h3>Filtro de contenido personalizado</h3>
                <div className="cm__filters">
                    <label>
                        <span>Tipo</span>
                        <select
                            value={filters.type}
                            onChange={(e) => handleFilterChange("type", e.target.value)}
                        >
                            <option value="all">Todos</option>
                            {TYPES.map((t) => (
                                <option key={t.value} value={t.value}>
                                    {t.label}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label>
                        <span>Categoría</span>
                        <select
                            value={filters.category}
                            onChange={(e) => handleFilterChange("category", e.target.value)}
                        >
                            <option value="all">Todas</option>
                            {CATEGORIES.map((c) => (
                                <option key={c.value} value={c.value}>
                                    {c.label}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label>
                        <span>Intensidad</span>
                        <select
                            value={filters.intensity}
                            onChange={(e) => handleFilterChange("intensity", e.target.value)}
                        >
                            <option value="all">Todas</option>
                            {INTENSIDADES.map((i) => (
                                <option key={i.value} value={i.value}>
                                    {i.label}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </section>

            {/* Lista de ítems personalizados */}
            <section className="setup__section">
                <h3>Ítems personalizados</h3>
                {filteredCustomItems.length === 0 ? (
                    <p className="setup__hint">
                        No hay ítems que coincidan con el filtro. Crea uno nuevo con el
                        formulario de abajo.
                    </p>
                ) : (
                    <ul className="cm__list">
                        {filteredCustomItems.map((item) => (
                            <li key={item.id} className="cm__item">
                                <div className="cm__item-meta">
                                    <span className="cm__badge">
                                        {TYPES.find((t) => t.value === item.type)?.label ??
                                            item.type}
                                    </span>
                                    <span className="cm__badge cm__badge--soft">
                                        {CATEGORIES.find((c) => c.value === item.category)?.label ??
                                            item.category}
                                    </span>
                                    <span className="cm__badge cm__badge--soft">
                                        {
                                            INTENSIDADES.find((i) => i.value === item.intensity)
                                                ?.label
                                        }
                                    </span>
                                </div>
                                <p className="cm__item-text">{item.text}</p>
                                <div className="cm__item-actions">
                                    <button
                                        type="button"
                                        className="cm__btn cm__btn--ghost"
                                        onClick={() => handleEdit(item)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        type="button"
                                        className="cm__btn cm__btn--danger"
                                        onClick={() => handleDelete(item)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </section>

            {/* Formulario de creación/edición */}
            <section className="setup__section">
                <h3>{isEditing ? "Editar ítem" : "Crear nuevo ítem"}</h3>
                <form className="cm__form" onSubmit={handleSubmit}>
                    <div className="cm__form-row">
                        <label>
                            <span>Tipo</span>
                            <select
                                value={form.type}
                                onChange={(e) => handleFormChange("type", e.target.value)}
                            >
                                {TYPES.map((t) => (
                                    <option key={t.value} value={t.value}>
                                        {t.label}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            <span>Categoría</span>
                            <select
                                value={form.category}
                                onChange={(e) => handleFormChange("category", e.target.value)}
                            >
                                {CATEGORIES.map((c) => (
                                    <option key={c.value} value={c.value}>
                                        {c.label}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            <span>Intensidad</span>
                            <select
                                value={form.intensity}
                                onChange={(e) => handleFormChange("intensity", e.target.value)}
                            >
                                {INTENSIDADES.map((i) => (
                                    <option key={i.value} value={i.value}>
                                        {i.label}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <label className="cm__form-text">
                        <span>Texto</span>
                        <textarea
                            value={form.text}
                            onChange={(e) => handleFormChange("text", e.target.value)}
                            rows={3}
                            placeholder="Escribe aquí la pregunta, reto o carta..."
                        />
                    </label>

                    <div className="cm__form-actions">
                        {isEditing && (
                            <button
                                type="button"
                                className="cm__btn cm__btn--ghost"
                                onClick={handleCancelEdit}
                            >
                                Cancelar
                            </button>
                        )}
                        <button
                            type="submit"
                            className="cm__btn cm__btn--primary"
                        >
                            {isEditing ? "Guardar cambios" : "Crear ítem"}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default ContentManager;

