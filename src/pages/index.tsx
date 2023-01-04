import { GetStaticProps } from 'next'

// Contants
import CoffeeStoreData from '../constants/coffeStores.json'
// Types
import { TCoffeStore } from '../@types/coffeStore'
// Page Template
import HomeTemplate from '../templates/Home'
import { FoursquareResponse, Result } from '../@types/foursquare'
import { api } from '../services/api'

export type HomePageProps = {
  coffeeStores: Result[]
}

const AUTHORIZATION_KEY = process.env.FOURSQUARE_API_KEY

export default function Home({ coffeeStores }: HomePageProps) {
  return <HomeTemplate coffeeStores={coffeeStores}/>
}

export const getStaticProps: GetStaticProps = async () => {
  const options = ({
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: AUTHORIZATION_KEY
    }
  })

  
  const { results } = await api<FoursquareResponse>('https://api.foursquare.com/v3/places/search?query=Cafeteria&ll=-30.012105049907593%2C-51.146366877470136&limit=6', options)

  return {
    props: {
      coffeeStores: results
    }
  }

}