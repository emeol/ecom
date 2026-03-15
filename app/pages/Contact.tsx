export const Contact = () => {    
    return (
        <section className="mx-auto w-full max-w-4xl px-6 py-10 md:py-14">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm md:p-10">
                <h1 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">Contact Us</h1>
                <p className="mb-6 max-w-2xl text-base leading-7 text-black/75">
                    If you have any questions, feedback, or need assistance, please don&apos;t hesitate to reach out to us. We&apos;re here to help!
                </p>
                <form action="/send-data-here" method="post" className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="rounded-xl border border-black/15 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-black/45 focus:border-black/50"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="rounded-xl border border-black/15 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-black/45 focus:border-black/50"
                    />
                    <textarea
                        placeholder="Your Message"
                        required
                        rows={6}
                        className="rounded-xl border border-black/15 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-black/45 focus:border-black/50"
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-1 inline-flex w-fit items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}