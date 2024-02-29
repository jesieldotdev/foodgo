import { InputBase } from '@mui/material'
import * as S from './styles'
import { SearchOutline } from '@styled-icons/evaicons-outline/SearchOutline'
import { Sliders2 } from '@styled-icons/bootstrap/Sliders2'

interface SearchBarProps {
    className?: string
}

export const SearchBar = ({ className }: SearchBarProps) => {
    return (
        <S.SearchBarContainer className={className}>

            <S.SearchInput
                startAdornment={<SearchOutline  className='icon' />}
                placeholder="Pesquisar..."
            />
            <S.FilterButton>
                <Sliders2 color='#fff' size={24} />
            </S.FilterButton>


        </S.SearchBarContainer>
    )
}