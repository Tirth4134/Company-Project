export default {
    name:'case_studies_and_portfolio',
    title:'Case Studies And Portfolio',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'heading',
            title:'Heading',
            type:'string',
        },
        {
            name:'defination',
            title:'Defination',
            type:'text'
        },
        {
            name:'project_image',
            title:'Project Image',
            type:'image',
            
        },
        {
            name:'start_project',
            title:'Start Project',
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
            name:'hire_jamstack_developer',
            title:'Hire Jamstack Developer',
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
        }
    ]
}