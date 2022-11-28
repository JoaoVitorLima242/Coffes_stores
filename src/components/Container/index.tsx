import { ReactNode } from "react"

import * as S from './styles'

type Props = {
    children: ReactNode
}

const Container = ({ children }: Props) => {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    )
}

export default Container