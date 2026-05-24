import { useState } from "react";
import type { AuthResponse, LoginRequest } from "../types/AuthTypes";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";



export default function Login(){
    const[login,setLogin]=useState<LoginRequest>({
        email:'',
        password:''
    });
    const [loading, setLoading] = useState(false);


    const navigate=useNavigate();

    const {Login} = useAuth()
    async function loginUser(e:React.FormEvent){
        e.preventDefault();
        try{
            const res = await api.post<AuthResponse>("/auth/login",login)
            const data = res.data
            setLoading(true);
            Login(data.token)
            navigate("/dashboard")
        }
        catch(err){}
        finally{
            setLoading(false);
        }
    }

    return <>
        <div className="flex min-h-screen bg-slate-100">
            <div className="flex items-center justify-center w-full p-4 sm:p-6 md:p-8">
                <form className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg space-y-5" onSubmit={loginUser}>
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">Welcome Back</h1>
                        <p className="space-y-1 text-slate-500">Log in to keep swapping skills.</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-slate-700 font-medium">Email</label>
                        <input placeholder="Enter Your Email" 
                               onChange={(e)=>setLogin({...login,email:e.target.value})}
                               className="rounded-xl border p-4 border-slate-300 focus:ring-2 focus:ring-sky-400 w-full"/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-slate-700 font-medium">Password</label>
                        <input placeholder="••••••••" 
                               onChange={(e)=>setLogin({...login,password:e.target.value})}
                               className="rounded-xl border p-4 border-slate-300 focus:ring-2 focus:ring-sky-400 w-full"/>
                    </div>
                    <button disabled={loading} onClick={()=>Login} className=" bg-sky-500 h-[40px] rounded-xl w-full hover:bg-sky-600 transition text-white font-semibold">
                        {loading? "Signing in" : "Log in"}
                    </button>
                    <p className="text-center text-slate-600">
                        New Here?{" "}

                        <Link
                            to="/register"
                            className="text-sky-600 font-semibold hover:underline"
                        >
                            Create an Account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </>
}