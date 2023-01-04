import { createApi } from 'unsplash-js';

import { FoursquareResponse } from "../@types/foursquare"
import { api } from "./api"

const AUTHORIZATION_KEY = process.env.FOURSQUARE_API_KEY
const UNSPLASH_KEY = process.env.UNSPLASH_API_KEY


const unsplash = createApi({
  accessKey: UNSPLASH_KEY
});


export const getCoffeeStores = async () => {
    const photos = await unsplash.search.getPhotos({
        query: "coffee shop",
        perPage: 30,
    });

    const photosResults = photos.response?.results.map(result => result.urls.small)

    const options = ({
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: AUTHORIZATION_KEY
        }
    })

    const { results } = await api<FoursquareResponse>('https://api.foursquare.com/v3/places/search?query=Cafeteria&ll=-30.012105049907593%2C-51.146366877470136&limit=6', options)

    console.log(photos)

    return results.map((result, index) => {
        return {
            ...result,
            imgUrl: photosResults ? photosResults[index] : ''
        }
    })
}