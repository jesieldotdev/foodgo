import { Header } from '@/components/Header'
import * as S from './styles'

interface HomePageProps {

}

export const HomePage = ({ }: HomePageProps) => {
    return (
        <S.HomeContainer>
            <Header className='pd-16'/>

        </S.HomeContainer>
    )
}