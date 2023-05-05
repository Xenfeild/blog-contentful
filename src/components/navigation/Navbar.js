import Link from 'next/link';
import React from 'react';
import HeroHome from '../HeroHome';
import { RxHamburgerMenu } from "react-icons/rx";
// import './navBar.css';

export default function Navbar() {


  return (
    <div className='content navbar'> 
      <div className="font-bold text-white text-2xl ">
        <h1>Read<span className='text-yellow-500'>it</span></h1>
      </div>
      <div className="">
        <div className='burger'>
          <RxHamburgerMenu/>
          <p>Menu</p>
        </div>
        <ul className='menu_open'>
            <Link href='/'>
                <li>Home</li>
            </Link>
            <Link href='/about'>
              <li>About</li>
            </Link>
              <li>Team</li>
            <Link href='/contact'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
    </div>
  );
}


