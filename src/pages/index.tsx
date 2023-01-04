import { GetStaticProps } from 'next'

// Types
import {  Result } from '../@types/foursquare'
// Page Template
import HomeTemplate from '../templates/Home'
// Services
import { getCoffeeStores } from '../services/places'

export type HomePageProps = {
  coffeeStores: Result[]
}

export default function Home({ coffeeStores }: HomePageProps) {
  return <HomeTemplate coffeeStores={coffeeStores}/>
}

export const getStaticProps: GetStaticProps = async () => {
  const coffeeStores = await getCoffeeStores()

  return {
    props: {
      coffeeStores
    }
  }

}