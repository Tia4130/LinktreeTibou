import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

//COMPONENT
import '../components/css/Tibous.css';

//IMAGE
import tiktok from '../image/tiktok.png';
import insta from '../image/insta.png';

function Tiboulb() {
    return (
        <div className='tiboulbContainer'>
            <Link to="https://www.tiktok.com/@tibou.lb">
                <motion.div className='content'>
                    <motion.div
                        animate={{
                            scale: [1, 1, 1, 1, 1],
                            rotate: [0, 30, 60, 240, 360],
                        }}
                    >
                        <motion.img
                            src={tiktok}
                            alt='Tiktok'
                            className='imagelogo'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 2 }}
                            transition={{ duration: 5 }}
                        />
                    </motion.div>
                </motion.div>
            </Link>

            <Link to="https://www.instagram.com/tibou.lb/">
                <motion.div className='content'>
                    <motion.div
                        animate={{
                            scale: [1, 1, 1, 1, 1],
                            rotate: [0, 30, 60, 240, 360],
                        }}
                    >
                        <motion.img
                            src={insta}
                            alt='Insta'
                            className='imagelogo'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 2 }}
                            transition={{ duration: 5 }} />
                    </motion.div>
                </motion.div>
            </Link>
        </div>
    )
}

export default Tiboulb