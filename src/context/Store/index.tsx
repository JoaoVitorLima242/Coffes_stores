import { PropsWithChildren, createContext, useReducer } from "react";
import { ACTION_TYPES, ReducerAction, ReducerState, StoreReducer, TStoreContext } from './types'

export const StoreContext = createContext({} as TStoreContext)

const storeReducer: StoreReducer = (state: ReducerState, action: ReducerAction) => {
    switch(action.type) {
        case ACTION_TYPES.SET_COORDS: {
            return {
                ...state,
                coords: action.payload.coords
            }
        }
        case ACTION_TYPES.SET_COFFE_STORES: {
            return {
                ...state,
                coffeStores: action.payload.coffeStores
            }
        }
        default:
            return state
    }
}

const StoreProvider = ({ children }: PropsWithChildren) => {
    const initialState: ReducerState = {
        coords: {
            latitude: -30.012105049907593,
            longitude: -51.146366877470136 
        },
        coffeStores: []
    }

    const [state, dispatch] = useReducer(storeReducer, initialState)

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider