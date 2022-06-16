import React from 'react'
import { useState } from 'react';

const ChartBlock = ({ day, amount, highestExpense }) => {
  const [ hovered, setHovered] = useState(false);

  // chart block background conditions
  let expenseBgColor = {backgroundColor: "hsl(10, 79%, 65%)"};
  if (highestExpense === amount) {
    expenseBgColor = {backgroundColor: "hsl(186, 34%, 60%)"};
  }
  if (hovered) {
    expenseBgColor = {backgroundColor: "hsl(10, 79%, 75%)"};
  } 
  if (highestExpense === amount && hovered) {
    expenseBgColor = {backgroundColor: "hsl(186, 34%, 75%)"}
  }
  
  // chart hight
  let fieldHeightRatio = 2.9;
  if (window.innerWidth > 1040) {
    fieldHeightRatio = 2;
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
        style={{ ...expenseBgColor, ...fieldHeight }}
      >
        <div className="Expenses__chart--hover"
          style={{visibility: hovered ? 'visible' : 'hidden' }}
        >${amount}</div>
      </div>
      <div className="Expenses__chart--day">{day}</div>
    </div>
  )
}

export default ChartBlock