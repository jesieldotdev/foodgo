import { IconButton } from '@mui/material'
import * as S from './styles'
import {Minus} from '@styled-icons/typicons/Minus'
import Plus from '../../../public/icons/Group 17.svg'
import { usePortionViewController } from './useViewController'

interface PortionProps {

}

export const Portion = ({ }: PortionProps) => {
    const {state, dispatch} = usePortionViewController()
    return (
        <S.PortionContainer>
            <S.Label>Portion</S.Label>
            <S.Controls>
                <S.Button onClick={() => dispatch({type: 'remove'})}>
                    <Minus className='icon'/>
                </S.Button>
                <S.Value>{state.count}</S.Value>
                <S.Button
                onClick={() => dispatch({type: 'add'})}
                >
                    <Plus size={24} />
                </S.Button>
            </S.Controls>
        </S.PortionContainer>
    )
}