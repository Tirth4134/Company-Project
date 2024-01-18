import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
// import { list } from "postcss";

interface Ihomestaff {
  _id: string;
  staff_image: any;
  images: string;
}

async function getHomestaff() {
  const query = `*[_type == "homestaff_image"]{
        _id,
        staff_image
      
    }`;
  const data = await client.fetch(query);
  return data as Ihomestaff[];
}

const Homestaff_images = async () => {
  const data = (await getHomestaff()) as Ihomestaff[];
  // console.log(data);

  return (
    <div className="flex overflow-x-auto space-x-4 my-2 w-[460px]">
      {data.map((item) => (
        <div key={item._id} className="slider">
          {item.staff_image.map((img: any, index: number) => (
            <div key={index} className="inline-block mr-4 slide-track">
              <img
                src={urlFor(img).url()}
                width={460}
                height={380}
                alt=""
                className=""
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Homestaff_images;
