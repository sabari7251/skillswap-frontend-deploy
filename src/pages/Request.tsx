import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import RequestCard from "../components/RequestCard";


export default function Request() {

    type viewRequestType = {
        id: number,
        name: string,
        message: string,
        skill: string,
        status: string,
        email:string
    }
    const [requests, setRequests] = useState<viewRequestType[]>([])

    const fetchRequests = async () => {
        const res = await api.get("/request/viewlite")
        setRequests(res.data)
        console.log(res.data)
    }

    useEffect(() => {
        fetchRequests()
    }, [])


    return <>
        <div className="min-h-screen bg-slate-100 p-2">

            <Navbar />
            <main className="flex flex-col md:flex-row">
                <Sidebar />
                <div className="flex-1 px-4 sm:px-6 md:px-10 py-4 md:py-6 min-w-0">

                    <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">

                        <div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
                                Incoming requests
                            </h1>

                            <p className="text-slate-500 mt-3 text-base sm:text-lg">
                                People who want to swap a skill with you.
                            </p>

                        </div>

                        <div className="space-y-6">

                            {requests.map((request, i) => (

                                <RequestCard
                                    request={request}
                                    key={i}
                                />

                            ))}

                        </div>

                    </div>

                </div>
            </main>
        </div>
    </>
}


