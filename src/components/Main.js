import React from 'react'
import tibouPerfume from '../image/logo3.png'
import tiboulb from '../image/logo33-100.png';
import { Link } from 'react-router-dom';

//CSS
import './css/Main.css';

function Main() {
    return (
        <div className="tiboulbContainer">
            <div className='textTibou'>
                Welcome to our Linktree hub, your gateway to effortless navigation and discovering everything we have to offer.
            </div>
            <div className='tiboulb'>
                <Link to='/tiboulb'><img src={tiboulb} className='logoimage' alt="tibou.lb" /></Link>
            </div>

            <div className='tibouperfume'>
                <Link to='tibouperfume'><img className='logoimage' src={tibouPerfume} alt="tibou perfume" /></Link>
            </div>
        </div>
    )
}

export default Main;