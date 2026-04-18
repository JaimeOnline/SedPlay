function SkeletonBox({ width = "100%", height = "1rem", radius = "999px" }) {
    return (
        <div
            className="skeleton-box"
            style={{ width, height, borderRadius: radius }}
        />
    );
}

export default SkeletonBox;
