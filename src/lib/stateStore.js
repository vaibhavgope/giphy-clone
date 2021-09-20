import { createContext, useContext, useState } from "react";

const StateContext = createContext()

function StateProvider({ children }) {

    const [searchTerm, setSearchTerm] = useState('')

    return <StateContext.Provider
        value={{
            searchTerm,
            setSearchTerm,
        }}
    >
        {children}
    </StateContext.Provider>
}

function useStateContext() {
    return useContext(StateContext)
}

export { StateProvider, useStateContext }