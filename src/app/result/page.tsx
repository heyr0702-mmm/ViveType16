"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { calculateScores, determineCharacter, Answers } from "@/lib/logic";
import { Character, AxisResult } from "@/lib/types";

function ResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [character, setCharacter] = useState<Character | null>(null);
    const [axisResults, setAxisResults] = useState<AxisResult[]>([]);

    useEffect(() => {
        const data = searchParams.get("data");
        if (!data) {
            router.push("/");
            return;
        }

        try {
            const answers: Answers = JSON.parse(decodeURIComponent(data));
            const results = calculateScores(answers);
            const char = determineCharacter(results);

            setAxisResults(results);
            setCharacter(char);
        } catch (error) {
            console.error("Error parsing result data:", error);
            router.push("/");
        }
    }, [searchParams, router]);

    if (!character) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-bold">Calculating...</p>
            </div>
        );
    }

    return (
        <NotebookLayout>
            <div className="space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold">Diagnosis Result</h1>
                    <div className="p-6 border-2 border-black rounded-lg bg-white">
                        <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
                        <p className="text-lg mb-4 font-bold">{character.shortDescription}</p>
                        <p className="text-left whitespace-pre-wrap">{character.description}</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Parameter Analysis</h3>
                    <div className="space-y-4">
                        {axisResults.map((axis) => (
                            <div key={axis.axis} className="space-y-1">
                                <ProgressBar
                                    value={axis.percentage}
                                    labelLeft={axis.labelNegative}
                                    labelRight={axis.labelPositive}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center pt-8">
                    <Link href="/">
                        <Button variant="primary">Back to Top</Button>
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <ResultContent />
        </Suspense>
    );
}
