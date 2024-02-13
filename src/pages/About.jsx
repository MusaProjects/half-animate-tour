import React , {useEffect}from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import "../components/styles/About.css"
import "aos/dist/aos.css";
import AOS from 'aos';
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Navbar />
            <div className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="left" data-aos={"fade-down"}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quis, alias quasi fugiat, dicta optio est aliquid illo quas veniam cumque doloremque suscipit nobis consequatur iste. Reiciendis molestiae aperiam vel!</p>
                        </div>
                        <div className="right">
                            <div className="container">
                                <video src="public/header.mp4" loop muted autoPlay></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
