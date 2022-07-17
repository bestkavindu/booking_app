import React, { useState } from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/searchItem";
import "./List.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOpenOption] = useState(location.state.option);

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Chech In Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")}`} to $
                {format(date[0].endDate, "MM/ddyyyy")}
              </span>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div className="lsItem">
            <label htmlFor="Options">Options</label>
            <div className="lsOptions">
            <div className="lsOptionItem">
              <span className="lsOptionText">Min Price<small>Per Night</small></span>
              <input type='number' className="lsOptionInput"/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Max Price</span>
              <input type='number' className="lsOptionInput"/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Adult</span>
              <input type='number' min={1}  className="lsOptionInput" placeholder={option.adult}/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Childre</span>
              <input type='number' min={0} className="lsOptionInput" placeholder={option.children}/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Room</span>
              <input type='number' min={1} className="lsOptionInput" placeholder={option.room}/>
            </div>
          </div>
          </div>
<button>Search</button>
          </div>


          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
