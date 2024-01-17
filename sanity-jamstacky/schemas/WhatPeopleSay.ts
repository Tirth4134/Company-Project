export default {
    name: "WhatPeopleSay",
    title: "What People Say",
    type: "document",
    fields: [
        {
            name: "testinomialSec",
            title: "Testimonial Section",
            type: "array",
            of: [
                { type: "block" }
            ]
        },
        {
            name: "reviews",
            title: "Reviews",
            type: "array",
            of: [
                {
                    name: "list",
                    title: "List",
                    type: "object",
                    fields: [
                        {
                            name: "reviewText",
                            title: "Review Text",
                            type: "array",
                            of: [
                                { type: "block" }
                            ]
                        },
                        {
                            name: "reviewerName",
                            title: "Reviewer Name",
                            type: "string"
                        },
                        {
                            name: "reviewerLocation",
                            title: "Reviewer Location",
                            type: "string"
                        },
                        {
                            name: "reviewerImage",
                            title: "Reviewer Image",
                            type: "image",
                            options: {
                                hotspot: true
                            },
                        }
                    ]
                }
            ]
        }
    ]
}