import Head from 'next/head'
import Image from 'next/image'

import Banner from '../../components/Banner'
import Container from '../../components/Container'
import * as S from './styles'
import Card from '../../components/Card'

const HomeTemplate = () => {
    return (
        <Container>
            <Head>
                <title>Coffe Connoisseur</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <S.Wrapper>
                <Banner buttonText='View stores nearby'/>
                <S.ImageContainer>
                    <Image 
                        src='/static/hero-image.png'
                        width={700}
                        height={400}
                        alt='Banner image'
                    />
                </S.ImageContainer>
                <S.CardLayout>
                    <Card 
                        name='DarkHouse Coffee'
                        imgUrl='/static/hero-image.png'
                        href ='/coffee-store/darkhorse-coffee'
                    />
                    <Card 
                        name='DarkHouse Coffee'
                        imgUrl='/static/hero-image.png'
                        href ='/coffee-store/darkhorse-coffee'
                    />
                    <Card 
                        name='DarkHouse Coffee'
                        imgUrl='/static/hero-image.png'
                        href ='/coffee-store/darkhorse-coffee'
                    />
                </S.CardLayout>
            </S.Wrapper>
        </Container>
    )
}

export default HomeTemplate