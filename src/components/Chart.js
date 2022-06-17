import React from 'react';
import data from '../data.json';
import ChartBlock from './ChartBlock';

const Chart = () => {
    let today = new Date();
    let todayIs = today.getDay();
    // returns a number, 4 for Thursday
    let days = data.map(item => item.day);
    let dayOfWeek = days[todayIs - 1];
    // -1 to compensate for the 0 indexing

  return (
    <div className='Chart__container'>
        {data.map(item => 
            <ChartBlock 
                key={item.key}
                day={item.day}
                amount={item.amount}
                dayOfWeek={dayOfWeek}
            />
        )}
    </div>
  )
}

export default Chart