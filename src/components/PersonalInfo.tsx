import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const PersonalInfo = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                { y: 30, opacity: 0, scale: 0.95 },
                { 
                    y: 0, 
                    opacity: 1, 
                    scale: 1, 
                    duration: 0.8, 
                    delay: 0.2, 
                    ease: "power3.out" 
                }
            );
        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    const infos = [
        { label: "Phone", value: "0343508155", icon: "📱", link: "tel:0343508155" },
        { label: "Email", value: "dtu.mailm@gmail.com", icon: "✉️", link: "mailto:dtu.mailm@gmail.com" },
        { label: "Location", value: "Hanoi, Vietnam", icon: "📍", link: null },
        { label: "Github", value: "github.com/dt-u", icon: "🐙", link: "https://github.com/dt-u" },
    ];

    return (
        <div className="w-full bg-[#0f172a] py-10 relative z-30">
            <div 
                ref={containerRef}
                className="container mx-auto px-6 opacity-0" // Set initial opacity 0 to let GSAP handle fade-in
            >
                {/* High contrast card with strong border and shadow */}
                <div className="bg-[#1e293b] border border-indigo-400/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(99,102,241,0.15)] relative overflow-hidden">
                    {/* Background sheen effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {infos.map((info, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-[#0f172a] border border-white/10 hover:border-indigo-400/50 hover:bg-indigo-900/10 transition-all duration-300 group shadow-lg">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-inner">
                                    {info.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-1">{info.label}</span>
                                    {info.link ? (
                                        <a href={info.link} className="text-white font-bold text-base hover:text-indigo-400 transition-colors">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <span className="text-white font-bold text-base">{info.value}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};