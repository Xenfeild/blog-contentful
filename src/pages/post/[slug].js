import React from 'react'
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '@/components/layout/Layout';
import HeroPage from '@/components/HeroPage';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CardSlug from '@/components/cards/CardSlug';
import Card from '@/components/Card';

const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


//2.generere ou recupperrer ts les slug de mes articles

export  async function getStaticPaths() {
//a-recupere les posts ds le contentful
const res = await client.getEntries({
  content_type: "escciBlog",
 

});

//b- recuperes les slug des posts
const slugs = res.items.map((slug) => {
  return {
    params: { slug: slug.fields.slug },
  };
});

//c-renvoie tous les slugs ds path (chemin //route)
return {
  paths: slugs,
  fallback: false // tous les slug qui ne st pas ds mon path => page 404
};
}


// 3- recuperre data du post en fonction du slug
export async function getStaticProps({ params }) {
  console.log("params:", params);
  //A.Recupere la data lié au slug

  const res = await client.getEntries({
    content_type: "escciBlog",
    "fields.slug": params.slug
  });

  // b-je stock la data du post ds une variables
  const post = res.items;

  return {
    props: {
      post: post[0],
    }
  }
}

export default function Index({ post }) {
  console.log("post:", post);
  const { title, content, featuredImage } = post.fields;
  return (
    <div>
      <Layout>
        <HeroPage title={title} />
          <div className='content slug'>
            <div>
              <img
              src={ featuredImage.fields.file.url}
              alt={title}
              />
              <p className='slugTitle'>{title}</p>
            <div className='slugContent'>     {documentToReactComponents(content)}
            </div>
          </div>
          {/* right side */}

          {/* input search */}
          <div>
            <div className="search">
              <input type="textarea" placeholder='Type a keyword and hit enter'/>
            </div>
            {/* categories list */}
            <div className='categories'>
              <h3 className='font-bold'>Categories</h3>
              <div className='flex justify-between align-center h-7'>
                <p>Illustration</p>
                <MdOutlineKeyboardArrowRight/>
              </div>
              <hr />
              <div className='flex justify-between align-center h-7'>
                <p>Branding</p>
                <MdOutlineKeyboardArrowRight/>
              </div>
              <hr />
              <div className='flex justify-between align-center h-7'>
                <p>Application</p>
                <MdOutlineKeyboardArrowRight/>
              </div>
              <hr />
              <div className='flex justify-between align-center h-7'>
                <p>Design</p>
                <MdOutlineKeyboardArrowRight/>
              </div>
              <hr />
              <div className='flex justify-between align-center h-7'>
                <p>Marketing</p>
                <MdOutlineKeyboardArrowRight/>
              </div>
            </div>
            {/* recent blog link */}
              <div className='recentBlog'>
                <h3>Recent Blog</h3>
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
          </div>
          {/* bottom */}
          <div className="">

          </div>
        </div>
    </Layout>
  </div>
  );
}

