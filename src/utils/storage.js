const CUSTOM_ITEMS_KEY = "sedplay.customItems";

/**
 * Obtiene los ítems personalizados desde localStorage.
 * Devuelve siempre un array.
 */
export function loadCustomItems() {
    try {
        const raw = localStorage.getItem(CUSTOM_ITEMS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed;
    } catch (err) {
        console.error("Error leyendo customItems:", err);
        return [];
    }
}

/**
 * Guarda la lista completa de ítems personalizados en localStorage.
 */
export function saveCustomItems(items) {
    try {
        localStorage.setItem(CUSTOM_ITEMS_KEY, JSON.stringify(items || []));
    } catch (err) {
        console.error("Error guardando customItems:", err);
    }
}

/**
 * Añade un ítem personalizado.
 */
export function addCustomItem(item) {
    const items = loadCustomItems();
    const newItem = {
        ...item,
        id: item.id || `custom-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        custom: true,
        createdAt: item.createdAt || Date.now(),
    };
    const updated = [...items, newItem];
    saveCustomItems(updated);
    return newItem;
}

/**
 * Edita un ítem personalizado por id.
 */
export function updateCustomItem(id, partial) {
    const items = loadCustomItems();
    const updated = items.map((it) =>
        it.id === id ? { ...it, ...partial, updatedAt: Date.now() } : it
    );
    saveCustomItems(updated);
    return updated;
}

/**
 * Elimina un ítem personalizado por id.
 */
export function deleteCustomItem(id) {
    const items = loadCustomItems();
    const updated = items.filter((it) => it.id !== id);
    saveCustomItems(updated);
    return updated;
}
