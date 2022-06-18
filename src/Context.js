import { createContext, useReducer } from "react";
export const themContext = createContext()
const inititlState = { darkMode: false }
const themReducer = (state, action) => {
    switch (action.type) {
        case "toggle":
            return { darkMode: !state.darkMode }
        default:
            return state
    }
};
export const ThemProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themReducer, inititlState)
    return (
        <themContext.Provider value={{ state, dispatch }}>
            {children}
        </themContext.Provider>
    )
}

