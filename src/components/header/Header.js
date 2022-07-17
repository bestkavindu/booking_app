import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRangePicker } from "react-date-range";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {format} from "date-fns"
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination,setDestination] = useState("")

  const [openDate,setOpenDate] = useState(false)
  const [openOption,setOpenOption]=useState(false)
  const [option,setOption]=useState({
    adult:1,
    children:0,
    room:1
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate()

  const handleOption = (name, operation)=>{
    setOption(prev=>{return{
      ...prev,[name]: operation ==="i" ?option[name] + 1 : option[name] - 1,
    }})
  }

  const handleSearch = ()=>{
    navigate("/hotels",{state:{destination,date,option}})

  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" :"headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Atraction</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Air port Exists</span>
          </div>
        </div>

{ type !== "list" &&     
<> <h1 className="headerTitle">A lifetime of discouns? It's Genius</h1>
        <p className="headerDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nam
          debitis, voluptates, cumque excepturi et unde non, exercitationem
          aliquam laboriosam dolor quaerat magnam? Voluptate expedita, eius esse
          sequi eos aliquid?
        </p>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              className="headerSearchInput"
              placeholder="where are you going"
              onChange={e=>setDestination(e.target.value)}
            ></input>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={()=>setOpenDate(!openDate)} className="headersearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
{openDate &&<DateRangePicker 
              onChange={(item) => setDate([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
                   ranges={date}
                   minDate ={new Date}
              direction="horizontal" className="date"
            />}
            ;
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setOpenOption(!openOption)} className="headersearchText">{`${option.adult} adult - ${option.children} children - ${option.room} room `}</span>
{  openOption &&       <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter" >
                <button disabled ={option.adult <=1} className="optionCountBtn" onClick={()=>handleOption("adult", 'd')}>-</button>
                <span className="optionCounterNumber">{option.adult}</span>
                <button className="optionCountBtn" onClick={()=>handleOption("adult", 'i')}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                <button disabled ={option.children <= 0 } className="optionCountBtn" onClick={()=>handleOption("children", 'd')}>-</button>
                <span className="optionCounterNumber">{option.children}</span>
                <button className="optionCountBtn" onClick={()=>handleOption("children", 'i')}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCounter">
                <button className="optionCountBtn" disabled ={option.room <= 1 } onClick={()=>handleOption("room", 'd')}>-</button>
                <span className="optionCounterNumber">{option.room}</span>
                <button className="optionCountBtn" onClick={()=>handleOption("room", 'i')}>+</button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          <a href="https://angular.io/"><button className="viewbtn">View</button></a>
          </div>
        </div>
        </>
}
      </div>
    </div>
  );
};

export default Header;
