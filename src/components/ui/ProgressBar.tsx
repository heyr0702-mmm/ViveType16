import React from 'react';

interface ProgressBarProps {
    value: number; // 0 to 100
    color?: 'yellow' | 'pink' | 'blue';
    labelLeft?: string;
    labelRight?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    value,
    color = 'yellow',
    labelLeft,
    labelRight
}) => {
    const colorClasses = {
        yellow: 'bg-neon-yellow',
        pink: 'bg-neon-pink',
        blue: 'bg-neon-blue',
    };

    return (
        <div className="w-full mb-4">
            <div className="flex justify-between text-xs sm:text-sm font-bold mb-1 font-handwriting">
                <span>{labelLeft}</span>
                <span>{labelRight}</span>
            </div>
            <div className="w-full h-4 border-2 border-ink rounded-full p-0.5 bg-white relative overflow-hidden">
                <div
                    className={`h-full rounded-full ${colorClasses[color]} transition-all duration-1000 ease-out`}
                    style={{ width: `${value}%` }}
                />
                {/* Grid lines overlay for 'ruler' look */}
                <div className="absolute inset-0 flex justify-between px-2 pointer-events-none">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="h-full w-px bg-ink opacity-20" />
                    ))}
                </div>
            </div>
        </div>
    );
};
