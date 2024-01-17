import client from '@/client/sanity.client';
import { urlFor } from '@/imageBuilder/urlFor';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import React from 'react'
import { PortableTextBlock } from 'sanity';


interface Istudies{
    _id:string;
    title:string;
    case_studies_list:any;
    image:string;
    list_detail:PortableTextBlock[];
    button:any;
    label:any;
    slug:any;

}


async function getData(){
    const query = `*[_type == 'our_studies']{
        _id,
        title,
        case_studies_list,
    }`
    const data = await client.fetch(query);
    return data as Istudies[];
    
}




const Ourstudies = async () => {
    const data = (await getData()) as Istudies[];
  return (
    <div>{data.map((item)=>{
        return(
            <div className=' bg-yellow-200 ' >
                <div>{item?.title}</div>
                <div className='grid grid-cols-2'>
                    {item?.case_studies_list?.map((list :any)=>{
                        return(
                            <div>
                                <div>
                                    <img  src={urlFor(list?.image).url()} width={200} height={250} alt='image' />
                                </div>
                                <div >
                                <p>
                                    <PortableText  value={list?.list_detail} />
                                </p>
                                <Link href={list?.button?.slug?.current} className='bg-red-400 rounded'>
                                        {list?.button?.label}
                                </Link>
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

export default Ourstudies