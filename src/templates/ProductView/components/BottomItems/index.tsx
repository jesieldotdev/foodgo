import { SliderSpicy } from '@/components/Slider'
import * as S from './styles'
import { Portion } from '@/components/Portion'
import { useRouter } from 'next/router'

interface BottomItemsProps {
    className?: string
}

export const BottomItems = ({ className }: BottomItemsProps) => {
    const router = useRouter()
    return (
        <S.BottomItemsContainer className={className}>

            <S.FlexRow>
                <SliderSpicy />
                <Portion />
            </S.FlexRow>
            <S.FlexRow className='mt-32'>
                <S.Price>$8.24</S.Price>
                <S.OrderButton onClick={()=> router.push('/checkout')} >Order Now</S.OrderButton>
            </S.FlexRow>

        </S.BottomItemsContainer>
    )
}