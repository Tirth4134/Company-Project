import client from "@/client/sanity.client";
import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/imageBuilder/urlFor";

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
    <div>
      {data.map((item: any) => {
        return (
          <div className="px-10">
            <div className="container">
              <div className="contactus-form-inner bg-blue rounded-lg px-[1.5em] sm:px-[2.5em] pt-[1.5em] sm:pt-[2.5em] pb-[4em] sm:pb-[5em]">
                <div className="mb-[2.5em] max-w-full em:max-w-[75%] [&>h3]:mb-[0] text-white [&>h3]:text-left [&>h3]:font-medium [&>h3]:text-[21px] xl:[&>h3]:text-2xl [&>p]:text-white  [&>p]:opacity-70 [&>p]:text-sm xl:[&>p]:text-base [&>p]:mt-[0.97em]  [&>p]:text-left">
                  <PortableText value={item?.send_message} />
                </div>
                <form>
                  <div className="contactus-form-content block lg:flex">
                    <div className="contactus-form w-full lg:w-[50%]">
                      <div className="contact-form-inner block sm:flex ">
                        <div className="form-left w-full sm:w-[50%]">
                          <div className="form-row company-name mb-[1em]">
                            <label className="form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white block">
                              Company Name:
                            </label>
                            <div className="form-input relative">
                              <input
                                type="string"
                                id="companyName"
                                name="companyName"
                                placeholder="Company Name"
                                className="w-full sm:w-[80%] py-[0.75em] px-[1em] rounded-lg  pl-[2.75em] border-[1px] border-gray-300"
                                value=""
                              />
                              <div>
                                <img
                                  src="/input logo.webp"
                                  className="w-[16px] h-[14px] absolute top-[14px] xl:top-[17px] left-[15px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-row name mb-[1em]">
                            <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white block">
                              Name:
                            </label>
                            <div className="form-input relative">
                              <input
                                type="string"
                                id="name"
                                name="name"
                                placeholder="Name"
                                className="w-full sm:w-[80%] py-[0.75em] px-[1em] rounded-lg  pl-[2.75em]   border-[1px] border-gray-300"
                                value=""
                              />
                              <div>
                                <img
                                  src="/input logo.webp"
                                  className="w-[16px] h-[14px] absolute top-[14px] xl:top-[17px] left-[15px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-row email mb-[1em]">
                            <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white block">
                              E-mail address:
                            </label>
                            <div className="form-input relative">
                              <input
                                type="string"
                                id="email"
                                name="email"
                                placeholder="Email"
                                className="w-full sm:w-[80%] py-[0.75em] px-[1em] rounded-lg  pl-[2.75em]  border-[1px] border-gray-300"
                                value=""
                              />
                              <div>
                                <img
                                  src="/message logo.webp"
                                  className="w-[16px] h-[14px] absolute top-[14px] xl:top-[17px] left-[15px]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className=" mb-[1em]">
                            <label className="form-label form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white block">
                              Phone Number:
                            </label>
                            <div className="form-input relative">
                              <input
                                type="string"
                                id="phone_number"
                                name="phone_number"
                                placeholder="Phone no"
                                className="!w-full sm:!w-[80%] py-[0.75em] px-[1em] !rounded-lg  !pl-[2.75em] !bg-white-color  border-[1px] border-gray-300"
                                value=""
                              />
                              <div>
                                <img
                                  src="/call logo.webp"
                                  className="w-[16px] h-[14px] absolute top-[14px] xl:top-[17px] left-[15px]"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-right w-full sm:w-[50%]">
                          <div className="form-row mb-[1em]">
                            <label className="form-label text-xs xl:text-sm font-normal font-Mont mb-[0.5em] text-white block">
                              Enter your message here:
                            </label>
                            <div className="form-input">
                              <textarea
                                name="message"
                                className="bg-white-color py-[0.5em] px-[1em] rounded-lg h-full min-h-[9em] lg:min-h-[20em] w-[100%] lg:w-[80%]"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="contact-services mt-[2em]">
                        <h6 className="text-white font-Mont font-normal text-[1.125em]">
                          Services:
                        </h6>
                        <div className="contact-services-navbar my-[1em]">
                          <ul className="flex items-center flex-wrap sm:flex-nowrap gap-x-[0rem] gap-y-[0.65rem]">
                            <li className="mr-[0.7em] mb-[0.7em] relative">
                              <input
                                name="project_type"
                                type="radio"
                                id="Web Design"
                                className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                                value="Web Design"
                              />
                              <label className="bg-pink-700 text-white border-[0.0625em] border-pink-700 rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] ">
                                Web Design
                              </label>
                            </li>
                            <li className="mr-[0.7em] mb-[0.7em] relative">
                              <input
                                name="project_type"
                                type="radio"
                                id="Web Development"
                                className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                                value="Web Development"
                              />
                              <label className="peer-checked:bg-red-700 text-white border-[0.0625em] border-pink-700 rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] ">
                                Web Development
                              </label>
                            </li>
                            <li className="mr-[0.7em] mb-[0.7em] relative">
                              <input
                                name="project_type"
                                type="radio"
                                id="Digital Marketing"
                                className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                                value="Digital Marketing"
                              />
                              <label className="peer-checked:bg-red-700 text-white border-[0.0625em] border-pink-700 rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] ">
                                Digital Marketing
                              </label>
                            </li>
                            <li className="mr-[0.7em] mb-[0.7em] relative">
                              <input
                                name="project_type"
                                type="radio"
                                id="Other"
                                className="absolute invisible left-0 right-0  inline-block peer  cursor-pointer"
                                value="Other"
                              />
                              <label className="peer-checked:bg-red-700 text-white border-[0.0625em] border-pink-700 rounded-[0.26044rem] text-xs cursor-pointer py-[0.42rem] px-[0.8rem] ">
                                Other
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="min-h-[6em] esm:min-h-[4.5em] my-[0.5em]">
                          <div className="contact-termscondition  flex items-baseline">
                            <input
                              id="consent"
                              name="consent"
                              type="checkbox"
                              className="border-[white] flex items-center justify-center absolute w-[20px] h-[20px] focus:outline-none z-20  peer mt-0 lg:mt-1 checked:bg-transparent checked:after:opacity-100 after:content-['✓'] after:block after:text-white after:opacity-0 after:absolute bg-white bg-contain bg-center bg-no-repeat align-center transition-all border border-solid   float-left  cursor-pointer appearance-none checked:from-gray-900 checked:to-slate-800 rounded-[3px] ease-soft"
                            />
                            <label className="cursor-pointer">
                              <div className="[&>p]:font-Mont  [&>p]:text-[10.5px] xl:[&>p]:text-xs [&>p]:text-white [&>p]:opacity-70 [&>p]:pl-[3em]">
                                <p>
                                  I have read the privacy policy and understand
                                  how you use and protect the information that
                                  we provide to you.*
                                </p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div>
                          <div className="flex">
                            <button
                              type="submit"
                              className="disabled:opacity-70 opacity-100 disabled:cursor-not-allowed     contact-submit  text-base capitalize rounded-lg font-normal  text-white leading-[1.25em]  bg-pink-800 w-[134px] h-[40px]"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contactus-personImg  flex-col-reverse em:flex-row-reverse sm:flex-row flex lg:block justify-between relative w-full md:w-[80%] lg:w-[50%] mx-auto mt-[3em] sm:mt-[5em] lg:mt-0">
                      <img
                        src={urlFor(item?.image).url()}
                        width={500}
                        height={600}
                        alt="image"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-map [&>div>iframe]:w-full [&>div>iframe]:rounded-lg [&>div>iframe]:h-[20em] md:[&>div>iframe]:h-[30em] pb-10">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1529.2635894013035!2d72.50069154977834!3d23.07888740446473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d61b056cb41%3A0x1e36380ab233f9cf!2sJamstacky%20-%20JAMstack%20and%20Headless%20Web%20Development%20Agency!5e0!3m2!1sen!2sin!4v1675059278330!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Form_contact;
