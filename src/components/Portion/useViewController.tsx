import { useReducer } from "react";

// Define o tipo para o estado
interface PortionState {
    count: number;
}

// Define o tipo para as ações
type PortionAction = { type: 'add' | 'remove' };

// Define o tipo para a função reducer
type PortionReducer = (state: PortionState, action: PortionAction) => PortionState;

interface PortionViewControllerProps { }

// Use a função usePortionViewController
export const usePortionViewController = () => {
    // Define a função reducer
    const reducer: PortionReducer = (state, action) => {
        if (action.type === 'add') {
            return {
                ...state,
                count: state.count + 1 // corrigindo a atualização do contador
            };
        } else if (action.type === 'remove') {
            return {
                ...state,
                count: state.count - 1
            }
        }
        throw new Error('Unknown action');
    };

    // Utiliza o useReducer com a função reducer e o estado inicial
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return { state, dispatch };
};
