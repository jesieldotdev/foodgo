import * as React from 'react';
import Box from '@mui/material/Box';
import * as S from './styles'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Favorite, LocationOn, RecentActors, Restore } from 'styled-icons/material';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';
import { HomeOutline } from '@styled-icons/evaicons-outline/HomeOutline';
import { FavoriteBorder } from '@styled-icons/material/FavoriteBorder';
import { PersonCircle as PersonCircleV2 } from '@styled-icons/fluentui-system-filled/PersonCircle';
import { IconButton } from '@mui/material';
import { PlusLg } from 'styled-icons/bootstrap';
import Home from '../../../public/icons/fi-br-home.svg'
import User from '../../../public/icons/fi-br-user.svg'
import Comment from '../../../public/icons/fi-br-comment.svg'
import Heart from '../../../public/icons/fi-sr-heart.svg'
import Image from 'next/image';
interface BottomNavigationProps {
    className?: string
}

interface NavItem {
    value: number
    title: string
    icon: React.JSX.Element
    icon_on: React.JSX.Element
}

const navItemStyles = {
    fontFamily: 'Poppins'
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
                    icon={<div className='item'>{item.icon_on}</div> } />
                )}

            <S.FloatingActionButton

            ><PlusLg size={24} /></S.FloatingActionButton>
        </S.BottomNavContainer>
        // </Box>
    );
}

