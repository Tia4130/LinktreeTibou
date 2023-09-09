import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

//IMAGE
import tibouPerfume from '../image/logo3.png'
import tiboulb from '../image/logo33-100.png';

//CSS
import './css/Main.css';

function Main() {
    return (
        <motion.div className="tiboulbContainer1">
            <motion.div className='textTibou'>
                <div className='textinside'>Welcome to our Linktree hub,</div>
                <div>your gateway to effortless navigation</div> and discovering everything we have to offer.
            </motion.div>
            <motion.div
                className='tiboulb'
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            >
                <Link to='/tiboulb'>
                    <img
                        src={tiboulb}
                        className='logoimage'
                        alt="tibou.lb"
                    />
                </Link>
            </motion.div>

            <motion.div
                className='tibouperfume'
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
            >
                <Link to='tibouperfume'>
                    <img
                        className='logoimage'
                        src={tibouPerfume}
                        alt="tibou perfume"
                    />
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Main;