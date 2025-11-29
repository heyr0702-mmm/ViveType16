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
        } catch (e) {
            console.error("Failed to parse results", e);
            router.push("/");
        }
    }, [searchParams, router]);

    if (!character) {
        return <div className="text-center py-20">Analyzing Vibe...</div>;
    }

    const shareText = `私のVibeTypeは【${character.name}】でした！\nキャッチコピー: ${character.catchphrase}\n\n#VibeType16 #性格診断`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent("https://vibetype16.vercel.app")}`; // Replace with actual URL later

    return (
        <NotebookLayout className="flex flex-col space-y-8">
            <div className="text-center space-y-2">
                <p className="text-sm font-bold text-gray-500">Your Vibe Type is...</p>
                <h1 className="text-5xl sm:text-6xl font-bold font-handwriting tracking-widest border-b-4 border-ink inline-block pb-2">
                    {character.name}
                </h1>
                <p className="text-lg sm:text-xl font-bold mt-4 bg-neon-yellow inline-block px-2 transform -rotate-1">
                    {character.catchphrase}
                </p>
            </div>

            <div className="space-y-6 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-white/50">
                <h3 className="text-center font-bold border-b border-gray-300 pb-2 mb-4">
                    成分分析 (Parameter Analysis)
                </h3>
                {axisResults.map((result) => (
                    <ProgressBar
                        key={result.axis}
                        value={result.percentage}
                        labelLeft={result.labelNegative}
                        labelRight={result.labelPositive}
                        color={
                            result.axis === 'Power' ? 'yellow' :
                                result.axis === 'Temperature' ? 'pink' :
                                    result.axis === 'Speed' ? 'blue' : 'yellow'
                        }
                    />
                ))}
            </div>

            <div className="flex flex-col gap-4 items-center pt-4">
                <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-black text-white border-black hover:bg-gray-800">
                        X (Twitter) でシェア
                    </Button>
                </a>
                <Link href="/">
                    <Button variant="secondary">トップに戻る</Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}

export default function Result() {
    return (
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
            <ResultContent />
        </Suspense>
    );
}
