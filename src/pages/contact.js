import HeroPage from '@/components/HeroPage'
import Layout from '@/components/layout/Layout'
import React from 'react'

export default function contact() {
  return (
    <div>
        <Layout>
          <HeroPage 
          title="Contact"
          urlName="contact"
          />
          <div className='contact content'>
            <h3>Contact Information</h3>
            <div className="contactData">
              <p>Adress: 198 west 21th Street, Suite 721 New Yrok NY 10016</p>
              <p>Phone: <span>+ 1235 2355 98</span></p>
              <p>email: <span>info@yoursite.com</span></p>
              <p>website:<span>yoursite.com</span></p>
            </div>
            <div className='contactForm'>
              <div className='inputs'>
                <input type="text" placeholder='Your Name'/>
                <input type="text" placeholder='Your Email'/>
                <input type="text" placeholder='Subject'/>
                <input type="textarea" placeholder='message' className='message'/>
                <button className='yellowButton'>Send Message</button>
              </div>
              <img src="/img/map.png" alt="" />
            </div>
          </div>
        </Layout>
    </div>
  )
}
