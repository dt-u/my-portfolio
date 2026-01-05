import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Hero = () => {
    const textRef = useRef<HTMLSpanElement>(null);
    const [textIndex, setTextIndex] = useState(0);
    const roles = ["Aspiring Web Developer", "IT Student @ HANU", "Frontend Enthusiast", "Creative Coder"];
    
    // Typing effect logic
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(textRef.current, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
            );
        }
    }, [textIndex]);

    return (
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden bg-[#0f172a]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/30 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
                
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-6 z-10 relative pt-16">
                <div className="flex flex-col items-center text-center">
                    <div className="inline-block px-4 py-2 mb-4 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md animate-fade-in-down">
                        <span className="text-indigo-300 font-medium tracking-wide text-sm uppercase">Open to Internship Opportunities</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x bg-[length:200%_auto]">
                            Dam Tu Uyen
                        </span>
                    </h1>

                    <div className="h-12 md:h-16 mb-6 overflow-hidden">
                        <span ref={textRef} className="block text-2xl md:text-4xl text-gray-400 font-light">
                            {roles[textIndex]}
                        </span>
                    </div>

                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Final-year IT student at <strong className="text-indigo-400">Hanoi University (HANU)</strong>. 
                        Passionate about creating interactive, user-centric interfaces and solid backend systems.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-2">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-indigo-600 rounded-full font-bold text-white overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all hover:shadow-[0_0_40px_rgba(79,70,229,0.7)] hover:scale-105"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                            <span className="relative flex items-center gap-2">
                                See My Projects
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </a>
                        
                        {/* Removed Hire Me button as requested */}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 animate-bounce z-20 hidden md:flex">
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll-down"></div>
                </div>
            </div>
        </section>
    );
};