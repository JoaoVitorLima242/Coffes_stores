import { FoursquareResponse } from "../@types/foursquare"
import { api } from "./api"

const AUTHORIZATION_KEY = process.env.FOURSQUARE_API_KEY

export const getCoffeeStores = async () => {
    const options = ({
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: AUTHORIZATION_KEY
        }
    })

    const { results } = await api<FoursquareResponse>('https://api.foursquare.com/v3/places/search?query=Cafeteria&ll=-30.012105049907593%2C-51.146366877470136&limit=6', options)

    return results
}