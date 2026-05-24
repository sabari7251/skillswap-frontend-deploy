import { createContext, useContext, useState } from "react"


type AuthContextType={
    token:string|null,
    Login:(token:string)=>void,
    Logout:()=>void
}

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({children}:{children:React.ReactNode}){
    const [token,setToken] = useState<string | null>(localStorage.getItem("token"))

    function Login(newToken:string){
        localStorage.setItem("token",newToken)
        setToken(newToken)
    }

    function Logout(){
        localStorage.removeItem("token")
        setToken(null)
    }

    return (
        <AuthContext.Provider 
            value={{token,Login,Logout}}>
                {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
    );
    }

    return context
}