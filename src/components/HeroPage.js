import React from 'react'


export default function HeroPage(page) {
  return (
    <div className='heroPage'>
        <div className='content'>
            <div className=' '>
                <h2>{page.title}</h2>
                <div className='breadcrumb'>
                  <a href="/"><p>Home/ </p></a>
                  <a href={`/${page.urlName}`}><p>{page.title}</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}
