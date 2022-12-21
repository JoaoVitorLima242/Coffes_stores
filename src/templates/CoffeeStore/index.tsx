import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Container from '../../components/Container'
import { CoffeStorePage } from '../../pages/coffee-store/[id]'
import * as S from './styles'
import Button from '../../components/Button'

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
                    <S.BackToHomeLink>
                        <Link href='/'>
                            Back to Home
                        </Link>
                    </S.BackToHomeLink>
                <S.Wrapper>
                    <S.Col1>
                        <S.NameWrapper>
                            <S.Name>{name}</S.Name>
                        </S.NameWrapper>
                        <S.ImageUrlWrapper>
                            <S.ImageUrl
                                src={imgUrl}
                                width={600}
                                height={360}
                                alt={name}
                            />
                        </S.ImageUrlWrapper>
                    </S.Col1>
                    <S.Col2>
                        <S.IconWrapper>
                            <Image src="/static/icons/places.svg" width="24" height="24" alt=''/>
                            <S.Text>{address}</S.Text>
                        </S.IconWrapper>
                        <S.IconWrapper>
                            <Image src="/static/icons/nearMe.svg" width="24" height="24" alt=''/>
                            <S.Text>{neighbourhood}</S.Text>
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