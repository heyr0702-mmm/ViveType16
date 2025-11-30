import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <NotebookLayout className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12">
      <div className="space-y-6 z-10">
        <div className="bg-white/80 p-6 rounded-lg border-2 border-dashed border-gray-400 shadow-lg transform rotate-1 max-w-lg mx-auto">
          <p className="text-sm font-bold text-gray-500 mb-2 tracking-widest">
            人間関係の「取扱説明書」
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter font-handwriting text-ink mb-4">
            16コミュニケーション<br />タイプ診断
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-700 bg-neon-yellow/30 inline-block px-2 transform -rotate-1">
            あなたの“コミュ力の型”には、名前がある。
          </p>
        </div>

        <div className="max-w-md mx-auto p-4 bg-white/90 notebook-border rotate-[-1deg]">
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
            <span className="text-sm underline decoration-wavy decoration-neon-pink cursor-pointer hover:text-neon-pink transition-colors">
              About & Vision
            </span>
          </Link>
        </div>
      </div>

      {/* Decorative Stickers */}
      <div className="absolute top-10 right-10 rotate-12 hidden sm:block">
        <div className="bg-neon-yellow text-xs font-bold px-2 py-1 border border-ink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          New!
        </div>
      </div>
      <div className="absolute bottom-20 left-10 -rotate-6 hidden sm:block">
        <div className="bg-neon-pink text-white text-xs font-bold px-3 py-1 border border-ink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Gen Z
        </div>
      </div>
    </NotebookLayout>
  );
}
