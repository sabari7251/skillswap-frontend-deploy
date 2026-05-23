import { useEffect, useState } from "react"
import type { User } from "../types/UserTypes"
import api from "../api/axios"
import Navbar from "../components/NavBar"
import Sidebar from "../components/Sidebar"
import ExploreCard from "../components/ExploreCard"

export default function Explore(){

    const [users,setUsers]=useState<User[]>([])

    const fetchUsers = async ()=>{
        try{
        const res = await api.get("/user/allusers")
        const data = res.data
        setUsers(data)
        console.log(data)
        }
        catch(err){}

    }

    useEffect(()=>{
        fetchUsers()
    },[])

    return <>
    <div className="min-h-screen bg-slate-100 p-2">
    
                <Navbar/>
                <main className="flex flex-col md:flex-row">
                    <Sidebar/>
                    <div className="flex-1 mx-3 sm:mx-4 md:mx-6 space-y-4 md:space-y-6 min-w-0">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 p-2">Explore Learners</h1>
                            <h3 className="text-slate-500 mt-2 text-base sm:text-lg">Find someone to swap skills with.</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                            {
                                users.map((user,i)=>(
                                    <ExploreCard user={user} key={i}/>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </main>
    </div>

    </>
}