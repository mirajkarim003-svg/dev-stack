function Hero() {
    return (
        <section className="bg-white">
            <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 lg:px-8">

                {/* Hero Content */}
                <div>
                    <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <span className="brand-gradient-text block">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#technologies"
                            className="brand-gradient rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 transition hover:border-pink-300 hover:text-pink-500"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/assets/banner-stack.png"
                        alt="Development stack"
                        className="w-full max-w-lg object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;