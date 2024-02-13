import React from 'react'
import Header from "../components/header/Header"
import Card from "../components/card/Card"
import "../components/styles/Home.css"
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <div className="cars">
        <div className="container">
          <h6>НАШИ ТУРЫ</h6>
          <div className="row">
            <Card title={"Dubai"} img={"public/duabai.jpg"} />
            <Card title={"Turkey"} img={"public/turkey.jpg"} />
            <Card title={"Maldiv"} img={"public/maldiv.jpg"} />
            <Card title={"Malasia"} img={"public/malaysia.jpg"} />
            <Card title={"China"} img={"public/china.jpg"} />
            <Card title={"Thailand"} img={"public/thailand.jpg"} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
