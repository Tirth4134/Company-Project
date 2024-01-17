import client from '@/client/sanity.client';
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from 'react'


interface IFAQ_hire {
  _id: string;
  title: string;
  question_list: any;
  question: string;
  answer: string;
}

async function getData() {
  const query = `*[_type == "faq_section"]{
        _id,
          title,
          question_list,
    }`;
  const data = await client.fetch(query);
  return data as IFAQ_hire[];
}


const  FAQsection = async () => {
    const data = (await getData()) as IFAQ_hire[];
    console.log(data);
    
    return (
      <>
        {data.map((item: any) => {
          return (
            <div>
              <div key={item?._id}>
                <h1 className="text-red-600 max-w-full sm:max-w-[70%] mx-auto mb-2 md:mb-[0.7em] xl:mb-[1.5em] text-center text-[20px] em:text-[22px] md:text-[26px] xl:text-[30px] font-medium font-DM">{item?.title}</h1>
              </div>
              <div>
                {item?.question_list.map((list: any) => {
                    console.log(list);    
                  return (
                    <div>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          className="relative text-dark-blue text-[15.75px] xl:text-[18px] font-bold pr-[3rem] sm:pr-[4rem]  font-DM  after:bg-[url(/downArrow.svg)] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[4%] md:after:right-[2%] after:w-full after:h-[1.1em] after:z-10 after:bg-no-repeat after:bg-[100%] after:transition-all after:duration-[0.2s]  py-[0.85rem]  after:!bg-[url(/upArrow.svg)] after:!rotate-0"
                        >
                          {list?.question}
                        </AccordionSummary>
                        <AccordionDetails 
                        className="mt-3.5 [&amp;>p]:text-sm xl:[&amp;>p]:text-base [&amp;>p]:text-dark-blue [&amp;>p]:font-DM [&amp;>p]:opacity-70 border-b-[#222549] border-b-[1px] border-opacity-20"
                        aria-hidden="false" id="accordion__panel-:r8:">
                         {list?.answer}
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </>
    );
}

export default FAQsection