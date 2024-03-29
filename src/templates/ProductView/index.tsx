import Image from 'next/image'
import { ProductHeader } from '../../components/ProductHeader/index'
import * as S from './styles'
import { Summary } from './components/Summary'
import { BottomItems } from './components/BottomItems'

interface ProductViewProps {

}

export const ProductView = ({ }: ProductViewProps) => {
    return (
        <S.ProductViewContainer>
            <ProductHeader className='pd-8' />
            <S.ImageContainer>
                <Image
                    alt='gg1'
                    layout="fill"   
                    objectFit="contain"
                    src="/images/gg1.png"
                />
            </S.ImageContainer>
            <Summary className='pd-16' />
            <BottomItems className='pd-16' />

        </S.ProductViewContainer>
    )
}