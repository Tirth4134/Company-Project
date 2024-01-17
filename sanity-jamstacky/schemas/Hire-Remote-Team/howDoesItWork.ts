export default {
    name: "howDoesItWork",
    title: "How Does It Work",
    type: "document",
    fields: [
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true
                    },
                
                    fields: [
                        { name: 'alt', title: 'Alt Description', type: 'string' },
                        { name: "text", title: "text", type: "string" }
                    ],
                }
            ]
        },
        {
            name:'conversion_title',
            title:'Conversion Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'text',
        },
        {
            name:"conv_image",
            title:"Conv Image",
            type:'image'
        }
    ]
}