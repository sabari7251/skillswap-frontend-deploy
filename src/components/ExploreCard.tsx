import type { User } from "../types/UserTypes";
import { useState } from "react";
import api from "../api/axios";




export default function ExploreCard({user}:{user:User}){

const offeredArray: string[] =user.skillsOffered
        ? user.skillsOffered.split(',').map(skill => skill.trim()) : [];   
        
    const wantedArray: string[] =user.skillsWanted
        ? user.skillsWanted.split(',').map(skill => skill.trim()): [];

    const[request,setRequest]=useState<sendRequestType>({
        receiverEmail:user.email,
        message:"",
        skill:""
    })
    
    const[sent,setSent]=useState<boolean>(false)

    type sendRequestType={
        receiverEmail:string,
        message:string,
        skill:string
    }

    const sendRequest = async ()=>{
        const req:sendRequestType={
            receiverEmail:user.email,
            message:request.message,
            skill:request.skill
        }
        try{
        const res = await api.post("/request/send",req)
        console.log(res.data)
        setSent(true)
        }
        catch(err){}

    }

    return (

    <div className="bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm border border-slate-200 flex flex-col gap-4 sm:gap-6 min-w-0">

        {/* Top Section */}

        <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full bg-sky-200 flex items-center justify-center text-2xl font-bold text-sky-700">
                {user.name.charAt(0)}
            </div>

            <div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
                    {user.name}
                </h2>

                <p className="text-slate-500 text-sm">
                    SkillSwap User
                </p>

            </div>

        </div>


        {/* Bio */}

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {user.bio}
        </p>


        {/* Skills Offered */}

        <div className="space-y-3">

            <h3 className="font-semibold text-slate-700">
                Teaches
            </h3>

            <div className="flex flex-wrap gap-3">

                {offeredArray.map((skill, i) => (

                    <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium"
                    >
                        {skill}
                    </span>
                ))}

            </div>

        </div>


        {/* Skills Wanted */}

        <div className="space-y-3">

            <h3 className="font-semibold text-slate-700">
                Wants to Learn
            </h3>

            <div className="flex flex-wrap gap-3">

                {wantedArray.map((skill, i) => (

                    <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium"
                    >
                        {skill}
                    </span>
                ))}

            </div>

        </div>

        <div className="space-y-2">

            <label className="font-medium text-slate-700">
                Skill to Learn
            </label>

        <input placeholder="Enter Skill" 
                               onChange={(e)=>setRequest({...request,skill:e.target.value})}
                               className="rounded-xl border p-4 border-slate-300 focus:ring-2 focus:ring-sky-400 w-full"/>

        </div>

        {/* Message Input */}

        <div className="space-y-2">

            <label className="font-medium text-slate-700">
                Message
            </label>

            <textarea
                placeholder="Write a request message..."

                onChange={(e) => setRequest({...request,message:e.target.value})}

                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-sky-400 resize-none"

                rows={3}
            />

        </div>


        {/* Button */}

        <button

            onClick={sendRequest}

            disabled={sent}

            className={`w-full p-4 rounded-2xl text-white font-semibold transition

                ${sent
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-br from-indigo-600 to-sky-500 hover:opacity-90"
                }
            `}
        >

            {sent ? "Request Sent" : "Send Request"}

        </button>

    </div>
)

}