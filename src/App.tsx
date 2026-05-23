import { Link, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Explore from "./pages/Explore";
import Request from "./pages/Request";
import Profile from "./pages/Profile";
import Connections from "./pages/Connections";
import { ArrowsRightLeftIcon, MagnifyingGlassIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";

function Home() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-sky-50">

      {/* Navbar */}

      <nav className="min-h-16 md:h-20 border-b border-slate-200 bg-white/80 backdrop-blur flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 md:px-10 py-3 md:py-0">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-lg">
            S
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
            SkillSwap
          </h1>

        </div>


        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-end">

          <Link
            to="/login"
            className="text-slate-700 font-medium hover:text-sky-600 transition"
          >
            Log in
          </Link>

          <Link
            to="/register"
            className=" bg-gradient-to-br from-indigo-600 to-sky-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-sm sm:text-base font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>

        </div>

      </nav>


      {/* Hero Section */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 md:py-28 text-center">

        <div className="space-y-8">

          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-5 py-2 shadow-sm">

            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>

            <p className="text-slate-600 font-medium">
              Learn skills directly from real people
            </p>

          </div>


          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">

            Trade Skills.
            <br />

            <span className="bg-gradient-to-br from-indigo-600 to-sky-600 bg-clip-text text-transparent">

              Learn Together.

            </span>

          </h1>


          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed px-2">

            SkillSwap helps people teach what they know and
            learn what they don’t — without paying for expensive courses.

          </p>


          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 pt-4 px-2 sm:px-0">

            <Link
              to="/register"
              className="bg-gradient-to-br from-indigo-600 to-sky-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:opacity-90 transition text-center"
            >
              Start Learning
            </Link>


            <Link
              to="/explore"
              className="bg-white border border-slate-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold text-slate-700 hover:bg-slate-50 transition text-center"
            >
              Explore Skills
            </Link>

          </div>

        </div>


        {/* Feature Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-20 md:mt-28">

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left">

            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6">
              <MagnifyingGlassIcon className="size-8 text-indigo-600" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Find Learners
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Explore people who want to learn the skills you already know.
            </p>

          </div>


          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left">

            <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
              <ArrowsRightLeftIcon className="size-8 text-sky-600" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Swap Skills
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Send requests, connect with learners, and exchange knowledge together.
            </p>

          </div>


          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left">

            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
              <RocketLaunchIcon className="size-8 text-emerald-600" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Grow Together
            </h2>

            <p className="text-slate-500 leading-relaxed">
              Build connections, improve your skills, and learn beyond classrooms.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/explore"
        element={
          <ProtectedRoute>
            <Explore />
          </ProtectedRoute>
        }
      />

      <Route
        path="/request"
        element={
          <ProtectedRoute>
            <Request />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/connection"
        element={
          <ProtectedRoute>
            <Connections />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}