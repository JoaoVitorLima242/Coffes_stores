import { MouseEventHandler, ReactNode } from 'react'

import * as S from './styles'

type Props = {
    children: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
    size?: 'medium' | 'small'
}

const Button = ({
    children,
    onClick,
    size = 'medium'
}: Props) => {
    return (
        <S.Wrapper 
            onClick={onClick}
            size={size}
        >
            {children}
        </S.Wrapper>
    )
}

export default Button