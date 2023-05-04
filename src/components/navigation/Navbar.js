import Link from 'next/link';
import React from 'react';
import HeroHome from '../HeroHome';
// import './navBar.css';

export default function Navbar() {
  return (
    <div className='flex  navbar'> 
      <div className='content'>
        <div className="font-bold text-white text-2xl">
          <h1>Read<span className='text-yellow-500'>it</span></h1>
        </div>
        <div className="">
          <ul className='flex space-x-5 '>
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


