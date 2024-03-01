import { SliderSpicy } from '@/components/Slider'
import * as S from './styles'
import { Portion } from '@/components/Portion'

interface BottomItemsProps {
    className?: string
}

export const BottomItems = ({ className }: BottomItemsProps) => {
    return (
        <S.BottomItemsContainer className={className}>
            <SliderSpicy />
            <Portion />
        </S.BottomItemsContainer>
    )
}