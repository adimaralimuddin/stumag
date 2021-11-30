
import { createContext, useContext, useState } from 'react'

const Context = createContext();

export function ContextProvider(props) {

    const [auth, setAuth] = useState(null);
    const [pref, setPref] = useState(null);

    const value = { auth, setAuth, pref, setPref }

    return <Context.Provider value={value}>
        {props.children}
    </Context.Provider>
}

const useAntext = () => useContext(Context);
export default useAntext;