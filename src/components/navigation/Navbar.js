import Link from 'next/link';
import React from 'react';
import HeroHome from '../HeroHome';
// import './navBar.css';

export default function Navbar() {
  return (
    <div className='navbar'> 
      <div className='content flex justify-between'>
        <div className="font-bold text-white text-2xl ">
          <h1>Read<span className='text-yellow-500'>it</span></h1>
        </div>
        <div className="">
          <ul className=''>
              <Link href='/'>
                  <li>Home</li>
              </Link>
              <Link href='/about'>
                <li>About</li>
              </Link>
              <Link href='/contact'>
                <li>Contact</li>
              </Link>
              <Link href='/post/1'>
                <li>Voir Post</li>
              </Link>   
            </ul>
          </div>
        </div>
    </div>
  );
}


