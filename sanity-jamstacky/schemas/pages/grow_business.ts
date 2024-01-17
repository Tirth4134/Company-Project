export default {
  name: 'growth_business',
  title: 'growth_business',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'question_list',
      title: 'Question List',
      type: 'array',
      of: [
        {
          title: 'Qus Ans',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
