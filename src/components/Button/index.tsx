import { MouseEventHandler, ReactNode } from 'react'

import * as S from './styles'

type Props = {
    children: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({
    children,
    onClick
}: Props) => {
    return (
        <S.Wrapper onClick={onClick}>
            {children}
        </S.Wrapper>
    )
}

export default Button