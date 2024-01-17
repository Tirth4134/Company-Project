export default{
    name:'web_tool_and_have_fun',
    title:'Web Tool And Have Fun',
    type:'document',
    fields:[{
        name:'title',
        title:'Title',
        type:'string',
    },
    {
        name:'description',
        title:'Description',
        type:'array',
        of:[{
            type:'block',
        }]
    },
    {
        name:'image',
        title:'Image',
        type:'image'
    }
]
}