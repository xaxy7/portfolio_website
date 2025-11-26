
export const FireflyBackground = () => {
    return (
        <div className="firefly-bg">
            <ul className="fireflies">
                {Array.from({ length: 10 }).map((_, i) => (
                    <li key={i} className="firefly"></li>
                ))}
            </ul>
        </div>
    );
};
