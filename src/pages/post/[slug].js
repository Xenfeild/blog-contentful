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
        <HeroPage 
        title={title}
        urlName={`post/${post.fields.slug}`} />
          <main className='content slug'>
            <section className='slugLeft'>
              <img
              src={ featuredImage.fields.file.url}
              alt={title}
              />
              <p className='slugTitle'>{title}</p>
            <div className='slugContent'>     {documentToReactComponents(content)}
            </div>
          </section>
          {/* right side */}

          {/* input search */}
          <section className='slugRight'>
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
                <div className='img_footer flex flex-wrap' >
                  <img src='/img/image_3.jpg' />
                  <div>
                    <p className='text-gray-footer' >Even the all-powerfull</p>
                    <p className='text-gray-footer' >Pointing has no </p>
                    <p className='text-gray-footer' >control about</p>
                    <p className='txt-gray' >oct. 16,2019 admin 19</p>
                </div>
              </div>
            </div>
            <div className='tagCloud'>
              <h3>Tag cloud</h3>
              <button>CAT</button>
              <button>ABSTRACT</button>
              <button>PEOPLE</button>
              <button>PERSON</button>
              <button>MODEL</button>
              <button>DELICIOUS</button>
              <button>DESSERT</button>
              <button>DRINKS</button>
            </div>
            <div className="paragraph">
              <h3>Paragraph</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos porro aliquid suscipit doloremque, sit architecto dolorem minus alias provident odio dolores! Odit cupiditate cum ea porro mollitia? Omnis, officia facilis.</p>
            </div>
          </section>
          {/* bottom */}
          <section className="slugButtom">
            <div className='bottomTag'>
              <button>LIFE</button>
              <button>SPORT</button>
              <button>TECH</button>
              <button>TRAVEL</button>
            </div>
            <div className='topComment flex'>
              <img src="/img/person_1.jpg" alt="" />
              <div className=''>
                <h4>Geroge Washinton</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque soluta possimus porro et debitis animi eum quibusdam delectus incidunt, temporibus illum quae dolor minus asperiores nihil consequatur unde similique.</p>
              </div>
            </div>
            <div className='commentZone'>
              <div className='nbComment'>
                <h3>6 comments</h3>
              </div>
              <div className='comment flex'>
                <img src="/img/person_1.jpg" alt="" />
                <div className=''>
                  <h4>Geroge Washinton</h4>
                  <p className='mt-1 mb-2'>November 43 2019 at 2:21PM</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque soluta possimus porro et debitis animi eum quibusdam delectus incidunt, temporibus illum quae dolor minus asperiores nihil consequatur unde similique.</p>
                  <button>REPLY</button>
                </div>
              </div>
              <div className='comment flex'>
                <img src="/img/person_1.jpg" alt="" />
                <div className=''>
                  <h4>Geroge Washinton</h4>
                  <p className='mt-1 mb-2'>November 43 2019 at 2:21PM</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed itaque soluta possimus porro et debitis animi eum quibusdam delectus incidunt, temporibus illum quae dolor minus asperiores nihil consequatur unde similique.</p>
                  <button>REPLY</button>
                </div>
              </div>
            </div>
            <div className='nbComment'>
              <h3>Leave a comment</h3>
            </div>
            <div className='postComment '>
              <div className='flex flex-col'>
                <label htmlFor="">Name *</label>
                <input type="text" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Email *</label>
                <input type="text" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">Website *</label>
                <input type="text" />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="">message *</label>
                <input type="textarea"  className='message'/>
              </div>
              <button>Post Comment</button>
            </div>


          </section>
        </main>
    </Layout>
  </div>
  );
}

