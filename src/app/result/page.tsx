"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { calculateScores, determineCharacter, Answers } from "@/lib/logic";
import { CommunicationTypeMeta, AxisResult } from "@/lib/types";
import { RESULT_CONTENTS } from "@/data/contents";
import { ResultContent as ResultContentData } from "@/types/content";
import { AdUnit } from "@/components/AdUnit";
import { ChevronDown, ChevronUp, Lock } from "lucide-react";

function ResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [character, setCharacter] = useState<CommunicationTypeMeta | null>(null);
    const [axisResults, setAxisResults] = useState<AxisResult[]>([]);
    const [content, setContent] = useState<ResultContentData | null>(null);
    const [isUnlocked, setIsUnlocked] = useState(false);

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
            setContent(RESULT_CONTENTS[char.code] || RESULT_CONTENTS["DEIX"]); // Fallback to DEIX if not found
        } catch (error) {
            console.error("Error parsing result data:", error);
            router.push("/");
        }
    }, [searchParams, router]);

    if (!character || !content) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-bold">Calculating...</p>
            </div>
        );
    }

    const shareText = `私のコミュタイプは【${character.label}】でした！\nキャッチコピー: ${content.free.catchCopy}\n\n#16コミュニケーションタイプ診断`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent("https://vibetype16.vercel.app")}`;

    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            {/* 🟢 Free Area */}
            <div className="bg-white/90 p-6 rounded-lg notebook-border shadow-lg max-w-2xl mx-auto w-full relative overflow-hidden">
                {/* Tape decoration */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/50 border-l border-r border-gray-200 rotate-[-2deg] z-10 opacity-70"></div>

                <div className="text-center space-y-4 mb-8">
                    <p className="text-sm font-bold text-gray-500 tracking-widest">COMMUNICATION TYPE</p>
                    <h1 className="text-4xl sm:text-6xl font-bold font-handwriting tracking-widest text-ink inline-block border-b-4 border-neon-pink pb-2">
                        {character.label}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {content.free.hashTags.map(tag => (
                            <span key={tag} className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-600">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg sm:text-xl font-bold mt-4 bg-neon-yellow/40 inline-block px-4 py-1 rounded-sm">
                        {content.free.catchCopy}
                    </p>
                </div>

                <div className="space-y-6 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-white/50">
                    <h3 className="text-center font-bold border-b-2 border-gray-300 pb-2 mb-4 font-handwriting text-xl">
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
                                    result.axis === 'Warmth' ? 'pink' :
                                        result.axis === 'Speed' ? 'blue' : 'yellow'
                            }
                        />
                    ))}

                    <div className="mt-6 p-4 bg-white rounded border border-gray-200">
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">
                            {content.free.summary}
                        </p>
                    </div>
                </div>

                {/* Basic Specs */}
                <div className="mt-8 space-y-4">
                    {content.free.basicSpecs.map((spec, i) => (
                        <div key={i} className="bg-white/80 p-4 rounded border-l-4 border-neon-blue">
                            <h4 className="font-bold text-ink mb-2">{spec.title}</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">{spec.description}</p>
                        </div>
                    ))}
                </div>

                {/* Reputation */}
                <div className="mt-6 bg-white/80 p-4 rounded border-l-4 border-neon-pink">
                    <h4 className="font-bold text-ink mb-2">{content.free.reputation.title}</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {content.free.reputation.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Aruaru */}
                <div className="mt-6 bg-white/80 p-4 rounded border-l-4 border-neon-yellow">
                    <h4 className="font-bold text-ink mb-2">{content.free.aruaru.title}</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {content.free.aruaru.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Comfort Zone */}
                <div className="mt-6 bg-white/80 p-4 rounded border-l-4 border-gray-400">
                    <h4 className="font-bold text-ink mb-2">{content.free.comfortZone.title}</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {content.free.comfortZone.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 text-center">
                    <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto bg-black text-white border-black hover:bg-gray-800 shadow-md">
                            X (Twitter) でシェア
                        </Button>
                    </a>
                </div>
            </div>

            {/* 🟡 Unlocked Area (Accordion) */}
            <div className="max-w-2xl mx-auto w-full">
                {!isUnlocked ? (
                    <div
                        onClick={() => setIsUnlocked(true)}
                        className="cursor-pointer group relative overflow-hidden rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 p-8 text-center transition-all hover:bg-gray-200"
                    >
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Lock size={100} />
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <span className="text-4xl">👇</span>
                            <h3 className="text-xl font-bold text-gray-800">
                                診断結果の続き（詳細レポート）を読む
                            </h3>
                            <p className="text-sm text-gray-600">
                                会話のすれ違いポイントや、相性の良いタイプを見る
                            </p>
                            <Button variant="secondary" className="mt-2 group-hover:scale-105 transition-transform">
                                タップして展開
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-8">
                        {/* Communication Gaps */}
                        <div className="bg-white/90 p-6 rounded-lg notebook-border shadow-lg">
                            <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-200 pb-2">
                                <span className="text-2xl">⚠️</span>
                                <h3 className="text-xl font-bold text-ink">{content.unlocked.communicationGaps.title}</h3>
                            </div>
                            <div className="space-y-4">
                                {content.unlocked.communicationGaps.items.map((item, i) => (
                                    <div key={i} className="bg-red-50 p-4 rounded border border-red-100">
                                        <p className="font-bold text-red-800 mb-1">⚡ {item.pattern}</p>
                                        <p className="text-sm text-red-600">💡 {item.advice}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compatibility */}
                        <div className="bg-white/90 p-6 rounded-lg notebook-border shadow-lg">
                            <div className="flex items-center gap-2 mb-4 border-b-2 border-gray-200 pb-2">
                                <span className="text-2xl">💞</span>
                                <h3 className="text-xl font-bold text-ink">相性分析</h3>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="bg-blue-50 p-4 rounded border border-blue-100">
                                    <span className="text-xs font-bold bg-blue-200 text-blue-800 px-2 py-1 rounded mb-2 inline-block">BEST</span>
                                    <p className="text-lg font-bold text-blue-900 mb-2">{content.unlocked.compatibility.best.code}</p>
                                    <p className="text-sm text-blue-800 leading-relaxed">{content.unlocked.compatibility.best.reason}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                                    <span className="text-xs font-bold bg-gray-200 text-gray-800 px-2 py-1 rounded mb-2 inline-block">WORST</span>
                                    <p className="text-lg font-bold text-gray-900 mb-2">{content.unlocked.compatibility.worst.code}</p>
                                    <p className="text-sm text-gray-800 leading-relaxed">{content.unlocked.compatibility.worst.reason}</p>
                                </div>
                            </div>
                        </div>

                        {/* AdUnit after content */}
                        <AdUnit slot="9876543210" />

                        <div className="text-center">
                            <Button onClick={() => setIsUnlocked(false)} variant="ghost" size="sm">
                                <ChevronUp className="mr-2 h-4 w-4" />
                                閉じる
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* AdUnit before footer */}
            <AdUnit slot="1122334455" />

            <div className="text-center pt-8">
                <Link href="/">
                    <Button variant="secondary">トップに戻る</Button>
                </Link>
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
