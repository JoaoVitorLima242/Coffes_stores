import { MouseEventHandler } from 'react';

import Button from '../Button';
import * as S from './styles'

type Props = {
    buttonText: string;
    buttonHandler?: MouseEventHandler<HTMLButtonElement>
    buttonLoading?: boolean
}

const Banner = ({
    buttonText,
    buttonHandler,
    buttonLoading
}: Props) => {

    return (
        <S.Wrapper>
            <h1>Coffe <span>Connoisseur</span></h1>
            <p>Discover your local coffe shops!</p>
            <Button onClick={buttonHandler}>{buttonLoading ? '...Loading' : buttonText}</Button>
        </S.Wrapper>
    )
}

export default Banner