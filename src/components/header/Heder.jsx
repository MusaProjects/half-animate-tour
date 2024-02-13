import React from 'react'
import Navbar from "../navbar/Navbar"
import { motion, useScroll } from "framer-motion"
import "./Header.css"
const Header = () => {
    useScroll({
        target:"",
        offset:["0 1 " , "1.33 1"]
    })
    return (
        <>
            <Navbar />
            <div class="bg-video-wrap">
                
                <div class="overlay">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                            transition: { delay: 200 }
                        }}
                        initial={"hidden"}
                        animate={"visible"}
                        className="text">
                        <motion.h3
                            variants={{
                                hidden: { opacity: 0, x: 75 },
                                visible: { opacity: 1, x: 0 },
                                transition: { delay: 200 }
                            }}
                            initial={"hidden"}
                            animate={"visible"}
                        >Мы - Окно в мир путишествий</motion.h3>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, x: 75 },
                                visible: { opacity: 1, x: 0 },
                                transition: { delay: 200 }
                            }}
                            initial={"hidden"}
                            animate={"visible"}
                        >Весь мир на ладони</motion.h1>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Header
