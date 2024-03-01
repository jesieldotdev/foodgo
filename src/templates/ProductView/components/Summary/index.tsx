import * as S from './styles'
import { StarFill } from '@styled-icons/bootstrap/StarFill'


interface SummaryProps {
    className?: string
}

export const Summary = ({ className }: SummaryProps) => {
    return (
        <S.SummaryContainer className={className}>
            <S.Title>Cheeseburger Wendys Burger</S.Title>
            <S.SubHeader>
                <StarFill className='star' />
                <S.Rating>4.9</S.Rating>
                <S.DeliveryTime>-  26 min</S.DeliveryTime>
            </S.SubHeader>
            <S.Description>
                The Cheeseburger Wendys Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.
            </S.Description>
        </S.SummaryContainer>
    )
}