import * as S from './styles'

interface CarrousselProps {
    className?: string
}

export const Carroussel = ({ className}: CarrousselProps) => {
    const categories = ['All', 'Combos', 'Sliders', 'Hamburguers', 'Fries'].map((item, index) => ({id: index, name: item}))

    return (
        <S.CarrousselContainer className={className}>
            {
                categories.map(item => <S.Item active={item.id === 0 ? 'active' : ''} key={item.id}>{item.name}</S.Item>)
            }
        </S.CarrousselContainer>
    )
}