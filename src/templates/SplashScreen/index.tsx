import { Hamburgers } from './components/Hamburgers'
import * as S from './styles'

export const SplashScreen = () => {

    return (
        <S.SplashScreenContainer>
            <S.Title>Foodgo</S.Title>

            <Hamburgers />
        </S.SplashScreenContainer>
    )
}