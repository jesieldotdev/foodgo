import * as React from 'react';
import * as S from './styles'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from '../../../public/icons/fi-br-home.svg'
import User from '../../../public/icons/fi-br-user.svg'
import Comment from '../../../public/icons/fi-br-comment.svg'
import Heart from '../../../public/icons/fi-sr-heart.svg'
import Plus from '../../../public/icons/Group 17.svg'
interface BottomNavigationProps {
    className?: string
}

interface NavItem {
    value: number
    title: string
    icon: React.JSX.Element
    icon_on: React.JSX.Element
}

export default function SimpleBottomNavigation({ className }: BottomNavigationProps) {
    const [value, setValue] = React.useState(0);

    const items: NavItem[] = [
        {
            value: 0,
            title: 'Home',
            icon: <Home className='icon' />,
            icon_on: <Home className='icon on' />,
        },
        {
            value: 1,
            title: 'User',
            icon: <User className='icon' />,
            icon_on: <User className='icon on' />,
        },
        {
            value: 2,
            title: 'Comment',
            icon: <Comment className='icon' />,
            icon_on: <Comment className='icon on' />,
        },
        {
            value: 3,
            title: 'Favorites',
            icon: <Heart className='icon' />,
            icon_on: <Heart className='icon on' />,
        },
    ]

    return (
        <S.BottomNavContainer
            className={className}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >

            {
                items.map(item => <BottomNavigationAction
                    key={item.value}
                    classes={{ label: 'custom_label', selected: 'on', root: 'root' }}
                    label={item.title}
                    disableRipple
                    icon={<div className='item'>{item.icon_on}</div>} />
                )}

            <S.FloatActionContainer>asd
                <S.FloatingActionButton>
                    <Plus size={24} />
                </S.FloatingActionButton>
            </S.FloatActionContainer>
        </S.BottomNavContainer>
        // </Box>
    );
}

