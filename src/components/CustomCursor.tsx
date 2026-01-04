import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;
        
        if (!cursor || !follower) return;

        // Hide default cursor
        document.body.style.cursor = 'none';

        // Use quickTo for high performance (no delay for the dot)
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
        
        // Slight delay for the follower ring (smoother feel, less laggy)
        const xToFollower = gsap.quickTo(follower, "x", { duration: 0.3, ease: "power3" });
        const yToFollower = gsap.quickTo(follower, "y", { duration: 0.3, ease: "power3" });

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xToFollower(e.clientX);
            yToFollower(e.clientY);
        };

        // Hover effects
        const onMouseEnterLink = () => {
            gsap.to(cursor, { scale: 0, duration: 0.2 });
            gsap.to(follower, { 
                scale: 3, 
                backgroundColor: "rgba(99, 102, 241, 0.4)", 
                borderColor: "transparent",
                duration: 0.2 
            });
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, { 
                scale: 1, 
                backgroundColor: "transparent", 
                borderColor: "#6366f1",
                duration: 0.2 
            });
        };

        document.addEventListener('mousemove', onMouseMove);
        
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', onMouseEnterLink);
            el.addEventListener('mouseleave', onMouseLeaveLink);
        });

        return () => {
            document.body.style.cursor = 'auto';
            document.removeEventListener('mousemove', onMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnterLink);
                el.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <>
            {/* Main Dot - No delay */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-indigo-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
            {/* Follower Ring - Slight delay */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border-2 border-indigo-500 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
            />
        </>
    );
};