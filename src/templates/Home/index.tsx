import { Header } from '@/components/Header'
import * as S from './styles'
import { SearchBar } from '@/components/SearchBar'
import { Carroussel } from '@/components/Carroussel'

interface HomePageProps {

}

export const HomePage = ({ }: HomePageProps) => {
    return (
        <S.HomeContainer>
            <Header className='pd-16'/>
            <SearchBar className='pd-16' />
            <Carroussel className='pd-16' />

        </S.HomeContainer>
    )
}