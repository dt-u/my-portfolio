import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const projects = [
        {
            title: 'University Capstone',
            category: 'Academic Project',
            description: 'A comprehensive management system built for my final year project. Features complex data handling and role-based access.',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            color: 'from-pink-500 to-rose-500',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
        },
        {
            title: 'Personal Portfolio',
            category: 'Design & Dev',
            description: 'You are looking at it! Built from scratch to showcase my skills in animations and component architecture.',
            tags: ['React', 'GSAP', 'Tailwind'],
            color: 'from-blue-500 to-cyan-500',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
        },
        {
            title: 'Coursework App',
            category: 'Mobile Hybrid',
            description: 'A cross-platform mobile application developed during my mobile development course at HANU.',
            tags: ['React Native', 'Firebase'],
            color: 'from-violet-500 to-purple-500',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.project-row').forEach((row: any, i) => {
                gsap.from(row, {
                    x: i % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: 1
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" className="py-32 bg-[#0f172a] relative">
            <div className="container mx-auto px-6" ref={containerRef}>
                <div className="text-center mb-24">
                    <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm">Portfolio</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mt-2 mb-6">Academic & Personal Work</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className={`project-row flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-3/5 group perspective-1000">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:rotate-x-2 hover:rotate-y-2 preserve-3d">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10`}></div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                                        <button className="px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-110 transition-transform">View Details</button>
                                        <button className="px-6 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all">Github</button>
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-2/5 p-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-8 h-[2px] bg-indigo-500"></span>
                                    <span className="text-indigo-400 font-medium uppercase tracking-wider">{project.category}</span>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-indigo-500/50 transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
