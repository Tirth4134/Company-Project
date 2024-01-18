export default{
    name:'form_fillup',
    title:'Form Fillup',
    type:'document',
    fields:[{
        name:'send_message',
        title:'Send Message',
        type:'array',
        of:[{
            type:'block',
        }]
    },
    {
        name:'image',
        title:'Image',
        type:'image',
    }
]
}