import { GetStaticProps } from 'next'

// Contants
import CoffeeStoreData from '../constants/coffeStores.json'
// Types
import { TCoffeStore } from '../@types/coffeStore'
// Page Template
import HomeTemplate from '../templates/Home'

export type HomePageProps = {
  coffeeStores: TCoffeStore[]
}

export default function Home({ coffeeStores }: HomePageProps) {
  return <HomeTemplate coffeeStores={coffeeStores}/>
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      coffeeStores: CoffeeStoreData
    }
  }
}