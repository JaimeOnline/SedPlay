function AgeWarning({ onAccept }) {
    return (
        <div className="age-warning">
            <div className="age-warning__card">
                <h1>SedPlay</h1>
                <h2>+18 / Solo adultos</h2>
                <p>
                    Esta aplicación es solo para mayores de 18 años.
                    Úsala siempre con respeto, consentimiento y sin hacer nada que
                    te haga sentir incómodo/a.
                </p>
                <button onClick={onAccept}>Tengo 18 años o más</button>
            </div>
        </div>
    );
}

export default AgeWarning;


