import './project-cards.css';
import { useEffect, useRef } from "preact/hooks";

export default function ProjectCards() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);
        if (cards.length === 0) return;

        const getScrollParent = (el) => {
            while (el && el !== document.body) {
                const { overflow, overflowY } = getComputedStyle(el);
                if (/auto|scroll/.test(overflow + overflowY)) return el;
                el = el.parentElement;
            }
            return window;
        };

        const scrollParent = getScrollParent(cards[0]);
        const getScrollY = () => scrollParent === window ? window.scrollY : scrollParent.scrollTop;

        const naturalTops = cards.map(card => card.getBoundingClientRect().top + getScrollY());
        const locked = new Array(cards.length).fill(false);

        const onScroll = () => {
            const scrollY = getScrollY();

            cards.forEach((card, i) => {
                if (i === 0 || locked[i]) return;

                const targetTop = naturalTops[0] + i * OVERLAP;
                const totalTravel = naturalTops[i] - targetTop;
                const scrollStart = naturalTops[i] - window.innerHeight;
                const progress = Math.min(1, Math.max(0, (scrollY - scrollStart) / totalTravel));
                const translateY = -totalTravel * progress;

                card.style.transform = `translateY(${translateY}px)`;

                if (progress >= 1) {
                    locked[i] = true;
                }
            });
        };

        scrollParent.addEventListener('scroll', onScroll, { passive: true });
        return () => scrollParent.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <h3 id="projects">
                <span aria-hidden="true">Projects</span>
            </h3>
            <div className="project-cards">
                {cards.map((label, i) => (
                    <div
                        key={i}
                        className="card"
                        ref={el => cardsRef.current[i] = el}
                    >
                        {label}
                    </div>
                ))}
            </div>
        </>
    );
}

const OVERLAP = 300;

const cards = [
    'SvelteKit — WOH',
    'Serverless WOH API',
    'Astro — this site',
    'GO workouts api',
    'NODE gochenour CLI',
];