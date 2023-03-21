import React from 'react'

const MobileMenu = ({ isOpen }) => {
  const menuHeight = 
isOpen ? '25%' : '-100vh';

  return (

  <div className="mobile__menu" style={{ top: menuHeight }}>

            <ul className='mobile__ul'>
                <li><a href='/people'>People</a></li>
                <li><a href='/places'>Places</a></li>
                <li><a href='/wedding'>Wedding</a></li>
                <li><a href='/info'>Info</a></li>
            </ul>
        </div>
    )
}

export default MobileMenu
