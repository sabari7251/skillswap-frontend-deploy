export default function Sidebar() {
    return (
        <div className="hidden md:flex flex-col justify-between w-1/2 min-h-screen bg-gradient-to-br from-indigo-600 to-sky-700 text-white p-8 lg:p-12">

            <div>
                <h1 className="text-3xl font-bold mb-16">
                    SkillSwap
                </h1>

                <div className="space-y-8">
                    <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                        Trade what you know.
                        <br />
                        Learn what you don’t.
                    </h2>

                    <p className="text-lg text-slate-100 max-w-md">
                        Join a community of learners who teach each other
                        instead of paying for expensive courses.
                    </p>

                    <div className="space-y-4 pt-6 text-lg">
                        <p>Teach your skills</p>
                        <p>Learn from real people</p>
                        <p>Build meaningful connections</p>
                        <p>Grow together</p>
                    </div>
                </div>
            </div>

            <p className="text-sm text-slate-200">
                © SkillSwap — peer powered learning
            </p>
        </div>
    );
}