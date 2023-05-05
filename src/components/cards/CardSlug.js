import React from 'react'

export default function CardSlug({post }) {
    const { featuredImage, title, excerpt} = post.fields
    // console.log(featuredImage.fields)
    const urlImg = featuredImage.fields.file.url
  return (
    <div className='card'>
            <img src={urlImg} alt={title} className='max-w-xs cardImg' />
            <p className='font-bold'>{title}</p>
            <p>{excerpt}</p>
    </div>
  )
}