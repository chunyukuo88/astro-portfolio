import './project-cards.css';

export default function ProjectCards() {

    return (
        <>
            <h3 id="projects">
                <span aria-hidden="true">Projects</span>
            </h3>
            <div className="project-cards">
                <div className="card">SvelteKit  WOH </div>
                <div className="card">Serverless WOH API</div>
                <div className="card">Astro	   this site</div>
                <div className="card">GO	   workouts api</div>
                <div className="card">NODE	   gochenour CLI</div>
            </div>
        </>
    )
}