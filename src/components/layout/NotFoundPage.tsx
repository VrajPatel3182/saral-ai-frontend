import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F7F8FA] flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-white rounded-3xl border shadow-sm p-8 text-center">
                {/* Logo / Brand */}
                <div className="text-2xl font-extrabold text-indigo-600 mb-4">
                    SARAL<span className="text-indigo-400">AI</span>
                </div>

                {/* Code */}
                <p className="text-sm text-slate-400 mb-1">404</p>

                {/* Heading */}
                <h1 className="text-2xl font-bold text-slate-900 mb-2">
                    Page not found
                </h1>

                {/* Description */}
                <p className="text-slate-500 mb-8">
                    The page you’re looking for doesn’t exist or may have been moved.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium hover:bg-slate-50"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go back
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
