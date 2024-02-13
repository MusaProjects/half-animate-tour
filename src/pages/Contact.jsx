import React, { useEffect } from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import { PiMapPinBold } from "react-icons/pi"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import "aos/dist/aos.css";
import { BsYoutube } from "react-icons/bs";
import AOS from 'aos';
import "../components/styles/Contact.css"
const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Navbar />
            <div className="container">
                <div data-aos={"fade-up"} className="box3">
                    <div className="icon1" data-aos={"fade-up-right"} >
                        <i  ><FaTelegram /></i>
                        <div className="icon1-text">@telegram</div>
                        <div className="icons">
                        </div>
                    </div>
                    <div className="icon2">
                        <i data-aos={"fade-up-left"} ><RiInstagramFill /></i>
                        <div className="icon1-text">@instagram</div>
                        <div className="icons">
                        </div>
                    </div>
                    <div className="icon3">
                        <i data-aos={"fade-up-right"} ><BsYoutube /></i>
                        <div className="icon1-text">@youtube</div>
                        <div className="icons">
                        </div>
                    </div>
                    <div className="contact">
                        <i data-aos={"fade-up-left"}><PiMapPinBold /> <span>hkll</span></i>
                        <i data-aos={"fade-up-right"}><FaPhoneSquareAlt /><span>+000 00 000 00 00</span></i>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
