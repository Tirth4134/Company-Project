export default{
    name:'book_metting',
    title:'Book Metting',
    type:'document',
    fields:[
        {
        name:'title',
        title:'Title',
        type:'array',
        of:[{
            type:'block'
        }]
    },
    {
        name:'image',
        title:'Image',
        type:'image'
    }
]
}