"use client";

import { useState, useEffect } from "react";

export default function LiveClock() {
    const [timeStr, setTimeStr] = useState("00:00 --");

    // Wait for client mount to avoid hydration mismatch
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const updateTime = () => {
            const now = new Date();
            const nairobiTime = new Date(
                now.toLocaleString("en-US", { timeZone: "Africa/Nairobi" })
            );

            let hours = nairobiTime.getHours();
            const minutes = nairobiTime.getMinutes().toString().padStart(2, "0");
            const ampm = hours >= 12 ? "pm" : "am";

            hours = hours % 12;
            hours = hours ? hours : 12;
            const hoursStr = hours.toString().padStart(2, "0");

            setTimeStr(`${hoursStr}:${minutes} ${ampm}`);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 10000);

        return () => clearInterval(intervalId);
    }, []);

    if (!mounted) {
        return <span className="hero__location-time">--:-- --</span>;
    }

    return <span className="hero__location-time">{timeStr}</span>;
}
