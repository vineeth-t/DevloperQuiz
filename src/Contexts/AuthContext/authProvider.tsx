import { createContext, useContext, useState } from "react";
import { setupAuthHeaderForServiceCalls } from "../../utils/headerAuthorization";
import { AuthType } from "./auth.types";

export const AuthContext=createContext<AuthType>({} as AuthType);

export const AuthenticationProvider: React.FC=({children})=>{
    const loginDetails=localStorage.getItem('loginDetails')
    const{success,token}=loginDetails?JSON.parse(loginDetails):false;
    setupAuthHeaderForServiceCalls(token);
    const[login,setLogin]=useState(success)
return(
    <AuthContext.Provider value={{login,setLogin}}>
        {children}
    </AuthContext.Provider>
)
}
export const useAuthContext=()=>{
    return useContext(AuthContext)
}