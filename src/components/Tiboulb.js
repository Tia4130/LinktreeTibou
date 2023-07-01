import React from 'react'
import '../components/css/Tibous.css';
import { Link } from 'react-router-dom';

//IMAGE
import tiktok from '../image/tiktok.png';
import insta from '../image/insta.png';

function Tiboulb() {
    return (
        <div className='tiboulbContainer'>
            <Link to="https://www.tiktok.com/@tibou.lb"><div className='content'><img src={tiktok} alt='Tiktok' className='imagelogo' /></div></Link>

            <Link to="https://www.instagram.com/tibou.lb/">
                <div className='content'>
                    <img src={insta} alt='Insta' className='imagelogo' />
                </div>
            </Link>
        </div>
    )
}

export default Tiboulb