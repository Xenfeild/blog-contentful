import React from 'react'

export default function CardFooter() {
    const { featuredImage, title, excerpt} = post.fields
    const urlImg = featuredImage.fields.file.url
  return (
    <div>
            <img src={urlImg} alt={title} className='max-w-xs cardImg' />
            <p className='font-bold'>{title}</p>
            <p>{excerpt}</p>
    </div>
  )
}
