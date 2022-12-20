import Image from 'next/image'
import * as S from './styles'

type MyProps = {
    name: string
    imgUrl: string
    href: string
}

const Card = ({ name, imgUrl, href }: MyProps) => {
    return (
        <S.Wrapper href={href}>
            <a>
                <h2>{name}</h2>
                <Image 
                    width={260}
                    height={160}
                    src={imgUrl}
                    alt=''
                />
            </a>
        </S.Wrapper>
    )
}

export default Card