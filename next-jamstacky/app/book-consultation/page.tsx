import client from '@/client/sanity.client';
import { urlFor } from '@/imageBuilder/urlFor';
import { PortableText } from '@portabletext/react';
import React from 'react'
import { PortableTextBlock } from 'sanity';

interface Imetting{
    _id:string;
    title:PortableTextBlock[];
    image:string;
}

async function getData(){
    const query = `*[_type =='book_metting']{
        title,
        image,
    }`
   const data = await client.fetch(query);
   return data as Imetting[]; 
};

const page = async() => {
    const data = (await getData()) as Imetting[];
  console.log(data);
   
  return (
    <div className='text-center text-2xl '>
        {data.map((item: any )=>{
            return(
                <div>
                    <div className='  '>
                        <PortableText value={item?.title} />
                    </div >
                    <img  className=' text-center   rounded ' src={urlFor(item?.image).url()} width={1000} height={1000} alt='image' />
                </div>
            )
        })}
    </div>
  )
}

export default page;