import { useReducer } from "react";

interface PortionState {
    count: number;
}

type PortionAction = { type: 'add' | 'remove' };

type PortionReducer = (state: PortionState, action: PortionAction) => PortionState;

export const usePortionViewController = () => {
    const reducer: PortionReducer = (state, action) => {
        if (action.type === 'add') {
            return {
                ...state,
                count: state.count++
            };
        } else if (action.type === 'remove') {
            if(state.count === 0) return state
            return {
                ...state,
                count: state.count--
            }
        }
        throw new Error('Unknown action');
    };

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return { state, dispatch };
};
