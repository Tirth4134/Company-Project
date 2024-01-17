export default {
    name: 'what_we_build_volz',
    title: 'What We Build Volz',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'building_detail',
        title: 'Building Detail',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'description',
                title: 'Description',
                type: 'array',
                of: [{type: 'block'}],
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
              },
            ],
          },
        ],
      },
    ],
  }
  