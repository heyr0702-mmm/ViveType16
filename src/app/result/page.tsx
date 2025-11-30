"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { calculateScores, determineCharacter, Answers } from "@/lib/logic";
import { CommunicationTypeMeta, AxisResult } from "@/lib/types";

function ResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [character, setCharacter] = useState<CommunicationTypeMeta | null>(null);
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
        </Suspense >
    );
    }
