// import { useState } from "react";
import s from './style.module.css';
import cn from 'classnames';

const Navbar = ({ handleClickButton, isOpen, bgActive = false}) => {

  return (
    <nav className={cn(s.root, {[s.bgActive]: bgActive})}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <div onClick={handleClickButton} className={cn(s.menuButton, {[s.active]: isOpen})}>
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
