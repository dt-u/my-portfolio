import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const categories = [
        {
            title: "Frontend",
            icon: "💻",
            skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Three.js", "GSAP"]
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: ["Node.js", "Express", "Python", "PostgreSQL", "Redis", "GraphQL"]
        },
        {
            title: "Tools & DevOps",
            icon: "🛠️",
            skills: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"]
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-card", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" className="py-32 bg-[#0b1121] relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Tech Stack</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        The tools and technologies I use to craft exceptional digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, idx) => (
                        <div 
                            key={idx}
                            className="skill-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-indigo-500/50 hover:to-purple-500/50 transition-all duration-500"
                        >
                            <div className="bg-[#151c2f] rounded-xl p-8 h-full relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl group-hover:scale-150 group-hover:rotate-12 transition-transform duration-700 select-none">
                                    {category.icon}
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-lg bg-indigo-500/20 flex items-center justify-center text-3xl mb-6 backdrop-blur-sm border border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                                        {category.icon}
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                                    
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill, sIdx) => (
                                            <span 
                                                key={sIdx}
                                                className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md group-hover:border-white/20 group-hover:text-white transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
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