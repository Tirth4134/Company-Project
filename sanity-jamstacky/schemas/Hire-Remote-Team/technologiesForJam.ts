export default {
    name: "technologiesForJam",
    title: "Technologiy for JAM",
    type: "document",
    fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string"
        },
        {
            name: "title",
            title: "Title",
            type: "string"
        },

        {
            name: 'techTypeButton',
            title: 'Tech Type button',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                        },
                    ],
                },
            ],
        },

        {
            name: "technologyList",
            title: "Technology List",
            type: "array",
            of: [
                {
                    name: "technology",
                    title: "technology",
                    type: "image",
                    options: {
                        hotspot: true
                    },
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'alt', title: 'Alt Description', type: 'string' },
                        { name: "techType", title: "TechType", type: "string" }
                    ],
                },

            ]
        }
    ]

}