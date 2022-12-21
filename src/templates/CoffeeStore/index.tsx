import { useRouter } from 'next/router'
import Container from '../../components/Container'
import { CoffeStorePage } from '../../pages/coffee-store/[id]'
import * as S from './styles'

const CoffeeStoreTemplate = ({ coffeeStore }: CoffeStorePage) => {
    const { isFallback } = useRouter()
    const {
        address,
        name
    } = coffeeStore || {}
    
    if (isFallback) {
        return <p>loading ...</p>
    }

    return (
        <Container>
            <S.Wrapper>
                <h1>{name}</h1>
            </S.Wrapper>
        </Container>
    )
}

export default CoffeeStoreTemplate