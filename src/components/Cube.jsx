import { useState } from 'preact/hooks';
import './cube.css';

export default function Cube(){
    const [isDefaultDir, setDirection] = useState(true);
    function clickHandler(){
        setDirection(!isDefaultDir);
    }

    return (
        <div id='cube' onClick={clickHandler} className={isDefaultDir ? '' : 'reverse'} role='presentation' aria-hidden='true'>
            <div class='cube-lid' />
            <div>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
        </div>
    );
}
