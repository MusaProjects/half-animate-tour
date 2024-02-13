import React from 'react'
import "./Card.css"
import { motion, useScroll } from "framer-motion"
const Card = ({ title, img }) => {
    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                    transition: { delay: 200 }
                }}
                initial={"hidden"}
                animate={"visible"}
                className="col-lg-4 col-md-6 col-sm-12 ">
                <section id="card1" class="card mt-5">
                    <img src={img} alt="" />
                    <div class="card__content">
                        <p class="card__title">{title}</p>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Card
