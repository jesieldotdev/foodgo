import { IconButton } from '@mui/material'
import * as S from './styles'
import {Minus} from '@styled-icons/typicons/Minus'
import Plus from '../../../public/icons/Group 17.svg'

interface PortionProps {

}

export const Portion = ({ }: PortionProps) => {
    return (
        <S.PortionContainer>
            <S.Label>Portion</S.Label>
            <S.Controls>
                <S.Button>
                    <Minus className='icon'/>
                </S.Button>
                <S.Value>2</S.Value>
                <S.Button>
                    <Plus size={24} />
                </S.Button>
            </S.Controls>
        </S.PortionContainer>
    )
}