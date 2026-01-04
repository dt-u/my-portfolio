export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-[#0f172a] relative overflow-hidden">
             {/* Glowing Orbs */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Info Side */}
                        <div className="p-10 bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-4">Let's Connect!</h3>
                                <p className="text-indigo-100 mb-8">
                                    I am currently looking for an internship or fresher position. If you have an opportunity or just want to network, I'd love to hear from you.
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <span>dtu.mailm@gmail.com</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <span>Hanoi, Vietnam</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                        </div>
                                        <span>Hanoi University (HANU)</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                         <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                        </div>
                                        <a href="https://github.com/dt-u" target="_blank" className="hover:text-indigo-300 transition-colors">github.com/dt-u</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 hidden">
                                <p className="text-sm text-indigo-200 uppercase tracking-wider mb-4">My Profiles</p>
                                <div className="flex space-x-4">
                                    {['Github', 'LinkedIn', 'Facebook'].map((social) => (
                                        <a 
                                            key={social} 
                                            href="#" 
                                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-indigo-600 flex items-center justify-center transition-all duration-300"
                                        >
                                            <span className="text-xs">{social[0]}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-10 bg-[#0f172a]/50">
                            <h4 className="text-xl font-semibold text-white mb-6">Send me a message</h4>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none" placeholder="Recruiter / Visitor Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none" placeholder="example@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-500 transition-all outline-none" placeholder="Hi! We have an opening for a Frontend Developer..."></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
