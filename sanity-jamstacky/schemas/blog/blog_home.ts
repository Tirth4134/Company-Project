export default{
    name:'blog_home',
    title:'Blog Home',
    type:'document',
    fields:[{
        name:'heading',
        title:'Heading',
        type:'string',
    },
    {
        name:'by_name_date',
        title:'By Name Date',
        type:'string'
    },
    {
        name:'description',
        title:'Description',
        type:'text',

    },
    {
        name:'read_more',
        title:'Read More',
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
        type:'image',
    }
]
}