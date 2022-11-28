import * as S from './styles'

type Props = {
    buttonText: string;
}

const Banner = ({
    buttonText
}: Props) => {
    const buttonHandler = () => {}

    return (
        <S.Wrapper>
            <h1>Coffe <span>Connoisseur</span></h1>
            <p>Discover your local coffe shops!</p>
            <button>{buttonText}</button>
        </S.Wrapper>
    )
}

export default Banner