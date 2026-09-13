function Footer() {
    return (
        <footer id="contact" className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center">
                            <img
                                src="/assets/logo-text.png"
                                alt="Dev Stack"
                                className="h-9 w-auto object-contain"
                            />
                        </div>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                            Explore modern technologies and build the perfect development
                            stack for your next project.
                        </p>

                        <div className="mt-5 flex gap-4">
                            <a
                                href="#"
                                className="text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Product
                        </h3>

                        <div className="mt-4 space-y-3">
                            <a
                                href="#technologies"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Technologies
                            </a>

                            <a
                                href="#"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Projects
                            </a>

                            <a
                                href="#"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Features
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Company
                        </h3>

                        <div className="mt-4 space-y-3">
                            <a
                                href="#about"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                About
                            </a>

                            <a
                                href="#contact"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Contact
                            </a>

                            <a
                                href="#"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Careers
                            </a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            Legal
                        </h3>

                        <div className="mt-4 space-y-3">
                            <a
                                href="#"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Terms of Service
                            </a>

                            <a
                                href="#"
                                className="block text-sm text-slate-500 transition hover:text-pink-500"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © 2026 Dev Stack. All rights reserved.
                    </p>

                    <div className="flex gap-5">
                        <a
                            href="#"
                            className="transition hover:text-pink-500"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-pink-500"
                        >
                            Terms
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;