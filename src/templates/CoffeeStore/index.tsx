import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import Container from '../../components/Container'
import { CoffeStorePage } from '../../pages/coffee-store/[id]'
import * as S from './styles'

const CoffeeStoreTemplate = ({ coffeeStore }: CoffeStorePage) => {
    const { isFallback } = useRouter()
    
    if (isFallback) {
        return <p>loading ...</p>
    }
    
    const {
        address,
        name,
        neighbourhood
    } = coffeeStore || {}

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>
            <Container>
                <Link href='/'>
                    Back to Home
                </Link>
                <S.Wrapper>
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{neighbourhood}</p>
                </S.Wrapper>
            </Container>
        </div>
    )
}

export default CoffeeStoreTemplate