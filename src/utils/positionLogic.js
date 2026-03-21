import { loadPositionImages } from "./positionLoader";

let cachedPositions = null;

/**
 * Carga y cachea las imágenes de posiciones.
 */
async function getPositions() {
    if (!cachedPositions) {
        cachedPositions = await loadPositionImages();
    }
    return cachedPositions;
}

/**
 * Obtiene una imagen random de posición según los filtros.
 * 
 * @param {Object} filters - Objeto con clasificaciones y subcategorías seleccionadas
 *   Ej: {
 *     "tipo_de_posicion_sexual": ["acostados", "cara_a_cara"],
 *     "Estimulacion": ["estimulacion_uniforme"],
 *     ...
 *   }
 * @returns {Object} { classification, subcategory, filename, url }
 */
export async function getRandomPosition(filters = {}) {
    const positions = await getPositions();

    // Recopilar todas las imágenes que coinciden con los filtros
    const matchingImages = [];

    for (const [classification, subcategories] of Object.entries(filters)) {
        if (!positions[classification]) continue;

        for (const subcategory of subcategories) {
            const images = positions[classification][subcategory];
            if (images && images.length > 0) {
                for (const image of images) {
                    matchingImages.push({
                        classification,
                        subcategory,
                        ...image,
                    });
                }
            }
        }
    }

    if (matchingImages.length === 0) {
        return null;
    }

    // Elegir una imagen random
    const randomIndex = Math.floor(Math.random() * matchingImages.length);
    return matchingImages[randomIndex];
}

/**
 * Obtiene todas las imágenes de una subcategoría específica.
 * Útil para modo "ordenado" (ver todas de forma continua).
 */
export async function getPositionsInSubcategory(classification, subcategory) {
    const positions = await getPositions();

    if (!positions[classification] || !positions[classification][subcategory]) {
        return [];
    }

    return positions[classification][subcategory].map((image) => ({
        classification,
        subcategory,
        ...image,
    }));
}

/**
 * Obtiene todas las imágenes que coinciden con los filtros.
 * Útil para modo "ordenado" (ver todas de forma continua).
 */
export async function getAllPositionsWithFilters(filters = {}) {
    const positions = await getPositions();
    const allImages = [];

    for (const [classification, subcategories] of Object.entries(filters)) {
        if (!positions[classification]) continue;

        for (const subcategory of subcategories) {
            const images = positions[classification][subcategory];
            if (images && images.length > 0) {
                for (const image of images) {
                    allImages.push({
                        classification,
                        subcategory,
                        ...image,
                    });
                }
            }
        }
    }

    return allImages;
}
