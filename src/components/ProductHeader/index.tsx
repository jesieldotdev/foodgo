import { IconButton } from '@mui/material'
import * as S from './styles'
import ArrowLeft from '../../../public/icons/fi-sr-arrow-small-left.svg'
import { useRouter } from 'next/router'

interface ProductHeaderProps {
    className?: string
}

export const ProductHeader = ({className }: ProductHeaderProps) => {
    const router = useRouter()
    return (
        <S.ProductHeaderContainer className={className}>
            <IconButton onClick={() => router.back()}>
                <ArrowLeft className='icon' size={24} />
            </IconButton>
        </S.ProductHeaderContainer>
    )
}