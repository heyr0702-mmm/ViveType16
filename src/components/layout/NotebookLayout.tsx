import React from 'react';

interface NotebookLayoutProps {
    children: React.ReactNode;
    className?: string;
}

export const NotebookLayout: React.FC<NotebookLayoutProps> = ({ children, className = '' }) => {
    return (
        <div className="min-h-screen w-full flex justify-center p-4 sm:p-8">
            <div className={`
        w-full max-w-3xl 
        bg-paper 
        notebook-border 
        relative 
        p-6 sm:p-12
        min-h-[80vh]
        ${className}
      `}>
                {/* Notebook Binding Visual (Left side) */}
                <div className="absolute left-2 top-0 bottom-0 w-8 flex flex-col justify-evenly py-4 pointer-events-none opacity-20 sm:opacity-40">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-gray-400 shadow-inner" />
                    ))}
                </div>

                {/* Content Area */}
                <div className="relative z-10 pl-6 sm:pl-8">
                    {children}
                </div>
            </div>
        </div>
    );
};
