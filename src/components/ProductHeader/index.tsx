import { IconButton } from '@mui/material'
import * as S from './styles'
import ArrowLeft from '../../../public/icons/fi-sr-arrow-small-left.svg'

interface ProductHeaderProps {
    className?: string
}

export const ProductHeader = ({className }: ProductHeaderProps) => {
    return (
        <S.ProductHeaderContainer className={className}>
            <IconButton>
                <ArrowLeft className='icon' size={24} />
            </IconButton>
        </S.ProductHeaderContainer>
    )
}