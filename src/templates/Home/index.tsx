import { useContext, useEffect, useState } from 'react'
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
// Services
import { getCoffeeStores } from '../../services/places'
// Context
import { StoreContext } from '../../context/Store'
import { ACTION_TYPES } from '../../context/Store/types.d'

const coffeeStorePlaceholder = 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80'

const HomeTemplate = ({ coffeeStores }: HomePageProps) => {
    const [nearCoffeStoresError, setNearCoffeStoresError] = useState('')

    const {state, dispatch} = useContext(StoreContext)

    const { 
        handleTrackLocation, 
        coords, 
        locationErrorMsg, 
        isFindingLocation 
    } = useTrackLocation()

    useEffect(() => {
        const fetchCoffeStore = async () => {
            if (coords) {
                try {
                    const fetchedCoffeStores = await fetch(`/api/getCoffeeStoresByLocation?latitude=${coords.latitude}&longitude=${coords.longitude}&limit=21`)
                    
                    const coffeeStores = await fetchedCoffeStores.json()
                    dispatch({
                        type: ACTION_TYPES.SET_COFFE_STORES,
                        payload: {
                            coffeeStores
                        }
                    })
                } catch(error) {
                    setNearCoffeStoresError('Error fetching coffee stores.')
                }
            }
        }
        
        fetchCoffeStore()
    }, [coords, dispatch])
    
    const onBannerButtonClick = () => {
        handleTrackLocation()
    }

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
                {nearCoffeStoresError && <p>Something went wrong: {nearCoffeStoresError}</p>}
                <S.ImageContainer>
                    <Image 
                        src='/static/hero-image.png'
                        width={700}
                        height={400}
                        alt='Banner image'
                    />
                </S.ImageContainer>
                    {state.coffeStores.length > 0 && 
                        <S.SectionWrapper>
                            <S.SectionTitle>Stores near me</S.SectionTitle>
                            <S.CardLayout>
                                {state.coffeStores.map(({ fsq_id, name, imgUrl}) => (
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