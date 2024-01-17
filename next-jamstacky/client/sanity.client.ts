import { ClientConfig, createClient } from "next-sanity"

const config:ClientConfig={
    projectId: 'xlig8i23',
    dataset: 'production',
    apiVersion:'2023-12-19',
    useCdn: false,
};

const client = createClient(config);


export default client;
