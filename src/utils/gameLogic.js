import { defaultItems } from "../data/defaultContent";
import { loadCustomItems } from "./storage";

/**
 * Devuelve una lista de items filtrados por:
 * - type: "truth" | "dare" | "card"
 * - categories: array de categorías activas
 * - intensity: "suave" | "medio" | "alto" | "todos"
 */
export function getFilteredItems({ type, categories, intensity }) {
    const customItems = loadCustomItems();
    let items = [...defaultItems, ...customItems].filter(
        (item) => item.type === type
    );


    if (Array.isArray(categories) && categories.length > 0) {
        items = items.filter((item) => categories.includes(item.category));
    }

    if (intensity !== "todos") {
        items = items.filter((item) => item.intensity === intensity);
    }

    return items;
}

/**
 * Devuelve un item aleatorio según los filtros.
 */
export function getRandomItem(options) {
    const list = getFilteredItems(options);
    if (!list.length) return null;
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}
