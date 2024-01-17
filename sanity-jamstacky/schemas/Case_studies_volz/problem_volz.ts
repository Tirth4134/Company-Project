export default {
    name: 'problem_volz',
    title: 'Problem Volz',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'description',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
    ],
  }
  