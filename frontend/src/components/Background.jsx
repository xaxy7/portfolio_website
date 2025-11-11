export const Background = () => {
    const fireflies = Array.from({ length: 25 }).map(() => {
        const size = Math.random() * 30 + 15; // 15-45px
        const moveDuration = Math.random() * 20 + 15; // 15-35s
        const flickerDuration = Math.random() * 1.5 + 1; // 1-2.5s

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Random starting position
        const startX = Math.random() * viewportWidth;
        const startY = Math.random() * viewportHeight;

        // Generate 8 random offsets for smooth looping
        const path = Array.from({ length: 8 }).map(() => ({
            x: Math.random() * 200 - 100, // offset ±100px
            y: Math.random() * 200 - 100, // offset ±100px
        }));

        return { size, moveDuration, flickerDuration, startX, startY, path };
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
                            left: `${f.startX}px`,
                            top: `${f.startY}px`,
                            animationDuration: `${f.moveDuration}s, ${f.flickerDuration}s`,
                            animationDelay: `0s, 0s`,
                            '--x0': `${f.path[0].x}px`,
                            '--y0': `${f.path[0].y}px`,
                            '--x1': `${f.path[1].x}px`,
                            '--y1': `${f.path[1].y}px`,
                            '--x2': `${f.path[2].x}px`,
                            '--y2': `${f.path[2].y}px`,
                            '--x3': `${f.path[3].x}px`,
                            '--y3': `${f.path[3].y}px`,
                            '--x4': `${f.path[4].x}px`,
                            '--y4': `${f.path[4].y}px`,
                            '--x5': `${f.path[5].x}px`,
                            '--y5': `${f.path[5].y}px`,
                            '--x6': `${f.path[6].x}px`,
                            '--y6': `${f.path[6].y}px`,
                            '--x7': `${f.path[7].x}px`,
                            '--y7': `${f.path[7].y}px`,
                        }}
                    />
                ))}
            </ul>
        </div>
    );
};
