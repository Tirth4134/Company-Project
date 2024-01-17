export default{
    name:'home_technology',
    title:'Home Technology',
    type:'document',        
    fields:[
        {                
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'book_free_consultation_button',
            title:'Book Free Consultation Button',
            type: 'object',
            fields: [
              {
                name: 'label',
                title: 'Label',
                type: 'string',
              },
              {
                name: 'slug',
                title: 'Slug',
                type: 'slug',
              },
            ],
        },
        {
            name:'image_list',
            title:'Image List',
            type:'array',
            of:[
                {  
                    name:'technologyes',
                    title:'Technologyes',
                    type:'object',
                    fields:[
                        {  
                            name:'technology_heading',
                            title:'Technology Heading',
                            type:'string'
                        },
                        {
                            name:'technology_images',
                            title:'Technology Images',
                            type: 'array',
                            of: [
                                {
                               
                                 name:'images',
                                 title:'Images',
                                 type: 'image'
                                 
                                }
                             ],
                        }

                    ]
                }
            ]

        },
       
    ]
}