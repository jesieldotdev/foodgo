import * as S from './styles'
import Brand from '../../../../../public/icons/brand.svg'
import On from '../../../../../public/icons/Group 51.svg'
import Off from '../../../../../public/icons/Group 51 (1).svg'

interface PaymentMethodsProps {
    className?: string
}

export const PaymentMethods = ({ className }: PaymentMethodsProps) => {
    return (
        <S.PaymentMethodsContainer className={className}>
            <S.Title>Payment methods</S.Title>

            <S.PaymentCard active className='mt-16'>
                <Brand />
                <S.Info>
                    <S.Label active>Credit card</S.Label>
                    <S.Value>5105 **** **** 0505</S.Value>
                </S.Info>
                <On />
            </S.PaymentCard>
            <S.PaymentCard className='mt-16'>
                <Brand />
                <S.Info>
                    <S.Label >Debite card</S.Label>
                    <S.Value>5105 **** **** 0505</S.Value>
                </S.Info>
                <Off />
            </S.PaymentCard>
        </S.PaymentMethodsContainer>
    )
}