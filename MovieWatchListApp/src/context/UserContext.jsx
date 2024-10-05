import React, { createContext, useState } from 'react';

export const UserContext=createContext()

export const UserProvider = ({children})=>{
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        password:"",
        loggedIn:false,
        watchlist:[]
    })

    const [listofUsers, setlistofUsers] =useState(
        localStorage.getItem("listofusers") || []
    )

    return(
        <UserContext.Provider value={{userData,setUserData,setlistofUsers,listofUsers}}>
            {children}
        </UserContext.Provider>
    )
}