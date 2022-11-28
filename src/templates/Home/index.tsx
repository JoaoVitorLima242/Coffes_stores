import Head from 'next/head'
import Banner from '../../components/Banner'
import Container from '../../components/Container'
import * as S from './styles'

const HomeTemplate = () => {
    return (
        <Container>
            <Head>
                <title>Coffe Connoisseur</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <S.Wrapper>
                <Banner buttonText='View stores nearby'/>
            </S.Wrapper>
        </Container>
    )
}

export default HomeTemplate