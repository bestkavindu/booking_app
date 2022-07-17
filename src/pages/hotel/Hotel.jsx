import React from "react";
import "./Hotel.css";
import NavBar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {

  const [slideNumber,setSlideNumber] =useState(0);
  const [open,setOpen] =useState(false);
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },

    {
      src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      src: "https://thumbs.dreamstime.com/b/hotel-lobby-luxury-staircases-fountain-39479289.jpg",
    },
    {
      src: "https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg",
    },
  ];
  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true)
  }
  const hnadleMove =(direction) =>{
    let newSlidNumber
    if(direction=='l'){
      newSlidNumber = slideNumber ===0 ? 3 :slideNumber-1
    }else{
      newSlidNumber = slideNumber === 3 ? 0 :slideNumber+1
    }
    setSlideNumber(newSlidNumber)
  }
  return (
   
    <div>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
{open &&         <div className="slider">
  <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
  <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>hnadleMove("l")}/>
  <div className="sliderWrapper">
     <img src={photos[slideNumber].src} alt="" className="sliderImg" />
  </div>
  <FontAwesomeIcon icon={faCircleArrowRight} className = "arrow" onClick={()=>hnadleMove("r")}/>


        </div>}
        <div className="hotelWrapper">
          <button className="booknow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>No-241,Udumulla,Balangoda</span>
          </div>
          <span className="hotelDistance">
            Exceelent Location on 500M from center
          </span>
          <span className="hotelPriceHighlight">
            Bokk a stay over $114 at this property and get a free airpot taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>perfect for a 9-night stay</h1>
              <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or book now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
