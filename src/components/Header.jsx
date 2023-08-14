import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import DarkMode from './DarkMode/DarkMode';
import style from './Header.module.css'

function Header(props) {
  return (
    <div className={style.menuBar}>
      <div className={style.widthMenu}>

        <Link to='/' className={style.icon}></Link>
        <div className={style.menuItems}>
          <DarkMode />
          <NavLink to='/' activeclassname={style.active}>Home</NavLink>
          <NavLink to='/list' activeclassname={style.active}>Country List</NavLink>
          <NavLink to='/about' activeclassname={style.active}>About this Project</NavLink>

        </div>

      </div>
    </div>
  );
}

export default Header;