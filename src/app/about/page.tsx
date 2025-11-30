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

            <section className="space-y-4 bg-white/80 p-6 notebook-border transform rotate-1">
                <h2 className="text-xl font-bold bg-neon-yellow inline-block px-2 transform -rotate-1 mb-2">
                    About
                </h2>
                <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium text-gray-800">
                    人には、生まれ持った“性格”とは別に、
                    会話のときに自然と現れる“スタイル（型）”があります。

                    そのスタイルは、
                    ひとりのとき、大人数のとき、
                    仲の良い相手のとき——
                    相手や場面によって、少しずつ形を変わります。

                    良い悪いではなく、
                    ただ“違い”として存在するもの。

                    16コミュニケーションタイプ診断は、
                    あなたが無意識に使っている
                    話し方・返し方・関わり方のスタイルを可視化し、
                    どんな相手と相性が良く、どんな場面で変化しやすいか
                    を知るためのツールです。
                </p>
            </section>

            <section className="space-y-4 bg-white/80 p-6 notebook-border transform -rotate-1">
                <h2 className="text-xl font-bold bg-neon-blue inline-block px-2 transform rotate-1 mb-2">
                    Vision
                </h2>
                <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line font-medium text-gray-800">
                    誰といるかで、
                    自分の“喋り方”が変わることがあります。

                    それは性格が揺れているのではなく、
                    相手との“スタイルの組み合わせ”が変わるだけ。

                    違うスタイルが集まるからこそ、
                    会話は豊かになり、
                    人間関係は面白くなる。

                    自分のスタイルを知り、
                    相手のスタイルを知る。
                    その小さな理解が、
                    人と関わることを少し楽にしてくれるはずです。
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
