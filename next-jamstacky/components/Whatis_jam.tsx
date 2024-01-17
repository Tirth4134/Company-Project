import client from '@/client/sanity.client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react'
import { PortableTextBlock } from 'sanity';


interface Ijam{
      _id:'string';
      title:'string';
      description:PortableTextBlock[];
      defination:'string';
      path_image:'string',
      jam_detail:any;
}


async function getData() {
 const query = `*[_type == "what_is_jamstack"]{
    _id,
    jam_detail,
      title,
      defination,
      description,
      "path_image":path_image.asset->url,
 }`;
 const data = await client.fetch(query);
 return data  as Ijam[];
} 

const Whatis_jam = async () => {
  const data = (await getData()) as Ijam[];
  return (
    <div>
        {data?.map((item) =>{
         //  console.log(item?.jam_detail)
          return(
            <div className="container">
   <div className="  [&amp;>h2]:font-medium [&amp;>h2]:leading-[1.5em] [&amp;>h2]:text-dark-blue [&amp;>h2]:text-[28px] sm:[&amp;>h2]:text-[42px] emd:[&amp;>h2]:text-[52px] xl:[&amp;>h2]:text-[60px] [&amp;>h2]:mb-[0.25em] [&amp;>h2]:font-DM [&amp;>h3]:font-medium [&amp;>h3]:leading-[1.5em] [&amp;>h3]:text-dark-blue [&amp;>h3]:text-[3.75em] [&amp;>h3]:mb-[0.25em] [&amp;>h4]:font-medium [&amp;>h4]:leading-[1.5em] [&amp;>h4]:text-dark-blue [&amp;>h4]:text-[3.75em] [&amp;>h4]:mb-[0.25em] [&amp;>h5]:font-medium [&amp;>h5]:leading-[1.5em] [&amp;>h5]:text-dark-blue [&amp;>h5]:text-[3.75em] [&amp;>h5]:mb-[0.25em] [&amp;>h6]:font-medium [&amp;>h6]:leading-[1.5em] [&amp;>h6]:text-dark-blue [&amp;>h6]:text-[3.75em] [&amp;>h6]:mb-[0.25em] [&amp;>p]:text-sm sm:[&amp;>p]:text-base xl:[&amp;>p]:text-lg [&amp;>p]:font-normal [&amp;>p]:leading-[1.75em] [&amp;>p]:tracking-wide [&amp;>p]:text-dark-blue [&amp;>p]:mb-[1.5em] [&amp;>p]:p-0 [&amp;>h2>strong>:nth-child(1)]:text-Cerise-red [&amp;>h2>strong>:nth-child(2)]:text-[#3bafde] [&amp;>p]:font-Inter  [&amp;>p]:opacity-70 [&amp;>h2>strong>:nth-child(3)]:text-[#95f9ed] [&amp;>h2>strong>span]:uppercase [&amp;>img]:my-12 [&amp;>img]:max-w-full md:[&amp;>img]:max-w-[80%] [&amp;>img]:mx-auto">
      <h2 className='text-3xl '>
           {item?.title}
      </h2>
      <div>
        <PortableText value={item?.description} />
      </div>
      <p>
      </p>
     
     
        <Image src={item?.path_image} alt='path_image' width={1366} height={274} />
      <p>
        {item?.defination}
      </p>
          <div>{item?.jam_detail?.jam_title}</div>
      <div className="mt-8 md:mt-16">
            {item?.jam_detail?. map((list:any)=>{
            //   console.log(list?.jam_title)
              return(
                  <div key={list?._id}>

                 
         <ul className=" max-w-full md:max-w-[90%] lg:max-w-[80%] block md:grid grid-cols-[1fr_1fr_1fr] gap-2.5 mx-auto my-0 [&amp;>*:nth-child(1)]:bg-[#00f5c4] [&amp;>*:nth-child(2)]:bg-pumpkin-color [&amp;>*:nth-child(3)]:bg-carissma-color ">
            <li className="flex-[0_0_30%] min-h-auto  md:min-h-[13.5em] mx-[0em] my-0 px-[1.5em] py-[1.125em] rounded-[1em_1em_0_0] mb-[1em] md:mb-[0] last:max-w-full last:text-center last:bg-dark-pink last:min-h-[auto] last:col-[1/span_3] last:mt-[0em] last:mx-[0em] last:my-0 last:px-[1.5em] last:py-[1.5em] last:rounded-[0_0_0.625em_0.625em] [&amp;>h5]:text-[18px] md:[&amp;>h5]:text-[20px] [&amp;>h5]:text-center [&amp;>h5]:mb-[0.5em] [&amp;>h5]:text-dark-blue [&amp;>p]:text-center [&amp;>p]:text-[13px]  [&amp;>p]:pb-[1em] [&amp;>p]:text-[#000000b3] [&amp;>p]:font-medium [&amp;>p]:font-Inter last:[&amp;>h2]:!text-white-color last:[&amp;>h2]:font-bold last:[&amp;>h2]:tracking-wider last:[&amp;>h2]:!m-0 last:[&amp;>h3]:!text-white-color last:[&amp;>h3]:font-bold last:[&amp;>h3]:tracking-wider last:[&amp;>h3]:!m-0 last:[&amp;>h4]:!text-white-color last:[&amp;>h4]:font-bold last:[&amp;>h4]:tracking-wider last:[&amp;>h4]:!m-0 last:[&amp;>h5]:!text-white-color last:[&amp;>h5]:font-bold last:[&amp;>h5]:tracking-wider last:[&amp;>h5]:!m-0 [&amp;>h5]:font-DM last:[&amp;>h5]:!text-[26px] md:last:[&amp;>h5]:!text-[34px] last:[&amp;>h6]:!text-white-color last:[&amp;>h6]:font-bold last:[&amp;>h6]:tracking-wider last:[&amp;>h6]:!m-0 ">
               <h5>
                  {list?.jam_title}
               </h5>
               <p>
                 {list?.jam_description}
               </p>
               <p>
               </p>
            </li>
            {/* <li className="flex-[0_0_30%] min-h-auto  md:min-h-[13.5em] mx-[0em] my-0 px-[1.5em] py-[1.125em] rounded-[1em_1em_0_0] mb-[1em] md:mb-[0] last:max-w-full last:text-center last:bg-dark-pink last:min-h-[auto] last:col-[1/span_3] last:mt-[0em] last:mx-[0em] last:my-0 last:px-[1.5em] last:py-[1.5em] last:rounded-[0_0_0.625em_0.625em] [&amp;>h5]:text-[18px] md:[&amp;>h5]:text-[20px] [&amp;>h5]:text-center [&amp;>h5]:mb-[0.5em] [&amp;>h5]:text-dark-blue [&amp;>p]:text-center [&amp;>p]:text-[13px]  [&amp;>p]:pb-[1em] [&amp;>p]:text-[#000000b3] [&amp;>p]:font-medium [&amp;>p]:font-Inter last:[&amp;>h2]:!text-white-color last:[&amp;>h2]:font-bold last:[&amp;>h2]:tracking-wider last:[&amp;>h2]:!m-0 last:[&amp;>h3]:!text-white-color last:[&amp;>h3]:font-bold last:[&amp;>h3]:tracking-wider last:[&amp;>h3]:!m-0 last:[&amp;>h4]:!text-white-color last:[&amp;>h4]:font-bold last:[&amp;>h4]:tracking-wider last:[&amp;>h4]:!m-0 last:[&amp;>h5]:!text-white-color last:[&amp;>h5]:font-bold last:[&amp;>h5]:tracking-wider last:[&amp;>h5]:!m-0 [&amp;>h5]:font-DM last:[&amp;>h5]:!text-[26px] md:last:[&amp;>h5]:!text-[34px] last:[&amp;>h6]:!text-white-color last:[&amp;>h6]:font-bold last:[&amp;>h6]:tracking-wider last:[&amp;>h6]:!m-0 ">
               <h5>
                  APIs
               </h5>
               <p>
                  All server-side processes or database actions are abstracted into reusable
                  APIs, accessed over HTTP with JavaScript. These can be custom-built or
                  leverage third-party services.
               </p>
               <p>
               </p>
            </li> */}
            {/* <li className="flex-[0_0_30%] min-h-auto  md:min-h-[13.5em] mx-[0em] my-0 px-[1.5em] py-[1.125em] rounded-[1em_1em_0_0] mb-[1em] md:mb-[0] last:max-w-full last:text-center last:bg-dark-pink last:min-h-[auto] last:col-[1/span_3] last:mt-[0em] last:mx-[0em] last:my-0 last:px-[1.5em] last:py-[1.5em] last:rounded-[0_0_0.625em_0.625em] [&amp;>h5]:text-[18px] md:[&amp;>h5]:text-[20px] [&amp;>h5]:text-center [&amp;>h5]:mb-[0.5em] [&amp;>h5]:text-dark-blue [&amp;>p]:text-center [&amp;>p]:text-[13px]  [&amp;>p]:pb-[1em] [&amp;>p]:text-[#000000b3] [&amp;>p]:font-medium [&amp;>p]:font-Inter last:[&amp;>h2]:!text-white-color last:[&amp;>h2]:font-bold last:[&amp;>h2]:tracking-wider last:[&amp;>h2]:!m-0 last:[&amp;>h3]:!text-white-color last:[&amp;>h3]:font-bold last:[&amp;>h3]:tracking-wider last:[&amp;>h3]:!m-0 last:[&amp;>h4]:!text-white-color last:[&amp;>h4]:font-bold last:[&amp;>h4]:tracking-wider last:[&amp;>h4]:!m-0 last:[&amp;>h5]:!text-white-color last:[&amp;>h5]:font-bold last:[&amp;>h5]:tracking-wider last:[&amp;>h5]:!m-0 [&amp;>h5]:font-DM last:[&amp;>h5]:!text-[26px] md:last:[&amp;>h5]:!text-[34px] last:[&amp;>h6]:!text-white-color last:[&amp;>h6]:font-bold last:[&amp;>h6]:tracking-wider last:[&amp;>h6]:!m-0 ">
               <h5>
                  Markup
               </h5>
               <p>
                  Templated markup should be pre-built at deploy time, usually using a site
                  generator like GatsbyJS, Nuxt.js, or Hugo for content sites, or a build
                  tool like Webpack, or ParcelJS for web apps.
               </p>
               <p>
               </p>
            </li> */}
            {/* <li className="flex-[0_0_30%] min-h-auto  md:min-h-[13.5em] mx-[0em] my-0 px-[1.5em] py-[1.125em] rounded-[1em_1em_0_0] mb-[1em] md:mb-[0] last:max-w-full last:text-center last:bg-dark-pink last:min-h-[auto] last:col-[1/span_3] last:mt-[0em] last:mx-[0em] last:my-0 last:px-[1.5em] last:py-[1.5em] last:rounded-[0_0_0.625em_0.625em] [&amp;>h5]:text-[18px] md:[&amp;>h5]:text-[20px] [&amp;>h5]:text-center [&amp;>h5]:mb-[0.5em] [&amp;>h5]:text-dark-blue [&amp;>p]:text-center [&amp;>p]:text-[13px]  [&amp;>p]:pb-[1em] [&amp;>p]:text-[#000000b3] [&amp;>p]:font-medium [&amp;>p]:font-Inter last:[&amp;>h2]:!text-white-color last:[&amp;>h2]:font-bold last:[&amp;>h2]:tracking-wider last:[&amp;>h2]:!m-0 last:[&amp;>h3]:!text-white-color last:[&amp;>h3]:font-bold last:[&amp;>h3]:tracking-wider last:[&amp;>h3]:!m-0 last:[&amp;>h4]:!text-white-color last:[&amp;>h4]:font-bold last:[&amp;>h4]:tracking-wider last:[&amp;>h4]:!m-0 last:[&amp;>h5]:!text-white-color last:[&amp;>h5]:font-bold last:[&amp;>h5]:tracking-wider last:[&amp;>h5]:!m-0 [&amp;>h5]:font-DM last:[&amp;>h5]:!text-[26px] md:last:[&amp;>h5]:!text-[34px] last:[&amp;>h6]:!text-white-color last:[&amp;>h6]:font-bold last:[&amp;>h6]:tracking-wider last:[&amp;>h6]:!m-0 ">
               <h5>
                  JAM
               </h5>
            </li> */}
         </ul>
         </div>
              )
            })}
      </div>
   </div>
</div>
          )
        })}
    </div>
  )
}

export default Whatis_jam