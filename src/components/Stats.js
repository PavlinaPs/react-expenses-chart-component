import React from 'react'

const Stats = () => {
  return (
    <div className='Stats__container'>
      <div className="Stats__total--container">
        <p className="Stats__description">Total this month</p>
        <h1 className="Stats__total">$478.33</h1>
      </div>
      <div className="Stats__difference--container">
        <p className="Stats__difference">+2.4%</p>
        <p className="Stats__description">from last month</p>
      </div>
    </div>
  )
}

export default Stats