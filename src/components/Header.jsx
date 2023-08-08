import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import style from './Header.module.css'

function Header(props) {
  return (
    <div className={style.menuBar}>
    <div className={style.widthMenu}>
      
      <Link to='/' className={style.icon}></Link>
      <div className={style.menuItems}>
        <NavLink to='/' activeClassName={style.active}>Home</NavLink>
        <NavLink to='/list' activeClassName={style.active}>Country List</NavLink>
        <NavLink to='/about' activeClassName={style.active}>About this Project</NavLink>

      </div>

    </div>
    </div>
  );
}

export default Header;