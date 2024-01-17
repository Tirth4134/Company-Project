import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
import Link from "next/link";
import React from "react";

interface IProject {
  _id: string;
  title: string;
  heading: string;
  button: string;
  image: string;
  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'project_schedule']{
        _id,
        title,
        heading,
        button,
        image,
    }`;
  const data = await client.fetch(query);
  return data as IProject[];
}

const page = async () => {
  const data = (await getData()) as IProject[];
  console.log(data);
  
  return (
    <div>
      {data.map((item: any) => {
        console.log(item);    
        return (
          <div>
            <div className="container">
              <div className="flex flex-col-reverse lg:flex-row justify-between items-center bg-white-shad-color mx-0 mt-8 xl:mt-[4.5em] sm:px-10 sm:py-20 px-6 esm:px-8 py-12">
                <div className="w-full lg:w-6/12">
                  <h6 className="font-bold leading-[1.25em] tracking-[0.012em] capitalize mb-4 text-lg">
                    {item?.title}
                  </h6>
                  <div className="[&amp;>h4]:font-bold [&amp;>h4]:leading-[1.25em] [&amp;>h4]:tracking-[0.012em] [&amp;>h4]:capitalize [&amp;>h4]:mb-4 text-[1.875em] [&amp;>h4>strong]:text-Cerise-red">
                    {item?.heading}
                  </div>
                  <form>
                    <div className="estimate-form">
                      <input
                        placeholder="Name*"
                        type="string"
                        id="name"
                        name="name"
                        className="block w-full mb-[1.3em] rounded-lg border  p-2 text-black h-12 px-4  text-base border-white-color"
                        value=""
                      />
                      <input
                        placeholder="Email*"
                        type="string"
                        id="email"
                        name="email"
                        className="block w-full rounded-lg border  p-2 text-black h-12 px-4  text-base border-white-color"
                        value=""
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center mt-0 mb-0 mx-0 py-6 xl:py-8">
                      <div className="text-base leading-[1.25em] font-light">
                        Select type of project:
                      </div>
                      <div className="lg:ml-4 lg:mr-0 my-4">
                        <ul className="flex flex-wrap [&amp;>*:nth-child(1)]:ml-0">
                          <li className="relative cursor-pointer m-2 lg:mx-2 my-2">
                            <input
                              name="project_type"
                              type="radio"
                              id="Website"
                              className="absolute invisible cursor-pointer inline-block peer  my-0 inset-x-0"
                              value="Website"
                            />
                            <label className="peer-checked:bg-Cerise-red peer-checked:px-[0.5em] peer-checked:py-[0.25em]  peer-checked:text-white-color hover:bg-red-400 h-10 text-sm cursor-pointer text-[0.875em] font-normal leading-[1.25em] rounded-[0.25em] px-2">
                              Website
                            </label>
                          </li>
                          <li className="relative cursor-pointer m-2 lg:mx-2 my-2">
                            <input
                              name="project_type"
                              type="radio"
                              id="PWA"
                              className="absolute invisible cursor-pointer inline-block peer  my-0 inset-x-0"
                              value="PWA"
                            />
                            <label className="peer-checked:bg-Cerise-red peer-checked:px-[0.5em] peer-checked:py-[0.25em]  peer-checked:text-white-color  hover:bg-red-400  text-sm cursor-pointer text-[0.875em] font-normal leading-[1.25em] rounded-[0.25em] px-2">
                              PWA
                            </label>
                          </li>
                          <li className="relative cursor-pointer m-2 lg:mx-2 my-2">
                            <input
                              name="project_type"
                              type="radio"
                              id="E-commerce"
                              className="absolute invisible cursor-pointer inline-block peer  my-0 inset-x-0"
                              value="E-commerce"
                            />
                            <label className="peer-checked:bg-Cerise-red peer-checked:px-[0.5em] peer-checked:py-[0.25em]  peer-checked:text-white-color  hover:bg-red-400 text-sm cursor-pointer text-[0.875em] font-normal leading-[1.25em] rounded-[0.25em] px-2">
                              E-commerce
                            </label>
                          </li>
                          <li className="relative cursor-pointer m-2 lg:mx-2 my-2">
                            <input
                              name="project_type"
                              type="radio"
                              id="Other"
                              className="absolute invisible cursor-pointer inline-block peer  my-0 inset-x-0"
                              value="Other"
                            />
                            <label className="peer-checked:bg-Cerise-red peer-checked:px-[0.5em] peer-checked:py-[0.25em]  peer-checked:text-white-color  hover:bg-red-400 text-sm cursor-pointer text-[0.875em] font-normal leading-[1.25em] rounded-[0.25em] px-2">
                              Other
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="project-textarea">
                      <textarea
                        name="message"
                        placeholder="How can we help?"
                        className="bg-white-color text-base font-light leading-[2.5em]  rounded-[0.625em]"
                      ></textarea>
                    </div>
                    <div>
                      <div className="block mt-7 flex mb-0 mx-0">
                        <button
                          type="submit"
                          className="disabled:opacity-70 opacity-100 disabled:cursor-not-allowed   rounded-[56px]  contact-submit   text-sm esm:ext-base xl:text-[17px] capitalize font-semibold  text-white-color leading-[1.25em]  bg-dark-pink w-[250px] xl:w-[275px] h-[45px] em:h-[50px] md:h-[55px] xl:h-[60px]"
                        >
                          <div className="flex items-center justify-center">
                            <p className="text-white bg-pink-200 h-7 rounded text-sm esm:text-base xl:text-[17px]  capitalize pb-0 font-semibold" >
                              Hire Jamstack Developer
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="estimate-right mx-auto mb-12 sm:mb-14 md:mb-16 lg:mb-0 max-w-[27.5rem] w-full">
                    <img src={urlFor(item?.image).url()} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
