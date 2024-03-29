import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import PDF from '../assets/P. Olek - CV.pdf'
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[135px] flex justify-between items-center px-4 bg-[#002222] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '150px', marginTop: '-15px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex' style={{ marginTop: '10px' }}>
  <li style={{ fontSize: '20px' }}>
  <Link to='Strona Główna' smooth={true} duration={500}>
    Strona Główna
  </Link>
    </li>
  <li style={{ fontSize: '20px' }}>
  <Link to='O mnie' smooth={true} duration={500}>
    O mnie
   </Link> 
  </li>
  <li style={{ fontSize: '20px' }}>
  <Link to='Umiejętności' smooth={true} duration={500}>
    Umiejętności
   </Link> 
    </li>
  <li style={{ fontSize: '20px' }}>
  <Link to='Projekty' smooth={true} duration={500}>
    Projekty
  </Link>
    </li>
  <li style={{ fontSize: '20px' }}>
  <Link to='Kontakt' smooth={true} duration={500}>
    Kontakt
  </Link>  
    </li>
</ul>

{/* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10'>
  {!nav ? <FaBars size="2em" /> : <FaTimes size="2em" />}
</div>


      {/* Mobile Menu */}
      <ul
        className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#002222] flex flex-col justify-center items-center'}
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='Strona Główna' smooth={true} duration={500}>
          Strona Główna
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='O mnie' smooth={true} duration={500}>
          O mnie
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Umiejętności' smooth={true} duration={500}>
          Umiejętności
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Projekty' smooth={true} duration={500}>
          Projekty
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='Kontakt' smooth={true} duration={500}>
          Kontakt
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left'>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-blue-600 '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://www.linkedin.com/in/piotrolek/' target='_blank'>
                Linkedin <FaLinkedin size={30}/>
            </a>
        </li>
    </ul>

    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-[#333333] '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://github.com/PiotrOlek' target='_blank'>
                GitHub <FaGithub size={30}/>
            </a>
        </li>
    </ul>

    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-[#85C75A] '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='mailto:olek.codetech@gmail.com'>
                E-mail <HiOutlineMail size={30}/>
            </a>
        </li>
    </ul>

    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-20px] duration-300 bg-[#565f69] '>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href= {PDF} download="P. Olek - CV.pdf">
                CV<BsFillPersonLinesFill size={30}/>
            </a>
        </li>
    </ul>

      </div>
    </div>
  );
};

export default NavBar;
