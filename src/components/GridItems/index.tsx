import * as S from './styles'
import Image from 'next/image'
import { StarFill } from '@styled-icons/bootstrap/StarFill'
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder'
import { Favorite } from '@styled-icons/material/Favorite'
import { ProductView } from '@/models/General'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'

interface GridItemsProps {
    className?: string
}

export const GridItems = ({ className }: GridItemsProps) => {

    const router = useRouter()

    const hamburgers: ProductView[] = [
        {
            name: 'Cheeseburger',
            merchant: 'Wendy Burger',
            image: "/images/pngwing 1.png",
            rating: 4.9,
            saved: false
        },
        {
            name: 'Hamburger',
            merchant: 'Veggie Burger',
            image: "/images/hamburger1.png",
            rating: 4.8,
            saved: true
        },
        {
            name: 'Hamburger',
            merchant: 'Chicken Burger',
            image: "/images/pngwing 3.png",
            rating: 4.6,
            saved: false
        },
        {
            name: 'Hamburger',
            merchant: 'Fried Chicken Burger',
            image: "/images/pngwing 5.png",
            rating: 4.6,
            saved: false
        },
    ].map((item, index) => ({ id: index, ...item }))

    return (
        <S.GridItemsContainer className={className}>

            {
                hamburgers.map(item =>
                    <S.Card onClick={()=> router.push('/product')} key={item.id}>
                        <S.ImageContainer>
                            <Image
                                layout="fill"
                                // objectFit="cover"
                                src={item.image}
                                alt={item.name}
                                priority
                            />
                        </S.ImageContainer>

                        <S.Title>{item.name}</S.Title>
                        <S.Subtitle>{item.merchant}</S.Subtitle>
                        <S.Bottom>
                            <S.Rating>
                                <StarFill className='star' />
                                <S.Point>{item.rating}</S.Point>
                            </S.Rating>
                            {
                                item.saved ?
                                    <IconButton>
                                        <Favorite className='heart active' />
                                    </IconButton>
                                    : <IconButton>
                                        <FavoriteBorder className='heart inactive' />
                                    </IconButton>
                            }
                        </S.Bottom>
                    </S.Card>)
            }

        </S.GridItemsContainer>
    )
}