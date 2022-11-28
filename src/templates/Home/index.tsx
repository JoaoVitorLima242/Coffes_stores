import Head from 'next/head'
import Banner from '../../components/Banner'
import * as S from './styles'

const HomeTemplate = () => {
    return (
        <div>
            <Head>
                <title>Coffe Shop</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <S.Wrapper>
                <Banner buttonText='Click Here'/>
            </S.Wrapper>
        </div>
    )
}

export default HomeTemplate