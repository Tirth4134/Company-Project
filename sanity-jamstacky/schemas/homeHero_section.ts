

export default {
  name: 'home_hero_section',
  title: 'Home Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: 'hero_title',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'hero_description',
      title: 'Hero Description',
      type: 'text',
    },
    {
      name: 'title_image',
      title: 'Title Image',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: 'start_project_button',
      title: 'Start Prject Button',
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
    },
    {
      name: 'jamstack_developer_button',
      title: 'Jamstack Developer Button',
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
    },
    {
      name: 'bottom_description',
      title: 'Bottom Description',
      type: 'text',
    },
    {
      name: 'section_theme',
      title: 'Section Theme',
      type: 'string',
      initialValue:'bg-white',
      options:{ direction: 'horizontal', layout: 'radio'}
    },
    {
      name: 'background_classname',
      title: 'Background Classname',
      type: 'string',
      initialValue:'white',
      options:{direction: 'horizontal', layout: 'radio'}
    },
  ],
}