export const SUPPORTED_LOCALES = ["es", "en"];

const STORAGE_KEY = "sedplay.lang";

export function loadLanguage() {
    if (typeof window === "undefined") return "es";
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
    } catch (e) {
        // ignore
    }
    return "es";
}

export function saveLanguage(lang) {
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
        // ignore
    }
}

export const messages = {
    es: {
        appName: "SedPlay",
        subtitle: "Juego erótico para adultos (+18)",
        newGame: "Nuevo juego",
        manageContent: "Gestionar contenido",
        settings: "Configuración",
        back: "Volver",
        ageTitle: "+18 / Solo adultos",
        ageButton: "Tengo 18 años o más",
        ageText:
            "Esta aplicación es solo para mayores de 18 años. Úsala siempre con respeto, consentimiento y sin hacer nada que te haga sentir incómodo/a.",
        language: "Idioma",
    },
    en: {
        appName: "SedPlay",
        subtitle: "Erotic party game (18+ only)",
        newGame: "New game",
        manageContent: "Manage content",
        settings: "Settings",
        back: "Back",
        ageTitle: "+18 / Adults only",
        ageButton: "I am 18 or older",
        ageText:
            "This app is only for adults (18+). Always play with respect, consent, and never do anything that makes you feel uncomfortable.",
        language: "Language",
    },
};

export function t(lang, key) {
    const dict = messages[lang] || messages.es;
    return dict[key] || key;
}
