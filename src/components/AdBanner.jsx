function AdBanner({ position = "bottom" }) {
    return (
        <div className={`ad-banner ad-banner--${position}`}>
            <div className="ad-banner__inner">
                <p className="ad-banner__label">Espacio para anuncio</p>
                <p className="ad-banner__text">
                    Aquí se mostraría publicidad de tiendas de juguetes sexuales u otros
                    patrocinadores.
                </p>
            </div>
        </div>
    );
}

export default AdBanner;
