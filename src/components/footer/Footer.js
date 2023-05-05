import React from 'react'
import { RiTwitterFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer flex flex-wrap justify-between'>
      <div className='content flex flex-wrap justify-between w-[100%]' >
        <div className='title_footer ' >
          <h3>Read<span>it</span>.</h3>
          <p className='text-gray-footer' >Far far away, behind the world mountains, far from the countries Vocalia and Consonantia, there live the blind texts</p>
          <div className="socialIcon">
            <div className='icons'>
            <RiTwitterFill/>
            </div>
            <div className='icons'>
            <FaFacebookF/>
            </div>
          </div>
        </div>
        <div>
          <h3>latest News</h3>
          <div className='img_footer flex flex-wrap' >
            <img src='/img/image_1.jpg' />
            <div>
              <p className='text-gray-footer' >Even the all-powerfull</p>
              <p className='text-gray-footer' >Pointing has no </p>
              <p className='text-gray-footer' >control about</p>
              <p className='txt-gray' >oct. 16,2019 admin 19</p>
            </div>
          </div>
          <div className='img_footer flex flex-wrap' >
            <img src='/img/image_2.jpg' />
            <div>
              <p className='text-gray-footer' >Even the all-powerfull</p>
              <p className='text-gray-footer' >Pointing has no </p>
              <p className='text-gray-footer' >control about</p>
              <p className='txt-gray' >oct. 16,2019 admin 19</p>
            </div>
          </div>
        </div>

        <div>
          <h3>Information</h3>
          <p>&#x276F; Home</p>
          <p>&#x276F; About</p>
          <p>&#x276F; Articles</p>
          <p>&#x276F; Contact</p>
        </div>
        <div>
          <h3>Have a Questions?</h3>
          <p>203 FAke St. Mountain View,</p>
          <p>San Fransico, California,</p>
          <p>USA</p>
          <p>&#x260E; +2 392 3929 210</p>
          <p>&#x2709; info@yourdomain.com</p>
        </div>
      </div> 
      <div className='footer content w-[100%]'  >
        <p>Copyright &#xa9; 2023 All right reserved | This template is made with &#x2764; by Colorlib  </p>
    </div>
  </div>

  )
}
