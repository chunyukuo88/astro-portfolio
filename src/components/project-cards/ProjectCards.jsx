import './project-cards.css';
import {useEffect, useState} from "preact/hooks";

export default function ProjectCards() {
    const [card2IsVisible, setCard2Visibility] =useState(false);

    useEffect(() => {
        const {observer: card2Observer, card: card2} = buildObservable({cardIndex: 1, callback: setCard2Visibility});
        card2Observer.observe(card2);
        return () => {
            card2Observer.disconnect();
        }
    }, []);

    useEffect(() => {
        if (card2IsVisible) {
            console.log('aha')
        }
    }, [card2IsVisible]);

    return (
        <>
            <h3 id="projects">
                <span aria-hidden="true">Projects</span>
            </h3>
            <div className="project-cards">
                <div className="card">SvelteKit  WOH </div>
                <div className="card" style={card2IsVisible ? { background: 'orange'} : {}}>Serverless WOH API</div>
                <div className="card">Astro	   this site</div>
                <div className="card">GO	   workouts api</div>
                <div className="card">NODE	   gochenour CLI</div>
            </div>
        </>
    )
}

const buildObservable = (args) => {
    const {cardIndex, callback} = args;
    console.dir(args);
    const observer = new IntersectionObserver(
        ([entry]) => callback(entry.isIntersecting),
        {threshold: 0.9}
    );
    const card = document.querySelectorAll('.card')[cardIndex];
    return {observer, card};
};