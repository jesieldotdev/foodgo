import * as S from './styles'
import MasterCard from '../../../../../public/icons/brand.svg'
import Visa from '../../../../../public/icons/pngwing 27.svg'
import On from '../../../../../public/icons/Group 51.svg'
import Off from '../../../../../public/icons/Group 51 (1).svg'
import { usePaymentMethodsViewController } from './useViewController'

interface PaymentMethodsProps {
    className?: string
}

export const PaymentMethods = ({ className }: PaymentMethodsProps) => {
    const { selectedPayment, PaymentMethods, handleCardClick } = usePaymentMethodsViewController()
    return (
        <S.PaymentMethodsContainer className={className}>
            <S.Title>Payment methods</S.Title>

            {
                PaymentMethods.map(payment => <S.PaymentCard
                    key={payment.id}
                    active={payment.id === selectedPayment}
                    className='mt-16'
                    onClick={() => handleCardClick(payment.id)}
                >
                    {payment.brand === 'VISA' ? <Visa /> : <MasterCard />}
                    <S.Info>
                        <S.Label active={payment.id === selectedPayment}>{payment.label}</S.Label>
                        <S.Value>{payment.serial}</S.Value>
                    </S.Info>
                    <On />
                </S.PaymentCard>)
            }

        </S.PaymentMethodsContainer>
    )
}