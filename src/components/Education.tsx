import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".bento-item",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%", // Trigger earlier
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="education" className="py-20 bg-[#0b1121] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Academic Journey</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
                        Education <span className="text-gray-500 font-light">&</span> Achievements
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">

                    {/* Main University Card - Span 8 */}
                    <div className="bento-item md:col-span-8 bg-[#151c2f] border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <svg className="w-40 h-40 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>
                        </div>
                        <div className="relative z-10">
                            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded-full border border-indigo-500/30 uppercase tracking-wider">University</span>
                            <h3 className="text-3xl font-bold text-white mt-4 mb-2">Hanoi University (HANU)</h3>
                            <p className="text-xl text-gray-400 mb-6">Major in Information Technology</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">2022 - 2026</span>
                                <span className="bg-white/5 px-3 py-1 rounded text-sm text-gray-300">Full-time</span>
                            </div>
                        </div>
                    </div>

                    {/* GPA Card - Span 4 */}
                    <div className="bento-item md:col-span-4 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-lg shadow-indigo-500/20 group">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <h4 className="text-lg font-medium text-indigo-100 relative z-10">Cumulative GPA</h4>
                        <div className="text-6xl font-black text-white my-4 relative z-10 group-hover:scale-110 transition-transform duration-300">3.46</div>
                        <p className="text-indigo-200 text-sm relative z-10">/ 4.0 Scale</p>
                    </div>

                    {/* Scholarships Card - Span 7 */}
                    <div className="bento-item md:col-span-7 bg-[#151c2f] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-yellow-500/30 transition-all duration-500">
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all"></div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl text-yellow-400">🏆</div>
                            <h3 className="text-xl font-bold text-white">Honors & Awards</h3>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div>
                                    <h4 className="text-white font-medium">Academic Scholarship</h4>
                                    <p className="text-sm text-gray-400">Semester I, II, III (2022 - 2023)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div>
                                    <h4 className="text-white font-medium">Academic Scholarship</h4>
                                    <p className="text-sm text-gray-400">Semester I, II (2023 - 2024)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div>
                                    <h4 className="text-white font-medium">Academic Scholarship</h4>
                                    <p className="text-sm text-gray-400">Semester I (2024 - 2025)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coursework Card - Span 5 */}
                    <div className="bento-item md:col-span-5 bg-[#151c2f] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-2xl text-emerald-400">📚</div>
                            <h3 className="text-xl font-bold text-white">Key Coursework</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {['Web Programming', 'Software Engineering', 'Internet & Web Services', 'Advanced IT Topics', 'Database Systems', 'Data Structures'].map((course, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm text-gray-300 transition-colors cursor-default">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
