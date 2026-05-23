import { useState } from "react";
import api from "../api/axios";

type viewRequestType = {
        id:number,
        name:string,
        message:string,
        skill:string,
        status:string,
        email:string
    } 

export default function RequestCard({request}:{request:viewRequestType}){

    const [accepted,setAccepted]=useState<boolean>(false)
    const [rejected,setRejected]=useState<boolean>(false)

    const acceptRequest = async ()=>{
        try{
            const res = await api.put(`/request/${request.id}/accept`)
            setAccepted(true)

        }
        catch(err){console.log(err)}
    }

    const rejectRequest = async ()=>{
        try{
            const res = await api.put(`/request/${request.id}/reject`)
            setRejected(true)

        }
        catch(err){console.log(err)}
    }


    return (

    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 md:p-8">

        {/* Top */}

        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">

            <div className="flex gap-4 sm:gap-5 min-w-0">

                {/* Avatar */}

                <div className="w-14 h-14 rounded-full bg-indigo-200 flex items-center justify-center text-2xl font-bold text-indigo-700">

                    {request.name.charAt(0)}

                </div>


                {/* Content */}

                <div className="space-y-3">

                    <div className="flex items-center gap-3">

                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">

                            {request.name}

                        </h1>

                    </div>


                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                        <p className="font-semibold text-slate-700 text-sm sm:text-base">

                            Wants to learn

                        </p>

                        <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">

                            {request.skill}

                        </span>

                    </div>

                </div>

            </div>


            <p className="text-slate-400 text-sm font-medium shrink-0 sm:ml-4">
                Recently
            </p>

        </div>


        {/* Message */}

        <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl px-4 sm:px-6 py-4 sm:py-5">

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed break-words">

                "{request.message}"

            </p>

        </div>

        {

        }


        {/* Buttons */}

        <div className="mt-6">

            {(accepted || request.status === "ACCEPTED") ? (

                <div className="">

                <button className="bg-gradient-to-r from-emerald-400 to-teal-600 text-white px-8 py-3 rounded-2xl font-semibold">

                    Accepted

                </button>

                <div className="bg-indigo-50 border mt-2 border-indigo-100 rounded-2xl p-5">
                    <p className="text-indigo-700 font-medium">
                        Contact to {request.name} :
                    </p>
                    <p className="text-slate-700 mt-2">
                        {request.email}
                    </p>
                </div>

                </div>
            ) : (rejected || request.status === "REJECTED") ? (

                <button className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-2xl font-semibold">

                    Rejected

                </button>

            ) : (

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                    <button

                        onClick={acceptRequest}

                        className="bg-gradient-to-r from-emerald-400 to-teal-600 hover:opacity-90 transition text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold shadow-sm w-full sm:w-auto"
                    >

                        Accept

                    </button>


                    <button

                        onClick={rejectRequest}

                        className=" bg-gradient-to-r from-red-500 to-orange-600 hover:opacity-90 transition text-white px-6 sm:px-8 py-3 rounded-2xl font-semibold shadow-sm w-full sm:w-auto"
                    >

                        Reject

                    </button>

                </div>

            )}

        </div>

    </div>
)
}



