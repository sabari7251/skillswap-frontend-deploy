import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

    const { Logout } = useAuth();
    const location = useLocation();

    const navClass = (path: string) =>
        location.pathname === path
            ? "bg-sky-100 text-sky-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl"
            : "hover:text-sky-600 transition";

    return (
        <nav className="min-h-16 md:h-20 bg-slate-100 border-b border-slate-300 rounded-xl flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 md:px-10 py-3 md:py-0">

            <div className="flex items-center gap-3 shrink-0">

                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-sm md:text-base">
                    S
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
                    SkillSwap
                </h1>

            </div>

            <div className="flex items-center gap-3 sm:gap-5 md:gap-8 text-slate-600 font-medium text-sm sm:text-base overflow-x-auto w-full md:w-auto md:flex-1 md:justify-center pb-1 md:pb-0 whitespace-nowrap order-3 md:order-none">

                <Link to="/dashboard" className={navClass("/dashboard")}>
                    Dashboard
                </Link>

                <Link to="/explore" className={navClass("/explore")}>
                    Explore
                </Link>

                <Link to="/request" className={navClass("/request")}>
                    Requests
                </Link>

                <Link to="/profile" className={navClass("/profile")}>
                    Profile
                </Link>

                <Link to="/connection" className={navClass("/connection")}>
                    My Connections
                </Link>

            </div>

            <button
                onClick={Logout}
                className="text-slate-700 hover:text-red-500 font-medium transition shrink-0 ml-auto md:ml-0 text-sm sm:text-base order-2 md:order-none"
            >
                Logout
            </button>

        </nav>
    );
}