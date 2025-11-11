export const Background = () => {
    const fireflies = Array.from({ length: 10 }).map(() => {
        const size = Math.floor(Math.random() * 40) + 20; // 20-60px
        const duration = Math.floor(Math.random() * 17) + 8; // 8-25s
        const delay = Math.floor(Math.random() * 15); // 0-15s
        const flickerDuration = Math.random() * 1.5 + 1; // 1-2.5s

        return { size, duration, delay, flickerDuration };
    });

    return (
        <div className="firefly-bg">
            <ul className="fireflies">
                {fireflies.map((f, i) => (
                    <li
                        key={i}
                        className="firefly"
                        style={{
                            width: `${f.size}px`,
                            height: `${f.size}px`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${f.duration}s, ${f.flickerDuration}s`,
                            animationDelay: `${f.delay}s, ${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </ul>
        </div>
    );
};
