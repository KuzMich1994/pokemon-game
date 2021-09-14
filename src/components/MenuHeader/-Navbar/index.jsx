// import { useState } from "react";
import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({ handleClickButton, isActive}) => {

  const handleClick = (e) => {
    e.preventDefault();
    handleClickButton && handleClickButton(isActive);
  };

  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <a href='#s' onClick={(e) => handleClick(e)} className={cn(s.menuButton, {[s.active]: isActive})}>
          <span />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
