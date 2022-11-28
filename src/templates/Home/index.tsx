import Head from 'next/head'
import Banner from '../../components/Banner'
import * as S from './styles'

const HomeTemplate = () => {
    return (
        <div>
            <Head>
                <title>Coffe Connoisseur</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <S.Wrapper>
                <Banner buttonText='View stores nearby'/>
            </S.Wrapper>
        </div>
    )
}

export default HomeTemplate