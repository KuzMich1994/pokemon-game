import Menu from "./-Menu";
import Navbar from "./-Navbar";
import { useState } from "react";

const MenuHeader = () => {
  const [isActive, setState] = useState(false);

  const toggleClass = () => {
    setState(!isActive)
  };

  return (
    <>
      <Menu isActive={isActive}/>
      <Navbar handleClickButton={toggleClass} isActive={isActive}/>
    </>
  );
};

export default MenuHeader;