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
                        src="/images/user-pic.png" // Caminho relativo à pasta public
                        alt="Descrição da imagem"
                        priority
              
                    />
                </S.AvatarContainer>
            </S.FlexRow>


        </S.HeaderContainer>
    )
}