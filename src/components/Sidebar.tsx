import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

    const location = useLocation();

    const sideClass = (path: string) =>
        location.pathname === path
            ? "bg-sky-600 text-white"
            : "hover:bg-slate-100 text-slate-700";

    return (
        <aside className="hidden md:flex mx-3 w-64 bg-slate-100 border-r border-slate-200 p-6 flex-col gap-4 shrink-0">
            <Link
                to="/dashboard"
                className={`p-3 md:p-4 rounded-2xl text-left font-semibold transition whitespace-nowrap shrink-0 ${sideClass("/dashboard")}`}
            >
                Dashboard
            </Link>

            <Link
                to="/explore"
                className={`p-3 md:p-4 rounded-2xl text-left font-semibold transition whitespace-nowrap shrink-0 ${sideClass("/explore")}`}
            >
                Explore
            </Link>

            <Link
                to="/request"
                className={`p-3 md:p-4 rounded-2xl text-left font-semibold transition whitespace-nowrap shrink-0 ${sideClass("/request")}`}
            >
                Requests
            </Link>

            <Link
                to="/profile"
                className={`p-3 md:p-4 rounded-2xl text-left font-semibold transition whitespace-nowrap shrink-0 ${sideClass("/profile")}`}
            >
                Profile
            </Link>

            <Link
                to="/connection"
                className={`p-3 md:p-4 rounded-2xl text-left font-semibold transition whitespace-nowrap shrink-0 ${sideClass("/connection")}`}
            >
                My Connections
            </Link>

        </aside>
    );
}