import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import type { profileType } from "../types/UserTypes";
import api from "../api/axios";
import { AcademicCapIcon,BookOpenIcon,InboxIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {

    const[profile,setProfile]=useState<profileType>({
        bio:'',
        skillsOffered:'',
        skillsWanted:'',
        name:''
    })

    type viewRequestLiteType = {
        id:number,
        name:string,
        message:string
    }

    const[requests,setRequests]=useState<viewRequestLiteType[]>([])

    const offeredArray: string[] =profile.skillsOffered
        ? profile.skillsOffered.split(',').map(skill => skill.trim()) : [];   
        
    const wantedArray: string[] =profile.skillsWanted
        ? profile.skillsWanted.split(',').map(skill => skill.trim()): [];

    const fetchProfile = async ()=>{
        try{
            const res = await api.get("/user/myprofile")
            const data = res.data
            setProfile(data)
        }
        catch(err){console.log(err)}
    }

    const fetchRequest = async ()=>{
        try{
            const res = await api.get("/request/viewlite")
            const data = res.data
            setRequests(data)
        }
        catch(err){console.log(err)}
    }


    

    useEffect(()=>{
        fetchProfile()
        fetchRequest()
    },[])

    
    return (

        <div className="min-h-screen bg-slate-100 p-2">

            <Navbar/>
            <main className="flex flex-col md:flex-row">
                <Sidebar/>
                <div className="flex-1 mx-3 sm:mx-4 md:mx-6 space-y-4 md:space-y-6 min-w-0">

    {/* Hero Card */}

    <div className="bg-gradient-to-r from-indigo-600 to-sky-500 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-3 p-5 sm:p-6 md:p-8 shadow-sm">

        <div className="flex flex-col gap-3">

            <h3 className="text-slate-200 text-lg font-semibold">
                WELCOME BACK
            </h3>

            <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
                {profile.name}
            </h1>

            <p className="text-slate-200 text-lg">
                You have {requests.length} new requests waiting
            </p>
        </div>

        <Link
            to="/explore"
            className="bg-white text-slate-800 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-slate-100 transition w-full sm:w-auto text-center shrink-0"
        >
            Find a Swap
        </Link>
    </div>


    {/* Stats Cards */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Skills Offered */}

        <div className="bg-white rounded-3xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-sm">

            <div className="bg-indigo-100 p-4 rounded-2xl">
                <AcademicCapIcon className="size-8 text-indigo-600" />
            </div>

            <div>
                <h1 className="text-4xl font-bold text-slate-800">
                    {offeredArray.length}
                </h1>

                <p className="text-slate-500">
                    Skills Offered
                </p>
            </div>

        </div>


        {/* Skills Wanted */}

        <div className="bg-white rounded-3xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-sm">

            <div className="bg-sky-100 p-4 rounded-2xl">
                <BookOpenIcon className="size-8 text-sky-600" />
            </div>

            <div>
                <h1 className="text-4xl font-bold text-slate-800">
                    {wantedArray.length}
                </h1>

                <p className="text-slate-500">
                    Skills Wanted
                </p>
            </div>

        </div>


        {/* Requests */}

        <div className="bg-white rounded-3xl p-4 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-sm">

            <div className="bg-cyan-100 p-4 rounded-2xl">
                <InboxIcon className="size-8 text-cyan-600" />
            </div>

            <div>
                <h1 className="text-4xl font-bold text-slate-800">
                    {requests.length}
                </h1>

                <p className="text-slate-500">
                    Open Requests
                </p>
            </div>

        </div>

    </div>


    {/* Bottom Grid */}

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Profile Card */}

        <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm space-y-6">

            <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-slate-800">
                    Your Profile
                </h2>

                <button className="text-indigo-600 font-medium">
                    Edit
                </button>
            </div>

            <p className="text-slate-600 leading-relaxed">
                {profile.bio}
            </p>


            {/* Skills Offered */}

            <div className="space-y-3">

                <h3 className="font-semibold text-slate-700">
                    Skills Offered
                </h3>

                <div className="flex flex-wrap gap-3">

                    {offeredArray.map((skill, index) => (

                        <span
                            key={index}
                            className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}

                </div>

            </div>


            {/* Skills Wanted */}

            <div className="space-y-3">

                <h3 className="font-semibold text-slate-700">
                    Skills Wanted
                </h3>

                <div className="flex flex-wrap gap-3">

                    {wantedArray.map((skill, index) => (

                        <span
                            key={index}
                            className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}

                </div>

            </div>

        </div>


        {/* Recent Requests */}

        <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold text-slate-800">
                    Recent Requests
                </h2>

                <button className="text-indigo-600 font-medium">
                    View All
                </button>

            </div>


            <div className="space-y-5">

                {requests.map((request) => (

                    <div
                        key={request.id}
                        className="border-b border-slate-100 pb-4"
                    >

                        <h3 className="font-semibold text-slate-800">
                            {request.name}
                        </h3>

                        <p className="text-slate-500 mt-1 text-sm">
                            {request.message}
                        </p>

                    </div>

                ))}

            </div>

            </div>

        </div>

        </div>          
         
        </main>
        </div>
    );
}