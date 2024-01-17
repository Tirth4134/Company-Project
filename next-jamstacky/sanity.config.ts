import { defineConfig } from "sanity";
import { deskTool,  } from "sanity/desk";
import { schemaTypes } from "../sanity-jamstacky/schemas";


const config = defineConfig({
    name: 'default',
    title: 'sanity-jamstacky',
    projectId: 'xlig8i23',
    dataset: 'production',
    apiVersion:'2023-12-19',
    basePath:'/admin',
    plugins:[deskTool()],
   
    schema:{ types: schemaTypes}
})

export default config;