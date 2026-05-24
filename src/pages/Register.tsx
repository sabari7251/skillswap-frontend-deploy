import { useState } from "react";
import type { RegisterRequest } from "../types/AuthTypes";
import { Link } from "react-router-dom";
import RegSidebar from "../components/RegSidebar";
import api from "../api/axios";

export default function Register() {

    const [register, setRegister] = useState<RegisterRequest>({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function registerUser(e: React.FormEvent) {

    e.preventDefault();

    setError(null);

    setLoading(true);

    try {

        await api.post(
            "/auth/register",
            register
        );


    } catch (err: any) {

        setError(
            err.response?.data?.message ||
            "Registration failed"
        );

    } finally {

        setLoading(false);
    }

    }

    return (

        <div className="flex min-h-screen bg-slate-100">

            <RegSidebar />

            <div className="flex items-center justify-center w-full md:w-1/2 p-4 sm:p-6 md:p-8">

                <form
                    className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg space-y-5"
                    onSubmit={registerUser}
                >

                    {error && (
                        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl p-3">
                            {error}
                        </p>
                    )}

                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
                            Create Account
                        </h1>

                        <p className="text-slate-500">
                            Start your learning journey today.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label className="font-medium text-slate-700">
                            Full Name
                        </label>

                        <input
                            type="text"

                            placeholder="John Doe"

                            className="w-full p-4 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-400"

                            onChange={(e) =>
                                setRegister({
                                    ...register,
                                    name: e.target.value
                                })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-medium text-slate-700">
                            Email
                        </label>

                        <input
                            type="email"

                            placeholder="you@example.com"

                            className="w-full p-4 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-400"

                            onChange={(e) =>
                                setRegister({
                                    ...register,
                                    email: e.target.value
                                })
                            }
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="font-medium text-slate-700">
                            Password
                        </label>

                        <input
                            type="password"

                            placeholder="••••••••"

                            className="w-full p-4 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-emerald-400"

                            onChange={(e) =>
                                setRegister({
                                    ...register,
                                    password: e.target.value
                                })
                            }
                        />
                    </div>

                    <button
                        type="submit"

                        disabled={loading}
                        className="w-full bg-sky-500 hover:bg-sky-600 transition text-white font-semibold p-4 rounded-xl disabled:opacity-60"
                    >
                        {loading ? "Creating account..." : "Create Account"}
                    </button>

                    <p className="text-center text-slate-600">
                        Already a member?{" "}

                        <Link
                            to="/login"
                            className="text-sky-600 font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </form>

            </div>

        </div>
    );
}