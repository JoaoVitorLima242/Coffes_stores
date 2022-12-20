import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'

type MyProps = {
    name: string
    imgUrl: string
    href: string
}

const Card = ({ name, imgUrl, href }: MyProps) => {
    return (
        <Link href={href}>
            <S.CardLink>
                <S.Container>
                    <S.CardHeaderWrapper>
                        <S.CardHeaderText>{name}</S.CardHeaderText>
                    </S.CardHeaderWrapper>
                    <S.CardImageWrapper>
                        <S.CardImage 
                            width={260}
                            height={160}
                            src={imgUrl}
                            alt=''
                        />
                    </S.CardImageWrapper>
                </S.Container>
            </S.CardLink>
        </Link>
    )
}

export default Card