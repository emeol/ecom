import Link from "next/link";
import { PerfectBanner } from "./components/PerfectBanner";
import { Newsletter } from "./components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <section id="perfect" className="mx-auto w-full max-w-6xl px-6 py-6 md:py-10">
        <PerfectBanner />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
        <Newsletter />
      </section>
    </main>
  );
}
