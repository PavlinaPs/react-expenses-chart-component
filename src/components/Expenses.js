import React from 'react';
import Chart from './Chart';
import Stats from './Stats';

const Expenses = () => {
  return (
    <div className='Expenses'>
        <h1 className="Expenses__title">Spending - Last 7 days</h1>
        <Chart />
        <Stats />
    </div>
  )
}

export default Expenses