<div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-ink group-hover:bg-neon-pink transition-colors" />
                    </button >

    {/* -1: Weak No */ }
    < button
onClick = {() => handleAnswer(-1)}
className = "w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center group"
    >
    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-400 group-hover:bg-neon-pink transition-colors" />
                    </button >

    {/* 0: Neutral */ }
    < button
onClick = {() => handleAnswer(0)}
className = "w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center"
    >
    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300" />
                    </button >

    {/* +1: Weak Yes */ }
    < button
onClick = {() => handleAnswer(1)}
className = "w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center group"
    >
    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-400 group-hover:bg-neon-blue transition-colors" />
                    </button >

    {/* +2: Strong Yes */ }
    < button
onClick = {() => handleAnswer(2)}
className = "w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center group"
    >
    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-ink group-hover:bg-neon-blue transition-colors" />
                    </button >
                </div >

    <div className="text-center text-xs text-gray-400 mt-4">
        直感で答えてください
    </div>
            </div >
        </NotebookLayout >
    );
}
