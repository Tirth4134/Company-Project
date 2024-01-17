import client from '@/client/sanity.client';
import { urlFor } from '@/imageBuilder/urlFor';
import { PortableText } from '@portabletext/react';
import React from 'react'
import { PortableTextBlock } from 'sanity';

interface IWhat_build {
    _id: string;
    title: string;
    building_detail:any;
    description: PortableTextBlock[];
    image: string;
  }
  
  async function getData() {
    const query = `*[_type == "what_we_build"]{
          title,
          building_detail,   
        }`;
    const data = await client.fetch(query);
    return data as IWhat_build[];
  }

const What_we_build = async () => {
  const data = (await getData()) as IWhat_build[];
  console.log(data);
  return (
    <div>{data.map((item: any)=>{
      return(
        <div key={item?._id}>
              <h4>{item?.title}</h4>
              <div>
                {item?.building_detail.map((list:any)=>{
                  return(
                    <div>              
                      <div>
                        <PortableText value={list?.description}/>
                      </div>
                      <div>
                        <img src={urlFor(list?.image).url()} width={150} height={100} />
                      </div>
                    </div>

                  )
                })}
              </div>
        </div>
      )
    })}</div>
  )
}



export default What_we_build