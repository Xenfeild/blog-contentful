import Link from 'next/link';
import React from 'react';
// import './navBar.css';

export default function Navbar() {
  return (
    <div>
      <div className='logo'>
        <h1>redd<span>it</span></h1>
      </div>
        <ul>
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
  );
}


