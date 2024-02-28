import { Header } from '@/components/Header'
import * as S from './styles'
import { SearchBar } from '@/components/SearchBar'

interface HomePageProps {

}

export const HomePage = ({ }: HomePageProps) => {
    return (
        <S.HomeContainer>
            <Header className='pd-16'/>
            <SearchBar className='pd-16' />

        </S.HomeContainer>
    )
}