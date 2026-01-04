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
                            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">HANU</span> lecture halls to real-world code.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            I am a senior Information Technology student at <strong>Hanoi University</strong>. 
                            While I haven't officially started my corporate journey yet, I've spent my university years
                            obsessively building personal projects, mastering modern web frameworks, and refining my eye for design.
                            I am eager, adaptable, and ready to bring a fresh perspective to a professional development team.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-300">Open to Internship</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-75"></div>
                                <span className="text-sm font-medium text-gray-300">Full-time Opportunities</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats Card - Span 4 columns */}
                    <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col justify-center items-center text-center transform hover:scale-[1.02] transition-transform duration-300">
                        <h3 className="text-7xl font-bold mb-2">4th</h3>
                        <p className="text-xl opacity-90 mb-8">Year Student</p>
                        <div className="w-full h-[1px] bg-white/20 mb-8"></div>
                        <div className="grid grid-cols-2 gap-8 w-full">
                            <div>
                                <h4 className="text-3xl font-bold">3.x</h4>
                                <p className="text-sm opacity-75">Current GPA</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold">100%</h4>
                                <p className="text-sm opacity-75">Dedication</p>
                            </div>
                        </div>
                    </div>

                    {/* Image/Visual Card - Span 5 columns */}
                    <div className="lg:col-span-5 h-80 rounded-3xl overflow-hidden relative group">
                        {/* Placeholder for your photo */}
                        <img 
                            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" 
                            alt="Coding Workspace" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                        <div className="absolute bottom-6 left-6">
                            <p className="font-mono text-sm text-indigo-300">University</p>
                            <p className="text-2xl font-bold text-white">HANU - Hanoi</p>
                        </div>
                    </div>

                    {/* Text/Quote Card - Span 7 columns */}
                    <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl bg-[#151c2f] border border-white/5 flex items-center">
                        <div>
                            <svg className="w-10 h-10 text-indigo-500 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.082 12.114 15 11.232 15C11.232 15 9.326 15 9.326 11.538C9.326 9.463 8.904 9 8.904 9C10.552 9.065 10.932 7.722 10.932 6.5C10.932 5.277 10.15 4.5 9.066 4.5C6.544 4.5 4.5 6.474 4.5 9C4.5 13.988 8.169 16.5 10.232 16.5C10.232 16.5 10.232 16.5 10.232 16.5C11.232 16.5 12.017 17.5 12.017 18L12.017 21H14.017ZM21.017 21L21.017 18C21.017 16.082 19.114 15 18.232 15C18.232 15 16.326 15 16.326 11.538C16.326 9.463 15.904 9 15.904 9C17.552 9.065 17.932 7.722 17.932 6.5C17.932 5.277 17.15 4.5 16.066 4.5C13.544 4.5 11.5 6.474 11.5 9C11.5 13.988 15.169 16.5 17.232 16.5C17.232 16.5 17.232 16.5 17.232 16.5C18.232 16.5 19.017 17.5 19.017 18L19.017 21H21.017Z" /></svg>
                            <p className="text-2xl md:text-3xl font-medium text-white italic leading-relaxed">
                                "Every expert was once a beginner. I am building my expertise one line of code at a time."
                            </p>
                            <p className="mt-4 text-gray-500 font-bold uppercase tracking-wide">- Me, 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
