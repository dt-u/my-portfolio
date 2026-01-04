import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Timeline = () => {
    const lineRef = useRef<HTMLDivElement>(null);

    const items = [
        {
            year: "2026 (Expected)",
            title: "Bachelor's Degree in IT",
            org: "Hanoi University (HANU)",
            desc: "Expected to graduate with a solid foundation in Software Engineering. Final Thesis focused on Advanced Web Technologies.",
            icon: "🎓"
        },
        {
            year: "2024 - Present",
            title: "Web Development Team Lead",
            org: "HANU IT Club",
            desc: "Mentored 10+ junior members in React/Node.js. Organized coding workshops and maintained the club's official website.",
            icon: "🚀"
        },
        {
            year: "2023",
            title: "Freelance Frontend Developer",
            org: "Self-Employed",
            desc: "Built responsive landing pages for local businesses using Tailwind CSS and React. Improved site performance scores by 40%.",
            icon: "💻"
        },
        {
            year: "2022",
            title: "Started Journey at HANU",
            org: "Hanoi University",
            desc: "Began my journey into the world of Computer Science. Ranked top 10% in Introduction to Programming.",
            icon: "🏛️"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the vertical line drawing down
            gsap.from(lineRef.current, {
                scaleY: 0,
                transformOrigin: "top center",
                duration: 2,
                scrollTrigger: {
                    trigger: "#timeline",
                    start: "top 60%",
                    end: "bottom 80%",
                    scrub: 1
                }
            });

            // Animate items popping in
            gsap.utils.toArray('.timeline-item').forEach((item: any, i) => {
                gsap.from(item, {
                    opacity: 0,
                    x: i % 2 === 0 ? -50 : 50,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="journey" className="py-32 bg-[#0b1121] relative overflow-hidden">
             {/* Background Noise */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">My Path</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mt-2 mb-6">
                        Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Experience</span>
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div 
                        ref={lineRef}
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 md:-translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.5)] rounded-full"
                    ></div>

                    {items.map((item, index) => (
                        <div key={index} className={`timeline-item flex flex-col md:flex-row gap-8 mb-16 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                            
                            {/* Dot on the line */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 shadow-[0_0_20px_rgba(255,255,255,0.5)] transform -translate-x-[6px] md:-translate-x-1/2 mt-6 z-20"></div>

                            {/* Date Side (Desktop) */}
                            <div className={`hidden md:block w-1/2 text-right ${index % 2 === 0 ? 'pr-12' : 'pl-12 text-left'}`}>
                                <span className="text-2xl font-bold text-indigo-400 font-mono">{item.year}</span>
                            </div>

                            {/* Card Side */}
                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                <div className="p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300">
                                    <div className="bg-[#151c2f] p-8 rounded-xl border border-white/5 shadow-xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 text-6xl opacity-10 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                                        
                                        <span className="md:hidden text-indigo-400 font-bold font-mono mb-2 block">{item.year}</span>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                                        <h4 className="text-lg text-gray-400 mb-4 font-medium">{item.org}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
