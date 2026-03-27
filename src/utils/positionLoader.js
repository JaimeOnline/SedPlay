/**
 * Carga dinámicamente todas las imágenes de posiciones desde las carpetas.
 * Usa import.meta.glob de Vite para importar archivos dinámicamente.
 */

// Mapeo de carpetas principales a sus subcarpetas
const CLASSIFICATION_STRUCTURE = {
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
    Todas_Las_Posiciones: [
        "Todas_Las_Posiciones",
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

/**
 * Carga todas las imágenes de posiciones.
 * Retorna un objeto con la estructura:
 * {
 *   "tipo_de_posicion_sexual": {
 *     "acostados": ["/src/assets/clasificacion/tipo_de_posicion_sexual/acostados/img1.png", ...],
 *     ...
 *   },
 *   ...
 * }
 */
export async function loadPositionImages() {
    const positions = {};

    // Usar import.meta.glob para cargar dinámicamente todas las imágenes
    const imageModules = import.meta.glob(
        "/src/assets/clasificacion/**/*.{png,jpg,jpeg}",
        { eager: true }
    );

    // Procesar cada imagen y organizarla por clasificación
    console.log("positionLoader - imágenes encontradas:", Object.keys(imageModules));

    for (const [path, module] of Object.entries(imageModules)) {
        // Extraer la ruta relativa desde clasificacion
        // Ej: /src/assets/clasificacion/tipo_de_posicion_sexual/acostados/img.png
        const pathParts = path.split("/");
        const clasificacionIndex = pathParts.indexOf("clasificacion");

        if (clasificacionIndex === -1) continue;

        const classification = pathParts[clasificacionIndex + 1]; // tipo_de_posicion_sexual, Todas_Las_Posiciones, etc.
        const subcategory = pathParts[clasificacionIndex + 2]; // acostados, Todas_Las_Posiciones, etc.
        const filename = pathParts[pathParts.length - 1];

        if (!classification || !subcategory) continue;

        // Inicializar estructura si no existe
        if (!positions[classification]) {
            positions[classification] = {};
        }
        if (!positions[classification][subcategory]) {
            positions[classification][subcategory] = [];
        }

        // Agregar la URL de la imagen
        positions[classification][subcategory].push({
            filename,
            url: module.default || path,
        });
    }

    return positions;
}

/**
 * Obtiene todas las subcategorías disponibles para una clasificación.
 * Ej: getSubcategoriesForClassification("tipo_de_posicion_sexual")
 * Retorna: ["acostados", "cara_a_cara", ...]
 */
export function getSubcategoriesForClassification(classification) {
    return CLASSIFICATION_STRUCTURE[classification] || [];
}

/**
 * Obtiene todas las clasificaciones disponibles.
 */
export function getAllClassifications() {
    return Object.keys(CLASSIFICATION_STRUCTURE);
}