export type Coordinates = {
    latitude: number
    longitude: number
}

export type Chains = {
    id: string
    name: string
}

export type Category = {
    id: number
    name: string
    icon: {
        prefix: string
        sufix: string
    }
}

export type Location = {
    address: string
    census_block: string
    country: string
    dma: string
    formatted_address: string 
    locality: string
    postcode: string
    region: string
    neighborhood?: string[]
}

export type Result = {
    fsq_id: string
    categories: Category[]
    chains: Chains[]
    distance: number
    geocodes: {
        main: Coordinates
        roof: Coordinates
    }
    link: string
    location: Location
    name: string
    related_places: {}
    timezone: string
    imgUrl?: string
}

export type Context = {
    geo_bounds: {
        circle: Object[]
    }
}

export type FoursquareResponse = {
    context: Context
    results: Result[]
    message?: string
} 