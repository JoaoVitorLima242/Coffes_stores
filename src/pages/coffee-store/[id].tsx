import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"

// Template
import CoffeeStoreTemplate from "../../templates/CoffeeStore"
// Type
import { Result } from "../../@types/foursquare"
// Services
import { getCoffeeStores } from "../../services/places"

interface IParams extends ParsedUrlQuery {
    id: string
}


export type CoffeStorePage = {
    coffeeStore: Result
}

const CoffeeStore = ({ coffeeStore }: CoffeStorePage) => {
    return <CoffeeStoreTemplate coffeeStore={coffeeStore}/>
}

export default CoffeeStore

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { id }  = ctx.params as IParams

    const coffeeStores = await getCoffeeStores()

    const coffeeStore = coffeeStores.find(item => item.fsq_id === id)

    return {
        props: {
            coffeeStore: coffeeStore || {}
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