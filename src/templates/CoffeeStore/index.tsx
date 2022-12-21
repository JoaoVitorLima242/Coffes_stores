import Container from '../../components/Container'
import { CoffeStorePage } from '../../pages/coffee-store/[id]'
import * as S from './styles'

const CoffeeStoreTemplate = ({ coffeeStore }: CoffeStorePage) => {
    const {
         address,
         name
    } = coffeeStore

    return (
        <Container>
            <S.Wrapper>
                <h1>{name}</h1>
            </S.Wrapper>
        </Container>
    )
}

export default CoffeeStoreTemplate