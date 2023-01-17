import { Coordinates, Result } from "../../@types/foursquare";

export type TStoreContext = {
    state: ReducerState,
    dispatch: Dispatch<ReducerAction>
}

export enum ACTION_TYPES {
    SET_COORDS = 'SET_COORDS',
    SET_COFFE_STORES = 'SET_COFFE_STORES'
}

export type ReducerAction = {
    type: ACTION_TYPES
    payload: ReducerState
}

export type ReducerState = {
    coords: Coordinates
    coffeStores: Result[]
}

export type StoreReducer = (state: ReducerState, action: ReducerAction) => ReducerState