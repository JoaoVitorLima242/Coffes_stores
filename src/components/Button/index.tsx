import { ReactNode } from 'react'
import * as S from './styles'

type Props = {
    children: ReactNode
}

const Button = ({
    children
}: Props) => {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    )
}

export default Button