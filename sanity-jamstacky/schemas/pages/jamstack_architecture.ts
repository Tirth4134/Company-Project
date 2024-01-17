export default{
    name:'jamstack_architecture',
    title:'Jamstack Architecture',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'image',
            title:"Image",
            type:'image'
        },
        {
            name:'description',
            title:'Decription',
            type:'array',
            of:[{type:'block'}],

        },
        {
           name:'reviews_online',
           title:'Reviews Online',
           type:'object',
           fields:[
            {
                name:'heading',
                title:'Heading',
                type:'string'
            },
            {
                name:'star_image',
                title:"Star Image",
                type:'image'
            },
            {
                name:'heading_detail',
                title:'Heading Detail',
                type:'array',
                of:[{type:'block'}]
            },
            {
                name:'review_image',
                title:'Review Image',
                type:'image'
            },
            {
                name: 'button',
                title: 'Button',
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
           ]
        }
    ]
}