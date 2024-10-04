import React, { createContext, useState } from 'react';

export const UserContext=createContext()

export const UserProvider = ({children})=>{
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        loggedIn:false
    })

    return(
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}