import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioHero from '../assets/hero-portfolio.png';
import emailSystem from '../assets/email.png';
import es1 from '../assets/es1.png';
import es2 from '../assets/es2.png';
import bs1 from '../assets/bs1.png';
import bs2 from '../assets/bs2.png';
import bs3 from '../assets/bs3.png';
import bs4 from '../assets/bs4.png';
import rs1 from '../assets/rs1.png';
import rs2 from '../assets/rs2.png';
import rs3 from '../assets/rs3.png';
import rs4 from '../assets/rs4.png';
import rs5 from '../assets/rs5.png';
import al1 from '../assets/al1.png';
import al2 from '../assets/al2.png';
import al3 from '../assets/al3.png';
import al4 from '../assets/al4.png';
import al5 from '../assets/al5.png';
import al6 from '../assets/al6.png';
import al7 from '../assets/al7.png';
import al8 from '../assets/al8.png';
import al9 from '../assets/al9.png';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const projects = [
        {
            title: 'AI Learning Assistant',
            category: 'Full-stack Web App',
            teamSize: 'Team of 5',
            description: 'A comprehensive LMS with role-based access (Admin, Teacher, Student) and AI-powered tutoring. Features JWT auth, Redis session management, and automated quiz generation.',
            details: 'Deep dive: This project solves the problem of personalized learning. I utilized Gemini API to generate quizzes based on course content. The backend handles heavy traffic with Redis caching.',
            keyResponsibilities: 'Designed the overall system UI/UX, including dedicated interfaces for quiz taking and flashcard review. Architected the database schema and developed backend services for real-time messaging, AI Tutor integration, announcement systems, and quiz attempt tracking.',
            outcome: 'Achieved an A+ grade, receiving high praise from instructors for system completeness and innovation.',
            tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Docker', 'AI'],
            color: 'from-blue-500 to-indigo-600',
            image: 'https://cdn.tokyotechlab.com/Blog/Blog%202024/Blog%20T10/e_learning_la_gi_306d10ac71.webp',
            gallery: [al1, al2, al3, al4, al5, al6, al7, al8, al9],
            github: 'https://github.com/dt-u/AILearningAssistant',
            demoLink: null, // Popup
            video: 'https://www.youtube.com/embed/yNKlb-jdWDE'
        },
        {
            title: 'Recipe Management App',
            category: 'Full-stack Web App',
            teamSize: 'Team of 3',
            description: 'Interactive recipe discovery platform. Developed a custom RESTful API to manage and serve recipe data asynchronously to the frontend.',
            details: 'Designed and implemented a custom backend API using Node.js and Express to handle CRUD operations for recipes, user authentication, and social features. The frontend interacts seamlessly with this bespoke server to provide a real-time discovery experience.',
            keyResponsibilities: 'Engineered the complete authentication system (registration, login, password recovery/reset) and role-based access control. Developed the user profile management features and CRUD functionality for reporting. Built the entire frontend and backend logic for the Administration dashboard.',
            tags: ['React', 'Bootstrap', 'RESTful API', 'Node.js'],
            color: 'from-yellow-400 to-orange-500',
            image: 'https://www.paytronix.com/hubfs/recipe%20management%20software.jpg',
            gallery: [rs1, rs2, rs3, rs4, rs5],
            github: 'https://github.com/dt-u/recipe_app',
            demoLink: null, // Popup
            video: 'https://www.youtube.com/embed/4TJNjfRFIr4'
        },
        {
            title: 'Book Store Management',
            category: 'Full-stack Web App',
            teamSize: 'Team of 6',
            description: 'Secure web application using Spring Boot and Spring Data JPA. Implemented Spring Security for auth and Thymeleaf for server-side rendering.',
            details: 'Focused on security and scalability. Implemented role-based access control (RBAC) and complex database relationships using Hibernate to manage books, categories, and orders.',
            keyResponsibilities: 'Created high-fidelity Figma designs and developed comprehensive HTML frontend templates. Refactored and extended backend functionality to ensure system stability and feature completeness.',
            tags: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Security'],
            color: 'from-green-500 to-emerald-600',
            image: 'https://images.squarespace-cdn.com/content/v1/5c323a92cef3725fb5279c68/1548612984866-Z3PLF1NYNYWPCJ3JP5R1/The+Book+Lady++Bookstore-0067.jpg',
            gallery: [bs1, bs2, bs3, bs4],
            github: 'https://github.com/dt-u/bookstmn_',
            demoLink: null, // Popup
            video: 'https://www.youtube.com/embed/orQKJbZJ7BA'
        },
        {
            title: 'Personal Portfolio',
            category: 'Design & Dev',
            teamSize: 'Solo Project',
            description: 'Modern, high-performance portfolio website to showcase technical skills. Optimized build performance using Vite and implemented Tailwind CSS for responsive UI.',
            details: 'Built with performance in mind. Uses GSAP for smooth animations without layout thrashing. Fully responsive and accessible.',
            tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
            color: 'from-violet-500 to-purple-600',
            image: portfolioHero,
            github: 'https://github.com/dt-u/my-portfolio',
            demoLink: 'https://my-portfolio-five-kappa-4lr6s8l5ge.vercel.app/' // Link to Web
        },
        {
            title: 'Internal Email Simulation',
            category: 'Backend Logic',
            teamSize: 'Solo Project',
            description: 'Functional web-based email client simulation. Handled file uploads, attachment processing, and implemented server-side rendering using EJS.',
            details: 'Simulates a real SMTP server environment. Handles multipart form data for attachments and stores email states in MySQL.',
            outcome: 'Earned an A grade for successfully simulating complex SMTP server logic and data handling.',
            tags: ['Node.js', 'EJS', 'MySQL', 'Backend'],
            color: 'from-orange-400 to-red-500',
            image: emailSystem,
            gallery: [es1, es2],
            github: 'https://github.com/dt-u/email-system',
            demoLink: null, // Popup
        },
        {
            title: 'Weather Dashboard',
            category: 'Data Visualization',
            teamSize: 'Solo Project',
            description: 'Real-time weather application using Leaflet Maps to visualize weather patterns and location data geographically.',
            details: 'Integrates OpenWeatherMap API with Leaflet.js. Challenges involved handling asynchronous data updates on the map overlay.',
            outcome: 'Secured an A grade, demonstrating effective usage of third-party APIs and dynamic data visualization.',
            tags: ['React', 'Leaflet', 'Bootstrap', 'API'],
            color: 'from-cyan-400 to-blue-500',
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
            github: 'https://github.com/dt-u/weatherapp',
            demoLink: 'https://weatherapp-kappa-ruby.vercel.app/'
        },
        {
            title: 'Environmental Awareness',
            category: 'Static Web Design',
            teamSize: 'Solo Project',
            description: 'Designed "Green Web", an educational website featuring news, donation, and shopping sections with responsive layout.',
            details: 'A focus on semantic HTML5 and CSS3 Grid/Flexbox layouts. Optimized for all device sizes without frameworks.',
            outcome: 'Achieved an A+ grade for exceptional design and adherence to semantic web standards.',
            tags: ['HTML5', 'CSS3', 'Responsive Design'],
            color: 'from-lime-400 to-green-500',
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
            github: 'https://github.com/dt-u/web-Xanh',
            demoLink: 'https://web-xanh.vercel.app/'
        },
        {
            title: 'React UI Experiments',
            category: 'Self-Study',
            teamSize: 'Solo Project',
            description: 'Collection of high-performance UI components like Splash Cursor, Magic Bento Grid, and Falling Text using pure CSS3 and React Hooks.',
            details: 'A playground for advanced React patterns and math-heavy CSS animations. Features custom hooks for mouse tracking and physics simulations.',
            tags: ['React', 'Animations', 'UI/UX', 'CSS3'],
            color: 'from-fuchsia-500 to-purple-600',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
            github: 'https://github.com/dt-u/animations',
            demoLink: 'https://animations-three-rosy.vercel.app/'
        }
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

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

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

                                        {/* Logic for Buttons */}
                                        {project.demoLink ? (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-110 transition-transform cursor-pointer"
                                            >
                                                Live Demo
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-110 transition-transform cursor-pointer"
                                            >
                                                View Details
                                            </button>
                                        )}

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all"
                                        >
                                            Github
                                        </a>
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

            {/* PROJECT DETAIL MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedProject(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="relative bg-[#151c2f] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl z-50 animate-fade-in-up">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors z-50 border border-white/20"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="h-64 md:h-96 w-full relative overflow-hidden bg-black">
                            {selectedProject.video ? (
                                <iframe
                                    src={selectedProject.video}
                                    title={selectedProject.title}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-40`}></div>
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#151c2f] to-transparent">
                                        <span className="px-3 py-1 bg-indigo-600 rounded-full text-xs font-bold text-white uppercase tracking-wider mb-2 inline-block">
                                            {selectedProject.category}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white shadow-black drop-shadow-lg">
                                            {selectedProject.title} <span className="text-2xl font-normal opacity-80">({selectedProject.teamSize})</span>
                                        </h2>
                                    </div>
                                </>
                            )}
                        </div>

                        {selectedProject.video && (
                            <div className="px-8 pt-6 pb-0">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    {selectedProject.title} <span className="text-xl font-normal opacity-60">({selectedProject.teamSize})</span>
                                </h2>
                                <span className="mt-2 inline-block px-3 py-1 bg-indigo-600 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                                    {selectedProject.category}
                                </span>
                            </div>
                        )}

                        <div className="p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                                        <p className="text-gray-300 leading-relaxed text-lg">
                                            {selectedProject.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3">Technical Details</h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            {selectedProject.details || "More detailed technical specifications and challenges overcome during this project will be updated here. This section allows for a deeper dive into the architecture and code structure."}
                                        </p>

                                        {selectedProject.keyResponsibilities && (
                                            <div className="mb-6">
                                                <h4 className="text-lg font-bold text-indigo-300 mb-2">Key Responsibilities</h4>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {selectedProject.keyResponsibilities}
                                                </p>
                                            </div>
                                        )}

                                        {selectedProject.outcome && (
                                            <div className="mb-6">
                                                <h4 className="text-lg font-bold text-green-400 mb-2">Outcome</h4>
                                                <p className="text-gray-300 leading-relaxed">
                                                    {selectedProject.outcome}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Gallery */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">Project Gallery</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {selectedProject.gallery ? (
                                                selectedProject.gallery.map((img: string, index: number) => (
                                                    <div key={index}
                                                        className="rounded-xl overflow-hidden h-40 border border-white/10 group cursor-pointer"
                                                        onClick={() => setPreviewImage(img)}
                                                    >
                                                        <img
                                                            src={img}
                                                            alt={`Project Screenshot ${index + 1}`}
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                ))
                                            ) : (
                                                <>
                                                    <div
                                                        className="rounded-xl overflow-hidden h-40 border border-white/10 group cursor-pointer"
                                                        onClick={() => setPreviewImage(`https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&q=80`)}
                                                    >
                                                        <img
                                                            src={`https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&q=80`}
                                                            alt="Project Screenshot 1"
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <div
                                                        className="rounded-xl overflow-hidden h-40 border border-white/10 group cursor-pointer"
                                                        onClick={() => setPreviewImage(`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80`)}
                                                    >
                                                        <img
                                                            src={`https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80`}
                                                            alt="Project Screenshot 2"
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <div
                                                        className="rounded-xl overflow-hidden h-40 border border-white/10 group sm:col-span-2 cursor-pointer"
                                                        onClick={() => setPreviewImage(`https://images.unsplash.com/photo-1607799275518-d58665d099db?w=800&q=80`)}
                                                    >
                                                        <img
                                                            src={`https://images.unsplash.com/photo-1607799275518-d58665d099db?w=800&q=80`}
                                                            alt="Project Screenshot 3"
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 h-fit">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Technologies</h4>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tags.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-300 text-sm border border-indigo-500/30">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Resources</h4>
                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-white hover:text-indigo-400 transition-colors group"
                                        >
                                            <span className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                            </span>
                                            View Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* LIGHTBOX MODAL */}
            {previewImage && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    onClick={() => setPreviewImage(null)}
                >
                    <button
                        onClick={() => setPreviewImage(null)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/20"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <img
                        src={previewImage}
                        alt="Zoomed Preview"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
};
