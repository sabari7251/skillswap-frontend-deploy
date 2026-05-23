type viewRequestType = {
    id: number,
    name: string,
    message: string,
    skill: string,
    status: string,
    email: string
}

export default function ConnectionCard({
    request
}: {
    request: viewRequestType
}) {

    return (

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 min-w-0">

            {/* Top */}

            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">

                <div className="flex gap-3 sm:gap-4 min-w-0">

                    {/* Avatar */}

                    <div className="w-16 h-16 rounded-full bg-indigo-200 flex items-center justify-center text-2xl font-bold text-indigo-700">

                        {request.name.charAt(0)}

                    </div>


                    {/* Details */}

                    <div className="space-y-2">

                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">

                            {request.name}

                        </h1>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">

                            <p className="font-medium text-slate-700 text-sm sm:text-base">

                            {request.status === "ACCEPTED"
                            ? "Agreed to Teach"
                            : "Required to Teach"
                            }

                            </p>

                            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">

                                {request.skill}

                            </span>

                        </div>

                    </div>

                </div>


                {/* Status */}

                <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold shrink-0 self-start sm:self-auto

                    ${request.status === "ACCEPTED"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                `}
                >

                    {request.status}

                </span>

            </div>


            {/* Message */}

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col gap-3">

                <h2 className="text-2xl font-semibold text-slate-800">Our Message </h2>


                <p className="text-slate-600 text-lg leading-relaxed">

                    "{request.message}"

                </p>

            </div>


            {/* Contact */}

            {request.status === "ACCEPTED" && (

                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                    <p className="text-indigo-700 font-medium">
                        Contact to {request.name} :
                    </p>
                    <p className="text-slate-700 mt-2">
                        {request.email}
                    </p>
                </div>

            )}

        </div>
    )
}