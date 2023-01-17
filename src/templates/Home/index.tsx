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
// Custom Hooks
import useTrackLocation from '../../hooks/useTrackLocation'
import { useEffect } from 'react'
import { getCoffeeStores } from '../../services/places'

const coffeeStorePlaceholder = 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80'

const HomeTemplate = ({ coffeeStores }: HomePageProps) => {
    const { 
        handleTrackLocation, 
        coords, 
        locationErrorMsg, 
        isFindingLocation 
    } = useTrackLocation()

    const onBannerButtonClick = () => {
        handleTrackLocation()
    }

    useEffect(() => {
        const fetchCoffeStore = async () => {
            if (coords) {
                try {
                    const fetchedCoffeStores = await getCoffeeStores(coords, 20)

                    console.log(fetchedCoffeStores)
                } catch(err) {
                    console.log(err)
                }
            }
        }

        fetchCoffeStore()
    }, [coords])

    return (
        <Container>
            <Head>
                <title>Coffe Connoisseur</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <S.Wrapper>
                <Banner 
                    buttonText='View stores nearby'
                    buttonHandler={onBannerButtonClick}
                    buttonLoading={isFindingLocation}
                />
                {locationErrorMsg && <p>Something went wrong: {locationErrorMsg}</p>}
                <S.ImageContainer>
                    <Image 
                        src='/static/hero-image.png'
                        width={700}
                        height={400}
                        alt='Banner image'
                    />
                </S.ImageContainer>
                    {coffeeStores.length > 0 && 
                        <S.SectionWrapper>
                            <S.SectionTitle>Toronto stores</S.SectionTitle>
                            <S.CardLayout>
                                {coffeeStores.map(({ fsq_id, name, imgUrl}) => (
                                    <Card 
                                        key={fsq_id}
                                        name={name}
                                        imgUrl={imgUrl || coffeeStorePlaceholder}
                                        href ={`/coffee-store/${fsq_id}`}
                                    />
                                ))}
                            </S.CardLayout>
                        </S.SectionWrapper>
                    }
            </S.Wrapper>
        </Container>
    )
}

export default HomeTemplate