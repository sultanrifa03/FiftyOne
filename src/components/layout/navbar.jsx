import React from "react";
import { Link } from "react-router-dom";
import Navigation from "react-sticky-nav";
export const Navbar = () => {
  return (
    <>
      <Navigation className='bg-[#A1A1A1]'>
        <ul className='flex justify-center py-4 m-0 gap-x-8 font-bold'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </Navigation>
    </>
  );
};
export default Navbar;
