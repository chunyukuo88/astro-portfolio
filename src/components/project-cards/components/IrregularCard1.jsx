import './irregular-cards.css';

export function Card1() {
    return (
    <div className="card">
        <div className="content">SvelteKit — WOH</div>
        <div className="fake-border">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
        </div>
        <div className="bottom-row">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
        </div>
    </div>
    );
}
