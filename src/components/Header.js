import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
// import link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'photographer-portfolio-website/'}
          className='max-w-[200px]'
        >
          <img src={Logo} alt='' style={{ height: "5rem" }} />
          <b style={{ marginLeft: "3px" }}>DH-TRAP</b>
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className='hidden xl:flex gap-x-12 font-semibold'
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link
            to={'photographer-portfolio-website/home'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Home
          </Link>
          <Link
            to={'photographer-portfolio-website/about'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            About
          </Link>
          <Link
            to={'photographer-portfolio-website/portfolio'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Porftolio
          </Link>
          <Link
            to={'photographer-portfolio-website/contact'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
