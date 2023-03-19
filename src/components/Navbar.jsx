import React, { useState } from "react";
import Logo from "../assets/bookIcon.svg"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex p-5 justify-between items-center">
      <img className=" w-20" src={Logo}  />
      <div className="hidden md:block">
        <ul className="flex gap-x-3">
          <Link to={"/home"} onClick={closeMenu}>
            <li className="text-red-500 font-black text-xl p-3">Inicio</li>
          </Link>
          <Link to={"/book/create"} onClick={closeMenu}>
            <li className="text-sky-500 font-black text-xl p-3">Agregar Libro</li>
          </Link>
          <Link to={"/book/search"} onClick={closeMenu}>
            <li className="text-sky-500 font-black text-xl p-3">Buscar Libro</li>
          </Link>
        </ul>
      </div>
      <div className="block md:hidden">
        <button onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className={`${
        isOpen ? "block" : "hidden"
      } md:hidden absolute w-full top-14 bg-white z-10`}>
        <ul className="flex flex-col gap-y-2">
          <Link to={"/home"} onClick={closeMenu}>
            <li className="text-red-500 font-black text-xl py-3 px-5">Inicio</li>
          </Link>
          <Link to={"/book/create"} onClick={closeMenu}>
            <li className="text-sky-500 font-black text-xl py-3 px-5">Agregar Libro</li>
          </Link>
          <Link to={"/book/search"} onClick={closeMenu}>
            <li className="text-sky-500 font-black text-xl py-3 px-5">Buscar Libro</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
