import React from 'react'


export default function HeroPage(page) {
  return (
    <div className='heroPage'>
        <div className='content'>
            <div className='max-w-[600px] '>
                <h2>{page.title}</h2>
                <div className='beadcrump'>
                  <a href="/">Home</a>
                  <a href=""></a>
                </div>
            </div>
        </div>
    </div>
  )
}
