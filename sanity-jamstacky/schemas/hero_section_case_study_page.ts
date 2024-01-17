export  default {
    name:'case_study',
    title:'Case Study',
    type:'document',
    fields:[
        {
            name:'heading',
            title:'Heading',
            type:'string'

        },
        {
            name: "profile_image",
            title: "Profile Image",
            type: "image",
            description: "Upload a profile picture",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        {
            name:'core_web_title',
            title:'Core Web Title',
            type:'string'
        },
        
        {
            name: "graph_image",
            title: "Graph Image",
            type: "image",
            description: "Upload a profile picture",
            options: { hotspot: true },
            fields: [
              {
                name: "alt",
                title: "Alt",
                type: "string",
              },
            ],
          },
        {
            name:'volz_blog_title',
            title:'Volz Blog Title',
            type:'array',
            of:[{type:'block'}]
        },
       
       
    ]
}