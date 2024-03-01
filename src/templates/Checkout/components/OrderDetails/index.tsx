import * as S from './styles'

interface OrderDetailsProps {
className?: string
}

export const OrderDetails = ({ className}: OrderDetailsProps) => {
    return (
        <S.OrderDetailContainer className={className}>
            <S.FlexRow>
                <S.Label>Order</S.Label>
                <S.Label>$26.48</S.Label>
            </S.FlexRow>
            <S.FlexRow>
                <S.Label>Taxes</S.Label>
                <S.Label>$0.3</S.Label>
            </S.FlexRow>
            <S.FlexRow>
                <S.Label>Delivery Fees</S.Label>
                <S.Label>$1.5</S.Label>
            </S.FlexRow>
            <S.Divider/>
            <S.FlexRow className='mt-16'>
                <S.TotalLabel>Total</S.TotalLabel>
                <S.TotalValue>$18.19</S.TotalValue>
            </S.FlexRow>
            <S.FlexRow className='mt-16'>
                <S.DeliveryTimeLabel>Estimated delivery time:</S.DeliveryTimeLabel>
                <S.DeliveryTime>15 - 30 mins</S.DeliveryTime>
            </S.FlexRow>
        </S.OrderDetailContainer>
    )
}