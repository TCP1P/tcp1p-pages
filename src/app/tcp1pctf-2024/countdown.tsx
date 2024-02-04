'use client'
import { useEffect, useState } from "react";

export function Countdown({ endDate }: { endDate: number }) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = endDate - now;

        if (difference <= 0) {
            // Timer has expired, you can handle this case as needed
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    return (
        <>
            <div className="flex gap-5">
                <div>
                    <span className="countdown font-mono text-2xl">
                        {timeLeft.days}
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-2xl">
                        {/* @ts-ignore */}
                        <span style={{ "--value": timeLeft.hours }}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-2xl">
                        {/* @ts-ignore */}
                        <span style={{ "--value": timeLeft.minutes }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-2xl">
                        {/* @ts-ignore */}
                        <span style={{ "--value": timeLeft.seconds }}></span>
                    </span>
                    sec
                </div>
            </div>
        </>
    );
}
