import * as S from './styles'
import Image from 'next/image'

interface HeaderProps {
className?:string
}

export const Header = ({className }: HeaderProps) => {
    return (
        <S.HeaderContainer className={className}>
            <S.FlexRow>
                <S.LeftItems>
                    <S.Title>Lobster</S.Title>
                    <S.Message>Order your favourite food!</S.Message>
                </S.LeftItems>

                <S.AvatarContainer>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src="https://avatars.githubusercontent.com/u/82860253?s=96&v=4" // Caminho relativo à pasta public
                        alt="Descrição da imagem"
                        priority
              
                    />
                </S.AvatarContainer>
            </S.FlexRow>


        </S.HeaderContainer>
    )
}