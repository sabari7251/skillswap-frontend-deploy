import { useEffect, useState } from "react";

import api from "../api/axios";

import Navbar from "../components/NavBar";

import Sidebar from "../components/Sidebar";

import ConnectionCard from "../components/ConnectionCard";

type viewRequestType = {
    id: number,
    name: string,
    message: string,
    skill: string,
    status: string,
    email: string
}

export default function Connections() {

    const [requests, setRequests] = useState<viewRequestType[]>([]);

    const fetchRequests = async () => {

        try {

            const res = await api.get("/request/viewmyrequest");

            setRequests(res.data);

        } catch (err) {

            console.log(err);
        }
    };

    useEffect(() => {

        fetchRequests();

    }, []);


    const acceptedRequests = requests.filter(
        request => request.status === "ACCEPTED"
    );

    const pendingRequests = requests.filter(
        request => request.status === "PENDING"
    );


    return (

        <div className="min-h-screen bg-slate-100 p-2">

            <Navbar />

            <main className="flex flex-col md:flex-row mt-4 md:mt-6">

                <Sidebar />

                <div className="flex-1 px-4 sm:px-6 md:px-10 min-w-0">

                    <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">

                        {/* Header */}

                        <div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">

                                My Connections

                            </h1>

                            <p className="text-slate-500 mt-3 text-base sm:text-lg">

                                Track your accepted and pending skill swaps.

                            </p>

                        </div>


                        {/* Accepted */}

                        <div className="space-y-6">

                            <div className="flex items-center justify-between">

                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">

                                    Accepted

                                </h2>

                                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">

                                    {acceptedRequests.length}

                                </span>

                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                                {acceptedRequests.map((request) => (

                                    <ConnectionCard
                                        key={request.id}
                                        request={request}
                                    />

                                ))}

                            </div>

                        </div>


                        {/* Pending */}

                        <div className="space-y-6">

                            <div className="flex items-center justify-between">

                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">

                                    Pending

                                </h2>

                                <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold">

                                    {pendingRequests.length}

                                </span>

                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                                {pendingRequests.map((request) => (

                                    <ConnectionCard
                                        key={request.id}
                                        request={request}
                                    />

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}