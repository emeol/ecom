import Link from "next/link";
import { PerfectBanner } from "./components/PerfectBanner";
import { Newsletter } from "./components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between border-b border-black/10 px-6 py-4">
        <span className="text-lg font-semibold tracking-tight">Ecom</span>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="#home" className="transition-colors hover:text-black/60">
            Home
          </Link>
          <Link href="#perfect" className="transition-colors hover:text-black/60">
            Perfect
          </Link>
          <Link href="/shop" className="transition-colors hover:text-black/60">
            Shop
          </Link>
        </div>
      </nav>

      <section id="home" className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-14 md:py-20">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
          Welcome to the Future of AI
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Discover innovative products built to elevate everyday experiences.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-black/70">
          Discover the latest advancements in AI technology and explore our innovative products. Join us on a journey to revolutionize the way we interact with technology. Experience the power of AI and unlock new possibilities for your business and personal life.
        </p>
        <div>
          <Link
            className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
            href="/shop"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section id="perfect" className="mx-auto w-full max-w-6xl px-6 py-6 md:py-10">
        <PerfectBanner />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
        <Newsletter />
      </section>
    </main>
  );
}
