export default {
  name: 'who_are_renta',
  title: 'Who Are Renta',
  type: 'document',
  fields: [
    {
        name:'title',
        title:'Title',
        type:'string',
    },
    {
      name: 'image',
      title: 'Iamge',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type:'block'}],
    },
  ],
}
