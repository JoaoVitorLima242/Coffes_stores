import { GetStaticPaths, GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"

// Template
import CoffeeStoreTemplate from "../../templates/CoffeeStore"
// Type
import { TCoffeStore } from "../../@types/coffeStore"
// Contants
import CoffeeStoresData from '../../constants/coffeStores.json'

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

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            { params: { id: '0' }},
            { params: { id: '1' }}
        ],
        fallback: false
    }
}