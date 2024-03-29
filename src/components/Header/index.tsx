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
                        src="https://i.pinimg.com/564x/4c/20/2b/4c202b6376037a5fc660a6c7b6e55661.jpg" // Caminho relativo à pasta public
                        alt="Descrição da imagem"
                        priority
              
                    />
                </S.AvatarContainer>
            </S.FlexRow>


        </S.HeaderContainer>
    )
}