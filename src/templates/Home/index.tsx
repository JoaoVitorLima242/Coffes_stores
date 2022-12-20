import Head from 'next/head'
import Image from 'next/image'

// Styles
import * as S from './styles'
// Components
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import Card from '../../components/Card'
// Types
import { HomePageProps } from '../../pages'

const HomeTemplate = ({ coffeeStores }: HomePageProps) => {
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
                    {coffeeStores.map(({ id, name, imgUrl }) => (
                        <Card 
                            key={id}
                            name={name}
                            imgUrl={imgUrl}
                            href ={`/coffee-store/${id}`}
                        />
                    ))}
                </S.CardLayout>
            </S.Wrapper>
        </Container>
    )
}

export default HomeTemplate