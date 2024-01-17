export default{
    name:'grow_yourself',
    title:'Grow Yourself',
    type:'document',
    fields:[{
        name:'title',
        title:'Title',
        type:'string',
    },
    {
        name:'image',
        title:'Image',
        type:'image',    
    },
    {
        name:'description',
        title:'Description',
        type:'array',
        of:[{
            type:'block',
        }]
    }
]
}