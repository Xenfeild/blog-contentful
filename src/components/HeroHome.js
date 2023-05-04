import React from 'react'
import { BsArrowDown } from "react-icons/bs";

export default function HeroHome() {
  return (
    <div className='heroHome'>
        <div className='content'>
            <div className='max-w-[600px] '>
                <p>Hello! Welcome to</p>
                <h2>Readit blog</h2>
                <br />
                <p>Far far away, behind the word montains, far from the countries Vokalia and Consonatia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the semantics, a large language ocean</p>
                <br />
                <span><BsArrowDown/></span>
            </div>
        </div>
    </div>
  )
}
