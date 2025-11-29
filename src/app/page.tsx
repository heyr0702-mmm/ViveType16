import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <NotebookLayout className="flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter font-handwriting border-b-4 border-neon-yellow inline-block pb-2">
          VibeType 16
        </h1>
        <p className="text-xl sm:text-2xl font-bold mt-4">
          あなたの『空気感』には、名前がある。
        </p>
      </div>

      <div className="max-w-md mx-auto p-6 border-2 border-ink bg-white/50 rotate-1 shadow-sm">
        <p className="text-sm sm:text-base leading-relaxed font-medium">
          クラスや職場に必ず生息する16種類のキャラ属性図鑑。<br />
          あなたが無意識に放っているVibe（波長）を特定する成分分析。
        </p>
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
