import React from 'react'
import tibouPerfume from '../image/logo3.png'
import tiboulb from '../image/logo33-100.png';

//CSS
import './css/Main.css';

function Main() {
    return (
        <div className="Main">
            <div className='tiboulb'>
                <img src={tiboulb} alt="tibou.lb" />
            </div>

            <div className='tibouperfume'>
                <img src={tibouPerfume} alt="tibou perfume" />
            </div>
        </div>
    )
}

export default Main;