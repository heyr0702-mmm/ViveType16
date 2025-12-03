import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <NotebookLayout className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12">
      <div className="space-y-6 z-10">
        <div className="bg-white/80 p-6 rounded-lg border-2 border-dashed border-gray-400 shadow-lg max-w-lg mx-auto">

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter font-handwriting text-ink mb-4">
            16コミュニケーション<br />タイプ診断
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-700 bg-neon-yellow/30 inline-block px-2">
            あなたの“コミュ力の型”には、名前がある。
          </p>
        </div>

        <div className="max-w-md mx-auto p-4 bg-white/90 notebook-border">
          <p className="text-sm sm:text-base leading-relaxed font-medium text-gray-800">
            性格じゃない。<br />
            『どう喋るか・どう関わるか』のスタイルを<br />
            16タイプで可視化します。
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <Link href="/diagnosis">
          <Button size="lg" className="animate-pulse">
            診断スタート
          </Button>
        </Link>
        <div className="mt-4">
          <Link href="/about">
            <span className="text-sm cursor-pointer hover:text-neon-pink transition-colors">
              About & Vision
            </span>
          </Link>
        </div>
      </div>


    </NotebookLayout >
  );
}
