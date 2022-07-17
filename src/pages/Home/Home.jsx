import React from 'react'
import './Home.css'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import NavBar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty'
import HomeSlider from '../../components/slider/HomeSlider'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <div className="homeTitle">Browse Your Property</div>
          <PropertyList/>
          <h1 className='homeTitle'>Homes guests love</h1>
          <FeaturedProperty/>
          <HomeSlider/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home