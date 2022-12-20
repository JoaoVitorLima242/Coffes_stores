import { GetStaticProps } from 'next'

import CoffeeStoreData from '../constants/coffeStores.json'
import HomeTemplate from '../templates/Home'
import { TCoffeStore } from '../@types/coffeStore'

export type HomePageProps = {
  coffeeStores: TCoffeStore[]
}

export default function Home({ coffeeStores }: HomePageProps) {
  return <HomeTemplate coffeeStores={coffeeStores}/>
}

export const getStaticProps: GetStaticProps = () => {
  console.log(CoffeeStoreData)
  return {
    props: {
      coffeeStores: CoffeeStoreData
    }
  }
}