import './project-cards.css';
import { useEffect, useRef } from "preact/hooks";
import { Card1, Card2, Card3, Card4, Card5 } from "./components/";

const OVERLAP = 400;
const cardObjects = [
    {label: 'SvelteKit — WOH', component: Card1},
    {label: 'Serverless WOH API', component: Card2},
    {label: 'Astro — this site', component: Card3},
    {label: 'GO workouts api', component: Card4},
    {label: 'NODE gochenour CLI', component: Card5},
];

export default function ProjectCards() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);

        const getScrollParent = (el) => {
            while (el && el !== document.body) {
                const { overflow, overflowY } = getComputedStyle(el);
                if (/auto|scroll/.test(overflow + overflowY)) {
                    return el;
                }
                el = el.parentElement;
            }
            return window;
        };

        const scrollParent = getScrollParent(cards[0]);

        let naturalTops;
        const locked = new Array(cards.length).fill(false);

        requestAnimationFrame(() => {
            naturalTops = cards.map((card) => {
                const cardTop = card.getBoundingClientRect().top;
                return cardTop + scrollParent.scrollTop;
            });
        });

        const onScroll = () => {
            if (!naturalTops) return;
            const scrollY = scrollParent.scrollTop;

            cards.forEach((card, i) => {
                if (i === 0 || locked[i]) {
                    return;
                }
                const targetTop = naturalTops[0] + i * OVERLAP;
                const totalTravel = naturalTops[i] - targetTop;
                const scrollStart = naturalTops[i] - window.innerHeight;
                const progress = Math.min(1, Math.max(0, (scrollY - scrollStart) / totalTravel));
                card.style.transform = `translateY(${-totalTravel * progress}px)`;
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
                {cardObjects.map((card, i) => (
                    <div
                        key={i}
                        className="card-wrapper"
                        ref={el => cardsRef.current[i] = el}
                    >
                        <card.component/>
                    </div>
                ))}
                <div className="hidden-card">
                    Check back for the latest live projects!
                </div>
            </div>
        </>
    );
}
