"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { QUESTIONS } from "@/lib/constants";
import { Answers } from "@/lib/logic";

export default function Diagnosis() {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [isTransitioning, setIsTransitioning] = useState(false);

    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

    const handleAnswer = (value: number) => {
        if (isTransitioning) return;

        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
        setIsTransitioning(true);

        // Auto-advance after a short delay for visual feedback
        setTimeout(() => {
            if (currentQuestionIndex < QUESTIONS.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
                setIsTransitioning(false);
            } else {
                finishDiagnosis({ ...answers, [currentQuestion.id]: value });
            }
        }, 300);
    };

    const finishDiagnosis = (finalAnswers: Answers) => {
        const answersStr = encodeURIComponent(JSON.stringify(finalAnswers));
        router.push(`/result?data=${answersStr}`);
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        } else {
            router.push("/");
        }
    };

    return (
        <NotebookLayout className="flex flex-col justify-between max-w-2xl mx-auto h-full py-4">
            {/* Header / Progress */}
            <div className="space-y-2">
                <div className="flex justify-between items-end border-b-2 border-ink pb-2">
                    <span className="font-bold font-handwriting text-xl">
                        Q.{currentQuestionIndex + 1} <span className="text-sm text-gray-500">/ {QUESTIONS.length}</span>
                    </span>
                    <Button variant="ghost" size="sm" onClick={handleBack} disabled={isTransitioning}>
                        Back
                    </Button>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden border border-ink">
                    <div
                        className="h-full bg-neon-yellow transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Question */}
            <div className="flex-grow flex items-center justify-center py-8 sm:py-12 min-h-[200px]">
                <div className="bg-white/90 p-8 rounded-lg notebook-border shadow-lg w-full flex items-center justify-center text-center">
                    <h2 className="text-xl sm:text-2xl font-bold leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 key={currentQuestion.id}">
                        {currentQuestion.text}
                    </h2>
                </div>
            </div>

            {/* Answer Area */}
            <div className="space-y-6 mb-8">
                {/* Scale Labels */}
                <div className="flex justify-between text-xs sm:text-sm font-bold px-2">
                    <span className="text-gray-500">No</span>
                    <span className="text-gray-500">Yes</span>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center gap-2 sm:gap-4">
                    {/* -2: Strong No */}
                    <button
                        onClick={() => handleAnswer(-2)}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center group"
                    >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-ink group-hover:bg-neon-pink transition-colors" />
                    </button>

                    {/* -1: Weak No */}
                    <button
                        onClick={() => handleAnswer(-1)}
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center group"
                    >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-400 group-hover:bg-neon-pink transition-colors" />
                    </button>

                    {/* 0: Neutral */}
                    <button
                        onClick={() => handleAnswer(0)}
                        className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center"
                    >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300" />
                    </button>

                    {/* +1: Weak Yes */}
                    <button
                        onClick={() => handleAnswer(1)}
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center group"
                    >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-400 group-hover:bg-neon-blue transition-colors" />
                    </button>

                    {/* +2: Strong Yes */}
                    <button
                        onClick={() => handleAnswer(2)}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-ink bg-white hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center group"
                    >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-ink group-hover:bg-neon-blue transition-colors" />
                    </button>
                </div>

                <div className="text-center text-xs text-gray-400 mt-4">
                    直感で答えてください
                </div>
            </div>
        </NotebookLayout>
    );
}
