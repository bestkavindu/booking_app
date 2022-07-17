import React from 'react'
import './searchItem.css'

const searchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Streat Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="sitaxiOp">Free air pot taxi</span>
            <span className='siSubTitle'>Studio Apartment with air condition</span>
            <span className="siFeatures">Entic Studio- 1 bathroom - 21m^2 full bed</span>
            <span className="siCancelOp">Free Cancelation</span>
            <span className="siCancelSubTitle">you can cancel later, so lock in this great price today</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxs and fees</span>
            <button className='siCheckButton'>See availabilty</button>
          </div>
        </div>
    </div>
  )
}

export default searchItem