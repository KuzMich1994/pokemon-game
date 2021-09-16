import Menu from "./-Menu";
import Navbar from "./-Navbar";
import { useState } from "react";

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);

  const toggleClass = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <Menu isOpen={isOpen} handleClickButton={toggleClass}/>
      <Navbar handleClickButton={toggleClass} bgActive={bgActive} isOpen={isOpen}/>
    </>
  );
};

export default MenuHeader;