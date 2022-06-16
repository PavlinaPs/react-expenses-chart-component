import React from 'react';
import data from '../data.json';
import ChartBlock from './ChartBlock';

const Chart = () => {
    let highestExpense = data.reduce((acc, cur) => {
        return cur.amount > acc ? acc = cur.amount : acc;
    }, 0)

  return (
    <div className='Chart__container'>
        {data.map(item => 
            <ChartBlock 
                key={item.key}
                day={item.day}
                amount={item.amount}
                highestExpense={highestExpense}
            />
        )}
    </div>
  )
}

export default Chart