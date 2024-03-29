import Airtable from 'airtable'

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE_KEY = process.env.AIRTABLE_BASE_KEY

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: AIRTABLE_API_KEY
})

export const base = Airtable.base(AIRTABLE_BASE_KEY)

export const table = base('coffe-stores')