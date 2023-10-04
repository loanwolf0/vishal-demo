
import React, { useState } from 'react';
import './Header.css'
import Logo from '..//../assests/Logo.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className={`bg-white p-5 flex  items-center justify-between  ${isNavVisible ? 'flex-col' : 'flex-row'}`}>

      {/* Logo */}
      <div className={`${isNavVisible ? 'hidden' : 'block'}`}>
        <img src={Logo} alt="Logo" className="w-25 text-[rgb(39,84,115)]" />
        
      </div>

      {/* Search */}
      <div className={`mx-2 md:mx-5 relative  w-full max-w-400 ${isNavVisible ? 'hidden' : 'block'} `}>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pb-3 pl-10 rounded-full shadow-lg bg-gray-300 outline-none"
          />
          <div className="absolute left-2 top-2">
            <SearchIcon style={{ fontSize: 24, color: '#feb656' }} />
          </div>
        </div>
      </div>

      {/* Mobile navigation toggle */}
      <div className="md:hidden cursor-pointer" onClick={toggleNavVisibility}>
        <MenuIcon style={{ fontSize: 24, color: '#feb656' }} />
      </div>



      {/* Navigation */}
    <  div className={`md:flex justify-end  items-center w-full ${isNavVisible ? 'block nav-mobile w-full' : 'hidden'}`}>
        {/* Navigation items */}
        
        <div className={`flex  justify-end  items-center w-full ${isNavVisible ? 'flex-col' : 'flex-row'} `}>
        
            <div className={`nav-links ${isNavVisible ? 'nav-mobile-res' : ''} `}>
            <HomeOutlinedIcon className="w-8 h-8 mb-1" />
            <a href="#" className="">Home</a>
            </div>

            <div className={`nav-links ${isNavVisible ? 'nav-mobile-res' : ''} `}>
            <InfoOutlinedIcon className="w-8 h-8 mb-1" />
            <a href="#" className="">About</a>
            </div>

            <div className={`nav-links ${isNavVisible ? 'nav-mobile-res' : ''} `}>
            <CallOutlinedIcon className="w-8 h-8 mb-1 " />
            <a href="#" className="">Contact</a>
            </div>

            <div className={`nav-links ${isNavVisible ? 'nav-mobile-res' : ''} `}>
            <PhonelinkOutlinedIcon className="w-8 h-8 mb-1 " />
            <a href="#" className="">Testimonial</a>
            </div>
            
            <div className={`nav-links ${isNavVisible ? 'nav-mobile-res' : ''} `}>
            <EventAvailableOutlinedIcon className="w-8 h-8 mb-1 " />
            <a href="#" className="">Events</a>
            </div>
        
            <div className={`nav-links ${isNavVisible ? 'nav-mobile-res' : ''} `}>
            <Person3OutlinedIcon className="w-8 h-8 mb-1 " />
            <a href="#" className="">Mentership</a>
            </div>
        
      </div>

      </div>

    </div>
  );
};

export default Header;

