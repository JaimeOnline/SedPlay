function ButtonWithLoader({
    isLoading,
    children,
    disabled,
    className = "",
    ...rest
}) {
    const isDisabled = disabled || isLoading;

    return (
        <button
            {...rest}
            className={className}
            disabled={isDisabled}
        >
            {isLoading ? "Iniciando..." : children}
        </button>
    );
}

export default ButtonWithLoader;
