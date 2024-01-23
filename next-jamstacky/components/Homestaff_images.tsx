import client from "@/client/sanity.client";
import { urlFor } from "@/imageBuilder/urlFor";
// import { list } from "postcss";

interface Ihomestaff {
  _id: any;
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

  return (
    <div className="flex overflow-x-auto space-x-4 mx-10">
      {data.map((item) => (
        <div key={item._id} className="slider">
          {item.staff_image.map((img: any, index: number) => (
            <div key={index} className="mr-4 w-full">
              <img
                src={urlFor(img).url()}
                width={500}
                height={450}
                alt=""
                className="w-full"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Homestaff_images;
