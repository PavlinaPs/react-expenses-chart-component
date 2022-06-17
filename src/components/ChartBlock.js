import React from 'react'
import { useState } from 'react';

const ChartBlock = ({ day, amount, dayOfWeek }) => {
  const [ hovered, setHovered ] = useState(false);

  // chart block background color conditions
  let expenseBgColor = {backgroundColor: "hsl(10, 79%, 65%)"};
  if (dayOfWeek === day) {
    expenseBgColor = {backgroundColor: "hsl(186, 34%, 60%)"};
  }
  if (hovered) {
    expenseBgColor = {backgroundColor: "hsl(10, 79%, 75%)"};
  } 
  if (dayOfWeek === day && hovered) {
    expenseBgColor = {backgroundColor: "hsl(186, 34%, 75%)"}
  }
  
  // chart height
  let fieldHeightRatio = 2.9;
  if (window.innerWidth > 1040) {
    fieldHeightRatio = 2.85;
  }
  const fieldHeight = {
    height: (amount/10) * fieldHeightRatio + 'rem'
  };

  return (
    <div className='Expenses__chart--block'>
      <div 
        className="Expenses__chart--field"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        style={{ ...expenseBgColor, ...fieldHeight }}
        aria-details={amount}
        tabIndex="0"
      >
        <div className="Expenses__chart--hover"
          role="tooltip"
          style={{visibility: hovered ? 'visible' : 'hidden'}}
        >${amount}</div>
      </div>
      <div className="Expenses__chart--day">{day}</div>
    </div>
  )
}

export default ChartBlock