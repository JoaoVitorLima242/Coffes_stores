import { PropsWithChildren, createContext } from "react";
import { Coordinates, Result } from "../@types/foursquare";

type TStoreContext = {
    coords: Coordinates
    coffeStores: Result[]
}

export const StoreContext = createContext({})

const StoreProvider = ({ children }: PropsWithChildren) => {
    const value = {}
    
    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider