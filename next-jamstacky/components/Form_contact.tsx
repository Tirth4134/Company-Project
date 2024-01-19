import client from '@/client/sanity.client';
import React from 'react'
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from '@/imageBuilder/urlFor';


interface Iform {
    _id: string; 
    send_message: PortableTextBlock[];
    image: string;
  }
  
  async function getData() {
    const query = `*[_type == 'form_fillup']{
        _id,
        send_message,
        image,
    }`;
    const data = await client.fetch(query);
    return data as Iform[];
  }
  



const Form_contact = async () => {
    const data = (await getData()) as Iform[];
  return (
    <div>{data.map((item:any)=>{
        return(
               <div>
                        <div className="container">
    <div className="contactus-form-inner bg-dark-blue rounded-lg px-[1.5em] sm:px-[2.5em] pt-[1.5em] sm:pt-[2.5em] pb-[4em] sm:pb-[5em]">
        <div className="mb-[2.5em] max-w-full em:max-w-[75%] [&amp;>div>h5]:mb-[0] [&amp;>div>h5]:text-white-color [&amp;>div>h5]:text-left [&amp;>div>h5]:font-medium [&amp;>div>h5]:text-[21px] xl:[&amp;>div>h5]:text-2xl [&amp;>p]:text-white-color  [&amp;>p]:opacity-70 [&amp;>p]:text-sm xl:[&amp;>p]:text-base [&amp;>p]:mt-[0.97em]  [&amp;>p]:text-left">
           <PortableText value={item?.send_message} />
        </div>
        <form>
            <input name="request_type" value="contact-us-project" />
            <div className="contactus-form-content block lg:flex">
                <div className="contactus-form w-full lg:w-[50%]">
                    <div className="contact-form-inner block sm:flex ">
                        <div className="form-left w-full sm:w-[50%]">
                            <div className="form-row company-name mb-[1em]">
                                <label className="form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white-color block">
                                    Company Name:
                                </label>
                                <div className="form-input relative">
                                    <input type="string" id="companyName" name="companyName" placeholder="Company Name"
                                    className="w-full sm:w-[80%] py-[0.75em] px-[1em] rounded-lg  pl-[2.75em] border-[1px] border-gray-300"
                                    value="" />
                                    <div>
                                        <img src='/input logo.webp'  />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row name mb-[1em]">
                                <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white-color block">
                                    Name:
                                </label>
                                <div className="form-input relative">
                                    <input type="string" id="name" name="name" placeholder="Name" className="w-full sm:w-[80%] py-[0.75em] px-[1em] rounded-lg  pl-[2.75em]   border-[1px] border-gray-300"
                                    value="" />
                                    <div>
                                    <img src='/input logo.webp'  />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row email mb-[1em]">
                                <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white-color block">
                                    E-mail address:
                                </label>
                                <div className="form-input relative">
                                    <input type="string" id="email" name="email" placeholder="Email" className="w-full sm:w-[80%] py-[0.75em] px-[1em] rounded-lg  pl-[2.75em]  border-[1px] border-gray-300"
                                    value="" />
                                    <div>
                                        {/* <img alt="" loading="lazy" width="17" height="8" decoding="async" data-nimg="1"
                                        className="w-[16px] h-[10px] absolute top-[16px] xl:top-[20px] left-[15px]"
                                        style="color:transparent" srcset="/_next/image/?url=%2Fcontact-input-image3.png&amp;w=32&amp;q=75 1x, /_next/image/?url=%2Fcontact-input-image3.png&amp;w=48&amp;q=75 2x"
                                        src="/_next/image/?url=%2Fcontact-input-image3.png&amp;w=48&amp;q=75"> */}
                                    </div>
                                </div>
                            </div>
                            <div className=" mb-[1em]">
                                <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white-color block">
                                    Phone Number:
                                </label>
                                <div className="form-input relative">
                                    <input type="string" id="phone_number" name="phone_number" placeholder="Phone no"
                                    className="!w-full sm:!w-[80%] py-[0.75em] px-[1em] !rounded-lg  !pl-[2.75em] !bg-white-color  border-[1px] border-gray-300"
                                    value=""/>
                                    <div>
                                        {/* <img alt="" loading="lazy" width="13" height="13" decoding="async" data-nimg="1"
                                        className="w-[16px] h-[14px] absolute top-[14px] xl:top-[17px] left-[15px]"
                                        style="color:transparent" srcset="/_next/image/?url=%2Fcontact-input-image4.png&amp;w=16&amp;q=75 1x, /_next/image/?url=%2Fcontact-input-image4.png&amp;w=32&amp;q=75 2x"
                                        src="/_next/image/?url=%2Fcontact-input-image4.png&amp;w=32&amp;q=75"> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-right w-full sm:w-[50%]">
                            <div className="form-row mb-[1em]">
                                <label className="form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white-color block">
                                    Enter your message here:
                                </label>
                                <div className="form-input">
                                    <textarea name="message" className="bg-white-color py-[0.5em] px-[1em] rounded-lg h-full min-h-[9em] lg:min-h-[20em] w-[100%] lg:w-[80%]">
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-services mt-[2em]">
                        <h6 className="text-white-color font-Mont font-normal text-[1.125em]">
                            Services:
                        </h6>
                        <div className="contact-services-navbar my-[1em]">
                            <ul className="flex items-center flex-wrap sm:flex-nowrap gap-x-[0rem] gap-y-[0.65rem]">
                                <li className="mr-[0.7em] mb-[0.7em] relative">
                                    <input name="project_type" type="radio" id="Web Design" className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                                     value="Web Design"/>
                                    <label className="peer-checked:bg-Cerise-red text-white-color border-[0.0625em] border-dark-pink rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] ">
                                        Web Design
                                    </label>
                                </li>
                                <li className="mr-[0.7em] mb-[0.7em] relative">
                                    <input name="project_type" type="radio" id="Web Development" className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                                    value="Web Development" />
                                    <label  className="peer-checked:bg-Cerise-red text-white-color border-[0.0625em] border-dark-pink rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] ">
                                        Web Development
                                    </label>
                                </li>
                                <li className="mr-[0.7em] mb-[0.7em] relative">
                                    <input name="project_type" type="radio" id="Digital Marketing" className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                                    value="Digital Marketing" />
                                    <label  className="peer-checked:bg-Cerise-red text-white-color border-[0.0625em] border-dark-pink rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] ">
                                        Digital Marketing
                                    </label>
                                </li>
                                <li className="mr-[0.7em] mb-[0.7em] relative">
                                    <input name="project_type" type="radio" id="Other" className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                                    value="Other" />
                                    <label  className="peer-checked:bg-Cerise-red text-white-color border-[0.0625em] border-dark-pink rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] ">
                                        Other
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="min-h-[6em] esm:min-h-[4.5em] my-[0.5em]">
                            <div className="contact-termscondition  flex items-baseline">
                                <input id="consent" name="consent" type="checkbox" className="border-[white] flex items-center justify-center absolute w-[20px] h-[20px] focus:outline-none z-20  peer mt-0 lg:mt-1 checked:bg-transparent checked:after:opacity-100 after:content-['✓'] after:block after:text-white-color after:opacity-0 after:absolute bg-white bg-contain bg-center bg-no-repeat align-center transition-all border border-solid   float-left  cursor-pointer appearance-none checked:from-gray-900 checked:to-slate-800 rounded-[3px] ease-soft" />
                                <label  className="cursor-pointer">
                                    <div className="[&amp;>p]:font-Mont [&amp;>p]:text-[10.5px] xl:[&amp;>p]:text-xs [&amp;>p]:text-white-color [&amp;>p]:opacity-70 [&amp;>p]:pl-[3em]">
                                        <p>
                                               I have read the privacy policy and understand how you use and protect
                                            the information that we provide to you.*
                                        </p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <button type="submit"  className="disabled:opacity-70 opacity-100 disabled:cursor-not-allowed     contact-submit  text-base capitalize rounded-lg font-normal  text-white-color leading-[1.25em]  bg-dark-pink w-[134px] h-[40px]">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactus-personImg  flex-col-reverse em:flex-row-reverse sm:flex-row flex lg:block justify-between relative w-full md:w-[80%] lg:w-[50%] mx-auto mt-[3em] sm:mt-[5em] lg:mt-0">
                    <img  src={urlFor(item?.image).url()} width={500} height={600} alt='image' />
                </div>
            </div>
        </form>
    </div>
</div>
               </div> 
        )
    })}</div>
  )
}

export default Form_contact