import client from '@/client/sanity.client';
import React from 'react'
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

interface IPrivacy {
    _id: any;
    update: string;
    heading: string;
    description:PortableTextBlock[];
   
  }
  
  async function getData() {
    const query = `*[_type == 'company_privacy']{
          _id,
          update,
          heading,
          description,    
      }`;
    const data = await client.fetch(query);
    return data as IPrivacy[];
  }
  
const page = async() => {
    const data = (await getData()) as IPrivacy[];
    
  return (
    <div>
        {data.map((item :any)=>{
            item);
            
            return(
                <div>
                <div className=' text-center gap-2 ' >
                    <div className=' text-4xl font-bold '>{item?.heading}</div>
                    <p className='text-sm '>{item?.update}</p>
                </div>
                    <div>
                        <PortableText value={item?.description} />
                    </div>
                </div>
            )
    })}</div>
  )
}

export default page