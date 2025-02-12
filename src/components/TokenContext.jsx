import React, { createContext, useEffect, useState } from "react";

const TokenContext = createContext();

function TokenProvider({children}){
    const [token,setToken] = useState(null);    
    useEffect(()=>{
        const storeToken= localStorage.getItem('token');
        if(storeToken){
            setToken(storeToken);
        }
    },[])
    
    const handleToken = (newToken) =>{
        setToken(newToken);
        localStorage.setItem('token',newToken);
    }

    return(
        <TokenContext.Provider value={{token , setToken: handleToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export {TokenContext,TokenProvider};
