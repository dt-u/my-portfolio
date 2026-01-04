import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const SoftSkills = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const certs = [
        {
            name: "Proactive Self-learning",
            issuer: "Research & Adaptation",
            date: "Continuous",
            color: "from-blue-400 to-indigo-500",
            icon: "📚"
        },
        {
            name: "Problem Solving",
            issuer: "Logical Thinking",
            date: "Core Skill",
            color: "from-purple-400 to-pink-500",
            icon: "🧩"
        },
        {
            name: "Teamwork",
            issuer: "High Accountability",
            date: "Collaboration",
            color: "from-orange-400 to-red-500",
            icon: "🤝"
        },
        {
            name: "English Proficiency",
            issuer: "Professional Working",
            date: "Communication",
            color: "from-green-400 to-emerald-500",
            icon: "🗣️"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".cert-card", 
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-20 bg-[#0f172a] border-t border-white/5">
            <div className="container mx-auto px-6" ref={sectionRef}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Soft Skills & Values</h2>
                    <p className="text-gray-400 mt-2">Personal attributes that drive my professional success</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certs.map((cert, idx) => (
                        <div 
                            key={idx}
                            className="cert-card group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                        >
                            <div className="bg-[#1e293b] h-full p-6 rounded-2xl relative overflow-hidden flex flex-col items-center text-center">
                                {/* Glow Effect */}
                                <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${cert.color} blur-2xl opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                                
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">{cert.icon}</span>
                                </div>
                                
                                <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                                <p className="text-indigo-400 text-sm font-medium mb-2">{cert.issuer}</p>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};