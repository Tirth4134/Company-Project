import client from "@/client/sanity.client";
import Link from "next/link";
import React from "react";

interface Icate {
  _id: string;
  title: string;

  button: any;

  label: any;
  slug: any;
}

async function getData() {
  const query = `*[_type == 'category']{
          _id,
          title, 
          button,      
      }`;
  const data = await client.fetch(query);
  return data as Icate[];
}

const Category = async () => {
  const data = (await getData()) as Icate[];
  console.log(data);
  return (
    <div>
      {data.map((item: any) => {
        return (
          <div>
            <div className=" bg-[#eaf7ff] p-4 em:p-8 mx-0 em:mx-12 sm:mx-20">
              <h5 className="mb-2 text-center text-pink-700 font-bold block text-[21px] xl:text-[32px] font-DM">
                {item?.title}
              </h5>
              <div className="grid grid-cols-9">
                {item?.button.map((btn: any) => {
                  console.log(btn);

                  return (
                    <div>
                      <ul className="[&amp;>li]:!my-0 grid   [&amp;>li]:my-[0.25em] [&amp;>li]:mx-[0.3em] hover:[&amp;>li>a]:text-dark-pink [&amp;>li>a]:text-gray-light-color [&amp;>li>a]:text-[15px] xl:[&amp;>li>a]:text-[17px] [&amp;>li>a]:font-bold [&amp;>li>a]:inline-block [&amp;>li>a]:p-0 [&amp;>li>a]:m-[0.3em] [&amp;>li>a]:font-DM">
                        <li className="[&amp;>a]:!text-dark-blue text-sm">
                          <Link className="" href={btn?.slug?.current}>
                            {btn?.label}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
