export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[#0f172a] relative overflow-hidden">
             {/* Glowing Orbs */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                        I am currently looking for an internship or fresher position. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-indigo-500/30 transition-all duration-500">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
                            
                            {/* Column 1 */}
                            <div className="space-y-8">
                                <div className="group">
                                    <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Email</h4>
                                    <a href="mailto:dtu.mailm@gmail.com" className="flex items-center gap-3 text-white text-lg font-medium hover:text-indigo-300 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        dtu.mailm@gmail.com
                                    </a>
                                </div>

                                <div className="group">
                                    <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Phone</h4>
                                    <a href="tel:0343508155" className="flex items-center gap-3 text-white text-lg font-medium hover:text-indigo-300 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.86l-1 5a1 1 0 01-1.36.75L5 8.28 5 12a8 8 0 008 8l3.47-2.91a1 1 0 011.36.75l1 5a1 1 0 01-1.94.86L15 19a10 10 0 01-10-10V5z" /></svg>
                                        </div>
                                        0343508155
                                    </a>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-8">
                                <div className="group">
                                    <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Social</h4>
                                    <div className="flex flex-col gap-4">
                                        <a href="https://github.com/dt-u" target="_blank" className="flex items-center gap-3 text-white text-lg font-medium hover:text-indigo-300 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                            </div>
                                            github.com/dt-u
                                        </a>
                                        <a href="https://linkedin.com/in/uyen-dam-tu" target="_blank" className="flex items-center gap-3 text-white text-lg font-medium hover:text-indigo-300 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                            </div>
                                            linkedin.com/in/uyen-dam-tu
                                        </a>
                                    </div>
                                </div>

                                <div className="group">
                                    <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">Location</h4>
                                    <div className="flex items-center gap-3 text-white text-lg font-medium">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        Hanoi, Vietnam
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};