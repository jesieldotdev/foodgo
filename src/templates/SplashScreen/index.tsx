import { Hamburgers } from './components/Hamburgers'
import * as S from './styles'

export const SplashScreen = () => {

    const gradientColor1 = 'EF2A39'

    return (
        <S.SplashScreenContainer>
            <S.Title>Foodgo</S.Title>

            <Hamburgers />
        </S.SplashScreenContainer>
    )
}