import Link from "next/link";

export const DemoBanner = () => {
    return (
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
    );
}