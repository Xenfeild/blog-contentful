import Link from 'next/link'
import React from 'react'

export default function Card({post }) {
    const { featuredImage, title, excerpt} = post.fields
    // console.log(featuredImage.fields)
    const urlImg = featuredImage.fields.file.url
  return (
    <div>
            <img src={urlImg} alt={title} className='max-w-xs' />
            <p className='font-bold'>{title}</p>
            <p>{excerpt}</p>
    </div>
  )
}
