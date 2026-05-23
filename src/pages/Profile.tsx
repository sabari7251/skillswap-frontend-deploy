import { useEffect, useState } from "react";

import type { profileType, User } from "../types/UserTypes";

import api from "../api/axios";

import Navbar from "../components/NavBar";

import Sidebar from "../components/Sidebar";

export default function Profile() {

    const [profile, setProfile] = useState<profileType>({
        bio: "",
        skillsOffered: "",
        skillsWanted: "",
        name: ""
    });

    const [user, setUser] = useState<User>({
        id: 0,
        email: "",
        password: "",
        bio: "",
        skillsOffered: "",
        skillsWanted: "",
        name: ""
    });

    const fetchUser = async () => {

        try {

            const res = await api.get("/user/me");

            const data = res.data;

            setUser(data);

            setProfile({
                bio: data.bio || "",
                skillsOffered: data.skillsOffered || "",
                skillsWanted: data.skillsWanted || "",
                name: data.name || ""
            });

        } catch (err) {

            console.log(err);
        }
    };

    const updateProfile = async () => {

        try {

            await api.put("/user/profile", profile);

            alert("Profile Updated");

        } catch (err) {

            console.log(err);
        }
    };

    useEffect(() => {

        fetchUser();

    }, []);

    return (

        <div className="min-h-screen bg-slate-100 p-2">

            <Navbar />

            <main className="flex flex-col md:flex-row mt-4 md:mt-6">

                <Sidebar />

                <div className="flex-1 flex justify-center min-w-0 px-2 sm:px-0">

                    <div className="bg-white w-full max-w-5xl rounded-3xl shadow-sm border border-slate-200 p-5 sm:p-8 md:p-10 space-y-6 md:space-y-8 mx-2 sm:mx-4 md:mx-0">

                        {/* Top Section */}

                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">

                            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-indigo-200 flex items-center justify-center text-3xl sm:text-5xl font-bold text-indigo-700 shrink-0">

                                {profile.name.charAt(0)}

                            </div>

                            <div>

                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">

                                    {profile.name}

                                </h1>

                                <p className="text-slate-500 mt-2">

                                    Update your profile details

                                </p>

                            </div>

                        </div>


                        {/* Inputs */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="space-y-2">

                                <label className="font-medium text-slate-700">

                                    Display Name

                                </label>

                                <input
                                    type="text"

                                    value={profile.name}

                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            name: e.target.value
                                        })
                                    }

                                    className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-400"
                                />

                            </div>


                            <div className="space-y-2">

                                <label className="font-medium text-slate-700">

                                    Email

                                </label>

                                <input
                                    type="text"

                                    value={user.email}

                                    disabled

                                    className="w-full border border-slate-300 rounded-2xl p-4 bg-slate-100 text-slate-500"
                                />

                            </div>

                        </div>


                        {/* Bio */}

                        <div className="space-y-2">

                            <label className="font-medium text-slate-700">

                                Bio

                            </label>

                            <textarea

                                rows={3}

                                value={profile.bio}

                                onChange={(e) =>
                                    setProfile({
                                        ...profile,
                                        bio: e.target.value
                                    })
                                }

                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                            />

                        </div>


                        {/* Skills */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Offered */}

                            <div className="space-y-2">

                                <label className="font-medium text-slate-700">

                                    Skills I can teach

                                </label>

                                <input
                                    type="text"

                                    value={profile.skillsOffered}

                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            skillsOffered: e.target.value
                                        })
                                    }

                                    placeholder="React, Java, Spring Boot"

                                    className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-400"
                                />

                            </div>


                            {/* Wanted */}

                            <div className="space-y-2">

                                <label className="font-medium text-slate-700">

                                    Skills I want to learn

                                </label>

                                <input
                                    type="text"

                                    value={profile.skillsWanted}

                                    onChange={(e) =>
                                        setProfile({
                                            ...profile,
                                            skillsWanted: e.target.value
                                        })
                                    }

                                    placeholder="UI Design, TypeScript"

                                    className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-indigo-400"
                                />

                            </div>

                        </div>


                        {/* Buttons */}

                        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4">

                            <button className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition">

                                Cancel

                            </button>

                            <button

                                onClick={updateProfile}

                                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-sky-500 hover:opacity-90 transition text-white px-8 py-3 rounded-2xl font-semibold"
                            >

                                Save Profile

                            </button>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}