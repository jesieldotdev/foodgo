import Image from 'next/image';
import * as S from './styles'; // Certifique-se de que o caminho para o arquivo de estilos esteja correto

export const Hamburgers = () => {
    return (
        <S.HamburgersContainer>
            <Image
                src="/images/hamb3.png" // Caminho relativo à pasta public
                alt="Descrição da imagem"
                width={206}
                height={238}
                priority
            />
            <S.HamburgerImageContainer>
                <Image
                    layout="fill"   
                    objectFit="cover"
                    src="/images/hamburger1.png" // Caminho relativo à pasta public
                    alt="Descrição da imagem"
                    priority
                />
            </S.HamburgerImageContainer>
        </S.HamburgersContainer>
    )
}
