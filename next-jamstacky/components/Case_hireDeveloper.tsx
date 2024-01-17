import client from '@/client/sanity.client';
import { urlFor } from '@/imageBuilder/urlFor';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import React from 'react'
import { PortableTextBlock } from 'sanity';

interface IDeveloper{
  _id:string;
  heading:string;
  description:PortableTextBlock[];
  button:string;
  image:string;
  label:any;
  slug:any;

}


async function getData(){
  const query =`*[_type == 'Case_hire_developer']{
    _id,
    heading,
    description,
    button,
    image,
  }`
  const data  =  await client.fetch(query);
  return data as IDeveloper[];
}


const Case_hireDeveloper = async () => {
    const data = (await getData()) as IDeveloper[];
  return (
    <div>{data.map((item: any)=>{
      console.log(item);
      
      return(
        <div>
              <div>
                  {item?.heading}
              </div>
              <div>
                <PortableText value={item?.description} />
              </div>
              <Link href={item?.button?.slug?.current} className='bg-red-200 rounded '>
                  {item?.button?.label}
              </Link>
              <div>
                <img src={urlFor(item?.image).url()}  width={300} height={200} alt='image'/>
              </div>
        </div>
      )
    })}</div>
  )
}

export default Case_hireDeveloper