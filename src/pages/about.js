import HeroPage from '@/components/HeroPage'
import Layout from '@/components/layout/Layout'
import React from 'react'

export default function About() {
  return (
    <div>
      <Layout>
        <HeroPage title="About"/>
          <div className='content justify-center about'>
            {/* <div className='play'>
                <img src="/img/play.png" alt="" />
              </div> */}
            <div className="aboutLeft">
              <img src="/img/img_about.jpg" alt="" />
            </div>
              <div className="aboutRight">
                <div>
                  <p><span className='spanGrey'>Welcome to Readit</span></p>
                  <h3>We give you the best articles you want.</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonatia</p>
                </div>
                <div className='aboutButton'>
                  <button className='yellowButton'>Our Mission</button>
                  <button>Our Vision</button>
                  <button>Our Value</button>
                </div>
                <div className='aboutTextBloc'>
                  <p>Far far away, behind the word mountains, far from the countries Valkalia and Consonantia, there live the blind texts. Separated they live in Bookmarkgrove right at the coast of the Semantics, a large language Ocean.</p>
                </div>
              </div>
              <div className='happy'>
                <p>Testimonial</p>
                <h3>Happy Clients</h3>
              </div>
              <div className="managerDiv">
              <div className='rogerScott2'>
                <p>Far far away, behind the word mountains, far from the countries Valkalia and Consonantia, there live the blind texts</p>      
                <div className='flex justify-around'>
                  <div className='rogerScottPhoto'>
                  <img src="/img/person_2.jpg" alt="" className='border-around'/>
                  </div>
                  <div>
                    <h3>Roger Scott</h3>
                    <p><span>Marketing Manager</span></p>
                  </div>
                </div>
              </div>
              <div className='rogerScott'>
                <p>Far far away, behind the word mountains, far from the countries Valkalia and Consonantia, there live the blind texts</p>      
                <div className='flex justify-around'>
                  <div className='rogerScottPhoto'>
                  <img src="/img/person_1.jpg" alt="" className='border-around'/>
                  </div>
                  <div>
                    <h3>Roger Scott</h3>
                    <p><span>Marketing Manager</span></p>
                  </div>
                </div>
              </div>
              <div className='rogerScott2'>
                <p>Far far away, behind the word mountains, far from the countries Valkalia and Consonantia, there live the blind texts</p>      
                <div className='flex justify-around'>
                  <div className='rogerScottPhoto'>
                  <img src="/img/person_2.jpg" alt="" className='border-around'/>
                  </div>
                  <div>
                    <h3>Roger Scott</h3>
                    <p><span>Marketing Manager</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </div>
  )
}
