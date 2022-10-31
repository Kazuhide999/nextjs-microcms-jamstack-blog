import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain:'ukai',
    apiKey:process.env.API_KEY,
})
