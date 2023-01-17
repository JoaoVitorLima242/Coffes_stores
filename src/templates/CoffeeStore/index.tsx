import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Container from '../../components/Container'
import { CoffeStorePage } from '../../pages/coffee-store/[id]'
import * as S from './styles'
import Button from '../../components/Button'

const coffeeStorePlaceholder = 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80'


const CoffeeStoreTemplate = ({ coffeeStore }: CoffeStorePage) => {
    const { isFallback } = useRouter()
    
    if (isFallback) {
        return <p>loading ...</p>
    }
    
    const {
        name,
        location,
        imgUrl
    } = coffeeStore || {}

    return (
        <S.Layout>
            <Head>
                <title>{name}</title>
            </Head>
            <Container>
                    <S.BackToHomeLink>
                        <Link href='/'>
                            ← Back to Home
                        </Link>
                    </S.BackToHomeLink>
                <S.Wrapper>
                    <S.Col1>
                        <S.NameWrapper>
                            <S.Name>{name}</S.Name>
                        </S.NameWrapper>
                        <S.ImageUrlWrapper>
                            <S.ImageUrl
                                src={imgUrl || coffeeStorePlaceholder} 
                                width={600}
                                height={360}
                                alt={name}
                            />
                        </S.ImageUrlWrapper>
                    </S.Col1>
                    <S.Col2>
                        <S.IconWrapper>
                            <Image src="/static/icons/places.svg" width="24" height="24" alt=''/>
                            <S.Text>{location?.formatted_address}</S.Text>
                        </S.IconWrapper>
                        <S.IconWrapper>
                            <Image src="/static/icons/star.svg" width="24" height="24" alt=''/>
                            <S.Text>1</S.Text>
                        </S.IconWrapper>
                        <Button size='small'>Up Vote!</Button>
                    </S.Col2>
                </S.Wrapper>
            </Container>
        </S.Layout>
    )
}

export default CoffeeStoreTemplate