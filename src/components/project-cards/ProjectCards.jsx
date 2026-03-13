import styles from './project-cards.module.css';
import { useEffect, useRef } from "preact/hooks";
import { Card1, Card2, Card3, Card4, Card5 } from "./components/";
import { getTranslationValue } from "./utils.js";

const cardObjects = [
    {label: 'SvelteKit — WOH', component: Card1},
    {label: 'Serverless WOH API', component: Card2},
    {label: 'Astro — this site', component: Card3},
    {label: 'GO workouts api', component: Card4},
    {label: 'NODE gochenour CLI', component: Card5},
];

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

export default function ProjectCards() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);
        const scrollParent = getScrollParent(cards[0]);
        let naturalTops;
        const locked = new Array(cards.length).fill(false);

        requestAnimationFrame(() => {
            naturalTops = cards.map((card, i) => {
                return card.getBoundingClientRect().top;
            });
        });

        const onScroll = () => {
            if (!naturalTops) return;
            const scrollY = scrollParent.scrollTop;

            cards.forEach((card, i) => {
                if (i === 0 || locked[i]) {
                    return;
                }
                const {translation, progress} = getTranslationValue(naturalTops, i, scrollY);
                card.style.transform = translation;
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
            <h3 id={styles.projects}>
                <span aria-hidden="true">Projects</span>
            </h3>
            <div className={styles["project-cards"]}>
                <h5 className={styles["project-cards-welcome"]}>Note: Links to all projects can be found at the bottom of the page.</h5>
                {cardObjects.map((card, i) => (
                    <div
                        key={i}
                        className={styles["card-wrapper"]}
                        ref={el => cardsRef.current[i] = el}
                    >
                        <card.component/>
                    </div>
                ))}
                <div className={styles["hidden-card"]}>
                    <p>Links:</p>
                    <div className={styles["links-table"]}>
                        <a href="http://woobler-svelte.s3-website-us-east-1.amazonaws.com/" target="_blank">Woobler's Other House</a>
                        <a href="https://github.com/chunyukuo88/woobler-sveltekit" target="_blank">Code</a>
                        <div>This site</div>
                        <a href="https://github.com/chunyukuo88/astro-portfolio" target="_blank">Code</a>
                        <div>Workouts API</div>
                        <a href="https://github.com/chunyukuo88/workoutsV2" target="_blank">Code</a>
                        <a href="https://www.npmjs.com/package/gochenour" target="_blank">The gochenour CLI</a>
                        <a href="https://github.com/chunyukuo88/gochenour" target="_blank">Code</a>
                    </div>
                </div>
            </div>
        </>
    );
}
