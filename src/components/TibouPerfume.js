import React from 'react'
import '../components/css/Tibous.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

//IMAGE
import tiktok from '../image/tiktok.png';
import insta from '../image/insta.png';

function TibouPerfume() {
    return (
        <div className='tiboulbContainer'>
            <Link to="https://www.tiktok.com/@tibouperfume">
                <motion.div className='content'>
                    <motion.div
                        animate={{
                            scale: [1, 1, 1, 1, 1],
                            rotate: [0, 30, 60, 240, 360],
                        }}
                    >
                        <motion.img
                            src={tiktok}
                            alt="tiktok"
                            className='imagelogo'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 2 }}
                            transition={{ duration: 5 }}
                        />
                    </motion.div>
                </motion.div>
            </Link>

            <Link to="https://www.instagram.com/tibouperfume/">
                <motion.div className='content'>
                    <motion.div
                        animate={{
                            scale: [1, 1, 1, 1, 1],
                            rotate: [0, 30, 60, 240, 360],
                        }}
                    >
                        <motion.img
                            src={insta}
                            alt="Insta"
                            className='imagelogo'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 2 }}
                            transition={{ duration: 5 }}
                        />
                    </motion.div>
                </motion.div>
            </Link>
        </div>
    )
}

export default TibouPerfume