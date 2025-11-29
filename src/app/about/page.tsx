import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";

export default function About() {
    return (
        <NotebookLayout className="flex flex-col space-y-8">
            <div className="flex justify-between items-center border-b-2 border-ink pb-4">
                <h1 className="text-2xl sm:text-3xl font-bold font-handwriting">About & Vision</h1>
                <Link href="/">
                    <Button variant="secondary" size="sm">Back</Button>
                </Link>
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-bold bg-neon-yellow inline-block px-2 transform -rotate-1">
                    About
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                    「面白い人」か「面白くない人」か。そんな単純な基準で、自分をジャッジしていませんか？<br />
                    VibeType 16は、性格の良し悪しではなく、あなたがその場にいるだけで放っている「空気感（Vibe）」の正体を可視化するツールです。
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-bold bg-neon-blue inline-block px-2 transform rotate-1">
                    Vision
                </h2>
                <p className="text-sm sm:text-base leading-relaxed">
                    「無理して、誰かになろうとしていない？」<br />
                    社会という教室には、すべての役割が必要です。<br />
                    自分のキャラを知ってください。そして、自分と違うキャラを面白がってください。
                </p>
            </section>

            <div className="pt-8 text-center">
                <Link href="/diagnosis">
                    <Button size="md">診断を始める</Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}
