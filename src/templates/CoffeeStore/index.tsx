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
        neighbourhood,
        imgUrl
    } = coffeeStore || {}

    return (
        <S.Layout>
            <Head>
                <title>{name}</title>
            </Head>
            <Container>
                <S.Wrapper>
                    <S.Col1>
                        <S.BackToHomeLink>
                            <Link href='/'>
                                Back to Home
                            </Link>
                        </S.BackToHomeLink>
                        <S.NameWrapper>
                            <S.Name>{name}</S.Name>
                        </S.NameWrapper>
                        <S.ImageUrl
                            src={imgUrl}
                            width={600}
                            height={360}
                            alt={name}
                        />
                    </S.Col1>
                    <S.Col2>
                            <p>{address}</p>
                            <p>{neighbourhood}</p>
                    </S.Col2>
                </S.Wrapper>
            </Container>
        </S.Layout>
    )
}

export default CoffeeStoreTemplate