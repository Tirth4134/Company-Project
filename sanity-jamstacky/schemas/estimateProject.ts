export default {
    name:'project_schedule',
    title:'Project Schedule',
    type:'document',
    fields:[{
        name:'title',
        title:'Title',
        type:'string'
    },
{
    name:'heading',
    title:'Heading',
    type:'string',
},
{
    name:'image',
    title:'Image',
    type:'image'
},
{
    name:'button',
    title:'Button',
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
}
]
}