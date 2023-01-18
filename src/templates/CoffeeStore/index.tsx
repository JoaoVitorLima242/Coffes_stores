import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

// Types
import { CoffeStorePage } from '../../pages/coffee-store/[id]'
// Context
import { StoreContext } from '../../context/Store'
// Styles
import * as S from './styles'
// Components
import Container from '../../components/Container'
import Button from '../../components/Button'
// Helpers
import { isEmpty } from '../../helpers/isEmpty'

const coffeeStorePlaceholder = 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80'


const CoffeeStoreTemplate = (initialProps: CoffeStorePage) => {
    const { isFallback, query } = useRouter()
    const [coffeStore, setCoffeStore] = useState(initialProps.coffeeStore)

    const { 
        state: { coffeStores }, 
        dispatch 
    } = useContext(StoreContext)

    const id = query.id as string

    useEffect(() => {
        if(isEmpty(initialProps.coffeeStore)) {
            if (coffeStores.length > 0) {
                const coffeStore = coffeStores.find(coffeStore => coffeStore.fsq_id === id)
                
                if (coffeStore) setCoffeStore(coffeStore)
            }
        }
    }, [id])
    
    if (isFallback) {
        return <p>loading ...</p>
    }
    
    const {
        name,
        location,
        imgUrl
    } = coffeStore || {}

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