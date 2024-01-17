export default{
    name:'want_to_hire_developer',
    title:'Want To Hire Develoeper',
    type:'document',
    fields:[{
        name:'heading',
        title:'Heading',
        type:'string',
    },
    {
        name:'description',
        title:'Description',
        type:'array',
        of:[{
            type:'block'
        }]    
    },
    {
        name:'book_free_conclutation',
        title:'Book Free Conclutation',
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
        name:'image',
        title:'Image',
        type:'image'
    }
]
}