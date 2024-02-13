import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Header from "../../Components/header/Header"
import Footer from '../../Components/footer/Footer'
import Card from '../../Components/card/Card'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="cars">
        <div className="container">
          <div className="row">            
            <Card title={"Dubai"} img={"public/duabai.jpg"}/>
            <Card title={"Turkey"} img={"public/turkey.jpg"}/>
            <Card title={"Maldiv"} img={"public/maldiv.jpg"}/>
            <Card title={"Malasia"} img={"public/malaysia.jpg"}/>
            <Card title={"China"} img={"public/china.jpg"}/>
            <Card title={"Thailand"} img={"public/thailand.jpg"}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home