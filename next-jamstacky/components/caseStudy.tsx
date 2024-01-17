import client from "@/client/sanity.client";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/imageBuilder/urlFor";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";

interface ICaseStudy {
  _id: string;
  heading: string;
  core_web_title: string;
  volz_blog_title: PortableTextBlock[];
  
  // description: string;
  // profile_image: string;
  image:string;
  profile_image: {
      alt: string,
      image: string,
    };
  graph_image: string;
  alt: string;
}
       /* i think my schema is not update beacause, currntly my schema image name is profile_image but is data is not shown and then i set image its working */
async function getData() {
  const query = `*[_type == 'case_study']{
    _id,
    heading,
    core_web_title,
    volz_blog_title,
    
    "profile_image":profile_image.asset->url,
    "graph_image":graph_image.asset->url,
  }`;
  const data = await client.fetch(query);
  return data as ICaseStudy[];
}

const CaseStudy = async () => {
  const data = (await getData()) as ICaseStudy[];
  // console.log(data);
  return (
   
    
      <div>
        <div className="container">
          {data?.map((item)=>{
            return(  
          <div key={item?._id}>
           
              <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px] ">
                <p className="after:absolute after:bg-light-blue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-light-blue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-light-blue  tracking-wider relative inline-block mb-[1em] px-[2em] md:px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
               
                </p>
                <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-[#110462]">
                  {/* {title_subtitle?.sub_title} */} {item?.heading}
                </p>
              </div>
          
            <div className="block md:flex  p-0 font-DM">
              <div className="w-full md:w-[40%] max-w-full md:max-w-[35em] xl:max-w-[30em]">
                
                  <div>
                    <Image
                      src={item?.profile_image}
                      height={350}
                      width={350}
                      alt="image"
                      // priority
                    />
                  </div>
               
                <div className="mt-[1.5em] mb-0 mx-0">
                  <h1 className="text-[17px] sm:text-[19px] xl:text-[24px] font-normal leading-[1.5em] text-[#222549] font-DM">
                    {item?.core_web_title}
                  </h1>
                  <div>
                    <ul className="block mt-[1.5em]">
                    <Image
                      src={item?.graph_image}
                      height={350}
                      width={350}
                      alt="image"
                      // priority
                    />
                        {/* <li key={index} className="mt-0 mb-[2em] mx-0">
                          <label className="text-[1em] font-normal leading-[1em] text-[#5d63a9]">
                            {i?.label}
                          </label>
                          <div className="relative z-0 block [&>*>div]:absolute [&>*>div]:w-auto [&>*>div]:left-0 ">
                            <ProgressBar progress={100} bgcolor="#E53A36" />
                            <ProgressBar progress={90} bgcolor="#FB8C00" />
                            <ProgressBar progress={i?.value} />
                          </div>
                        </li> */}
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="w-full md:w-[60%] pl-[0] md:pl-[5.3125em] [&>h2]:font-medium [&>h2]:leading-[1.5em] [&>h2]:text-[#110462] [&>h2]:mb-[1em] mt-[3em] sm:mt-[5em] md:mt-[3em]
                [&>h3]:font-medium [&>h3]:leading-[1.5em] [&>h3]:text-[#110462] [&>h3]:mb-[1em] 
                [&>h4]:font-medium [&>h4]:leading-[1.5em] [&>h4]:text-[#110462] [&>h4]:mb-[1em] 
                [&>h5]:font-medium [&>h5]:leading-[1.5em] [&>h5]:text-[#110462] [&>h5]:mb-[1em] [&>h5]:text-[17px] sm:[&>h5]:text-[20px]  xl:[&>h5]:text-[24px] [&>h5]:font-DM
                [&>h6]:font-medium [&>h6]:leading-[1.5em] [&>h6]:text-[#110462] [&>h6]:mb-[1em] 
                [&>p]:text-[16px]  sm:[&>p]:text-[20px] lg:[&>p]:text-[24px] xl:[&>p]:text-[28px]  [&>p]:font-normal [&>p]:leading-[24px] em:[&>p]:leading-[28px] sm:[&>p]:leading-[35px] lg:[&>p]:leading-[40px]  [&>p]:text-[#222549]  [&>p]:mb-[0.5em]  [&>p]:p-0
                [&>p>em]:block [&>p>em]:text-black-color [&>p>em]:text-[16px] sm:[&>p>em]:text-[20px] lg:[&>p>em]:text-[22px] [&>p>em]:leading-[1.5em] [&>p>em]:mt-[2em] xl:[&>p>em]:mt-[4em] [&>p>em]:mb-[1em] [&>p>em]:mx-0
                [&>p>em>span]:text-pink-600 [&>a]:px-[1.8em] lg:[&>a]:px-[2.5em] [&>a]:py-[0.8em] lg:[&>a]:py-[1em]  hover:[&>a]:bg-dark-blue  [&>a]:text-[#fff] [&>a]:hover:text-[#fff]  [&>a]:text-[12.175px] sm:[&>a]:text-[14.175px] xl:[&>a]:text-[18px]
              "
              >
                <PortableText value={item?.volz_blog_title} />
              </div>
            </div>
          </div>
          )
        })}
        </div>
      </div>
   
  );
};

export default CaseStudy;
