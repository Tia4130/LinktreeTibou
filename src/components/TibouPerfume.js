import React from 'react'
import '../components/css/Tibous.css';
import { Link } from 'react-router-dom';

//IMAGE
import tiktok from '../image/tiktok.png';
import insta from '../image/insta.png';

function TibouPerfume() {
    return (
        <div className='tiboulbContainer'>
            <Link to="https://www.tiktok.com/@tibouperfume"><div className='content'><img src={tiktok} alt="tiktok" className='imagelogo' /> </div></Link>

            <Link to="https://www.instagram.com/tibouperfume/"><div className='content'><img src={insta} alt="Insta" className='imagelogo' /> </div></Link>
        </div>
    )
}

export default TibouPerfume