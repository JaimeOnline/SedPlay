import { useState } from "react";
import GameSetup from "./GameSetup";
import GameScreen from "./GameScreen";
import ContentManager from "./ContentManager";
import AdBanner from "./AdBanner";


function Home() {
    const [view, setView] = useState("menu"); // "menu" | "setup" | "game" | "content" | "edit-setup"
    const [currentGame, setCurrentGame] = useState(null);

    const handleStartGame = (gameConfig) => {
        setCurrentGame({
            ...gameConfig,
            startTime: Date.now(),
        });
        setView("game");
    };

    const handleExitGame = () => {
        setCurrentGame(null);
        setView("menu");
    };

    // Volver al juego después de editar la configuración
    const handleUpdateGameConfig = (updatedConfig) => {
        setCurrentGame((prev) => ({
            // mantenemos cosas como el id y el startTime
            ...(prev || {}),
            ...updatedConfig,
        }));
        setView("game");
    };

    if (view === "setup") {
        // creación de nueva partida
        return (
            <GameSetup onBack={() => setView("menu")} onStart={handleStartGame} />
        );
    }

    if (view === "edit-setup" && currentGame) {
        // edición de partida existente
        return (
            <GameSetup
                initialConfig={currentGame}
                onBack={() => setView("game")}          // volver al juego
                onExitToMenu={() => {
                    setCurrentGame(null);
                    setView("menu");
                }}                                      // salir al menú
                onStart={handleUpdateGameConfig}
            />
        );
    }


    if (view === "game" && currentGame) {
        return (
            <GameScreen
                game={currentGame}
                onExit={handleExitGame}
                onEditConfig={() => setView("edit-setup")}
            />
        );
    }


    if (view === "content") {
        return <ContentManager onBack={() => setView("menu")} />;
    }

    return (
        <>
            <div className="home">
                <h1>SedPlay</h1>
                <p className="home__subtitle">Juego erótico para adultos (+18)</p>

                <div className="home__buttons">
                    <button onClick={() => setView("setup")}>Nuevo juego</button>
                    <button onClick={() => setView("content")}>
                        Gestionar contenido
                    </button>
                    {/* <button disabled>Configuración (pronto)</button> */}
                </div>
            </div>

            {/* Espacio para anuncio en pantalla Home */}
            {/* <AdBanner position="bottom" /> */} {/* Habilitar esta linea */}
        </>
    );

}

export default Home;
