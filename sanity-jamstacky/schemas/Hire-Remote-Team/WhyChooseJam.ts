export default {
    name: "whyChooseJam",
    title: "Why Choose JAM",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "toolsList",
            title: "Tools List",
            type: "array",
            of: [
                {
                    name: "tool",
                    title: "Tool",
                    type: "image",
                    options: {
                        hotspot: true
                    },
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                    ],
                }
            ]
        }

    ]
} 