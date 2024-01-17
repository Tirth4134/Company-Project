import client from '@/client/sanity.client';
import { urlFor } from '@/imageBuilder/urlFor';
import { PortableText } from '@portabletext/react';
import React from 'react'
import { PortableTextBlock } from 'sanity';

interface Icompare {
    _id: string;
    title: string;
    description: PortableTextBlock[];
    image: string;
   
  }
  
  async function getData() {
    const query = `*[_type == 'web_tool_and_have_fun']{
            _id,
            title,
            description,
            image,
        }`;
    const data = await client.fetch(query);
    return data as Icompare[];
  }


const Compare_yourtool_home = async() => {
    const data = (await getData()) as Icompare[];
    console.log(data);
    
  return (
    <div>
      {data.map((item)=>{
        return(
          <div>
            
    <div className="max-w-[1220px] mx-auto py-[2em] md:py-[2.6875em] px-[2em] md:px-[3.5em] rounded-[0.625em] block md:flex justify-between align-center em:text-left items-center secondary bg-comparision-gradient rounded-[0.625em]">
        <div className="[&amp;>div>h5]:text-white [&amp;>div>h5]:text-center em:[&amp;>div>h5]:text-left [&amp;>h5]:text-[19px] sm:[&amp;:h5]:text-[21px] xl:[&amp;>h5]:text-[24px]  [&amp;>p]:font-DM  [&amp;>p]:text-white-color [&amp;>p]:text-sm xl:[&amp;>p]:text-base [&amp;>p]:text-center em:[&amp;>p]:text-left [&amp;>a]:rounded-[3em] [&amp;>a]:text-sm xl:[&amp;>a]:text-base [&amp;>a]:font-semibold hover:[&amp;>a]:bg-white hover:[&amp;>a]:text-blue [&amp;>a]:shadow-hire-btn [&amp;>a]:py-4 esm:[&amp;>a]:py-[1.125em] [&amp;>a]:px-4 lsm:[&amp;>a]:px-[1.8em] esm:[&amp;>a]:px-10 w-full md:w-3/4 xl:pr-10 !w-full md:!w-[56%]">
            <h5 className="capitalize font-DM !text-[1.875em] mb-2 leading-tight font-medium text-white-color  !text-[2.2640625em] sm:!text-[2.515625em] xl:!text-[2.875em] font-bold leading-tight">
                {item?.title}
            </h5>
            <div className="max-w-full md:max-w-[74%]  [&amp;>p]:text-[1em]  [&amp;>p>span]:text-dark-pink [&amp;>a]:mt-[1em]  [&amp;>a]:font-semibold hover:[&amp;>a]:text-white-color hover:[&amp;>a]:bg-btn-hover-pink [&amp;>a]:rounded-[0.625em] [&amp;>a]:px-[1.57em] [&amp;>a]:py-[1em] [&amp;>a]:text-sm !max-w-full  !max-w-full md:!max-w-[75%] text-base leading-[1.3em] [&amp;>p]:text-white-color">
                <p>
                   <PortableText value={item?.description} />
                </p>
            </div>
        </div>
        <div className="!mx-auto lg:ml-auto  hidden md:flex justify-center md:justify-end pt-12 md:pt-[0] [&amp;>img]:max-w-[90%] [&amp;>img]:ml-auto [&amp;>img]:mr-auto lg:[&amp;>img]:mr-0 [&amp;>img]:h-[335px]">
            <img src={urlFor(item?.image).url()} width={200} height={250} alt='image'  />
        </div>
    </div>
</div>
          
        )
      })}
    </div>
  )
}

export default Compare_yourtool_home