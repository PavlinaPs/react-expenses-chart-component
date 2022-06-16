import React from 'react';
import Logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className='Header'>
        <div className="Header__text--container">
            <p className="Header__description">My balance</p>
            <h1 className="Header__balance">$921.48</h1>
        </div>
        <img className='Header__logo' src={Logo} alt="logo" />
    </div>
  )
}

export default Header