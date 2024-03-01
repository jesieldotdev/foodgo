import { ProductHeader } from '@/components/ProductHeader'
import * as S from './styles'
import { OrderDetails } from './components/OrderDetails'
import { PaymentMethods } from './components/PaymentMethods'

interface CheckoutProps {

}

export const Checkout = ({ }: CheckoutProps) => {
    return (
        <S.CheckoutContainer className='pd-8'  >
            <ProductHeader />
            <S.Title className='pd-8'>Order summary</S.Title>
            <OrderDetails className='pd-16' />
            <PaymentMethods className='pd-16'/>
        </S.CheckoutContainer>
    )
}