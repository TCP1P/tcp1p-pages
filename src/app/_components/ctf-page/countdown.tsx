'use client';
import { useEffect, useState } from "react";

interface CountdownProps {
    endDate: number;
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = endDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    return (
        <div className="rounded-xl text-center">
            <div className="flex justify-center gap-5 text-white text-2xl font-medium">
                <div>
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-2">
                        <span className="font-mono">{timeLeft.days}</span>
                    </div>
                    <span className="text-gray-400">days</span>
                </div>
                <div>
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-2">
                        <span className="font-mono">{timeLeft.hours}</span>
                    </div>
                    <span className="text-gray-400">hours</span>
                </div>
                <div>
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-2">
                        <span className="font-mono">{timeLeft.minutes}</span>
                    </div>
                    <span className="text-gray-400">min</span>
                </div>
                <div>
                    <div className="bg-gray-800/50 rounded-lg p-4 mb-2">
                        <span className="font-mono">{timeLeft.seconds}</span>
                    </div>
                    <span className="text-gray-400">sec</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
