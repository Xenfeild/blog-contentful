import HeroPage from '@/components/HeroPage'
import Layout from '@/components/layout/Layout'
import React from 'react'

export default function About() {
  return (
    <div>
      <Layout>
        <HeroPage/>
        <div className='content justify-center about'>
        <img src="" alt="" />
        <div>
          <p>Welcome to Readit</p>
          <h3>We give you the best articles you want.</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonatia</p>
        </div>
        <div className='aboutButton'>
          <button className='yellowButton'>Our Mission</button>
          <button>Our Vision</button>
          <button>Our Value</button>
        </div>
        <div>
          <p>Far far away, behind the word mountains, far from the countries Valkalia and Consonantia, there live the blind texts. Separated they live in Bookmarkgrove right at the coast of the Semantics, a large language Ocean.</p>
        </div>
        <div className='happy'>
          <p>Testimonial</p>
          <h3>Happy Clients</h3>
        </div>
        <div>
          <p>Far far away, behind the word mountains, far from the countries Valkalia and Consonantia, there live the blind texts</p>
        </div>
        <div>
          <img src="" alt="" />
          <h3>Roger Scott</h3>
          <p><span>Marketing Manager</span></p>
        </div>
        </div>
      </Layout>
    </div>
  )
}
