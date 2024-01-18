export default {
    name: "ourProcess",
    title: "Our Process",
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
            name: "processTrack",
            title: "Process Track",
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
                        { name: 'alt', title: 'Alt Description', type: 'string' },
                    ],
                }
            ]
        },
        {
            name:'time_image',
            title:'Time Image',
            type:'image',
        }

    ]
} 