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
        <motion.div className="tiboulbContainer">
            <motion.div
                className='textTibou'


            >
                Welcome to our Linktree hub, your gateway to effortless navigation and discovering everything we have to offer.
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
                    // whileHover={{ scale: 1.2 }}
                    // whileTap={{ scale: 2 }}
                    // transition={{ duration: 5 }}
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
                    // whileHover={{ scale: 1.2 }}
                    // whileTap={{ scale: 2 }}
                    // transition={{ duration: 5 }}
                    />
                </Link>
            </motion.div>
        </motion.div>
    )
}

export default Main;