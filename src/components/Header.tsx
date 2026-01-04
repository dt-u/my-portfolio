import React from 'react';

export const Header = () => {
    return (
        <header className="fixed w-full top-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto">
                <nav className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/5">
                    <a href="#" className="text-2xl font-black text-white tracking-tighter hover:text-indigo-400 transition-colors">
                        PORTFOLIO<span className="text-indigo-500">.</span>
                    </a>

                    <div className="hidden md:flex space-x-1">
                        {['Home', 'About', 'Journey', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <button className="md:hidden text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                    </button>
                </nav>
            </div>
        </header>
    );
};
