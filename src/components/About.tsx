export const About = () => {
    return (
        <section id="about" className="py-32 bg-[#0b1121] text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Main Intro - Span 8 columns */}
                    <div className="lg:col-span-8 p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-400/10 rounded-full border border-indigo-400/20">
                                About Me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Final-year IT Student with a passion for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Web Development</span>.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            I am equipped with a solid foundation in both Frontend (React, TypeScript) and Backend (Node.js, Java) technologies through intensive academic projects.
                            Passionate about interactive, user-centric interfaces, I spend my time self-studying motion UI and micro-interactions.
                            I am a quick learner and a detail-oriented problem solver, seeking a Web Developer Internship to contribute my skills in a dynamic environment.
                        </p>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-300">Open to Internship</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                                <span className="text-sm font-medium text-gray-300">Fast Learner</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-150"></div>
                                <span className="text-sm font-medium text-gray-300">Problem Solver</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-300"></div>
                                <span className="text-sm font-medium text-gray-300">Creative Thinker</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Card - Span 4 columns */}
                    <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col justify-center items-center text-center transform hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-7xl font-bold mb-2">2026</h3>
                        <p className="text-xl opacity-90 mb-8">Expected Graduation</p>
                        <div className="w-full h-[1px] bg-white/20 mb-8"></div>
                        <div className="grid grid-cols-2 gap-8 w-full">
                            <div>
                                <h4 className="text-3xl font-bold">3.46</h4>
                                <p className="text-sm opacity-75">GPA / 4.0</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold">100%</h4>
                                <p className="text-sm opacity-75">Commitment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
