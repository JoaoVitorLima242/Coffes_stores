import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"

// Template
import CoffeeStoreTemplate from "../../templates/CoffeeStore"
// Type
import { TCoffeStore } from "../../@types/coffeStore"
// Contants
import CoffeeStoresData from '../../constants/coffeStores.json'
// Services
import { getCoffeeStores } from "../../services/places"

interface IParams extends ParsedUrlQuery {
    id: string
}


export type CoffeStorePage = {
    coffeeStore: TCoffeStore
}

const CoffeeStore = ({ coffeeStore }: CoffeStorePage) => {
    return <CoffeeStoreTemplate coffeeStore={coffeeStore}/>
}

export default CoffeeStore

export const getStaticProps: GetStaticProps = (ctx) => {
    const { id }  = ctx.params as IParams

    const coffeeStore = CoffeeStoresData.find(item => item.id === Number(id))

    return {
        props: {
            coffeeStore
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const coffeeStores = await getCoffeeStores()

    const paths = coffeeStores.map(item => {
        return {
            params: {
                id: item.fsq_id
            }
        }
    }) 

    return {
        paths,
        fallback: true
    }
}