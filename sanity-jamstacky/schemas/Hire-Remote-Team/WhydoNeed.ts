export default {
  name: 'why_need_jamstack',
  title: 'Why Need Jamstack',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'jamstack_detail',
      title: 'Jamstack detail',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [{
            name:'title',
            title:'Title',
            type:'string',
          },{
            name:'description',
            title:'Description',
            type: 'array',
            of: [{type: 'block'}],
          }
        ],
        },
      ],
    },
  ],
}
