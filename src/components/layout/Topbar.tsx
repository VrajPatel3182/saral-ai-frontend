import { Menu, Bell } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Topbar() {

    const user = useSelector((state: RootState) => state.auth.user);
    const [open, setOpen] = useState(false);

    return (
        <header className="h-16 bg-white border-b px-4 sm:px-6 flex items-center justify-between">
            {/* Left */}
            <div className="flex items-center gap-3">
                <button
                    className="lg:hidden text-slate-500"
                    onClick={() => setOpen(true)}
                >
                    <Menu className="w-5 h-5" />
                </button>
                <h1 className="text-xl font-semibold text-slate-900">
                    Dashboard
                </h1>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">
                <Bell className="w-5 h-5 text-slate-400" />
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-semibold">
                    {user?.email?.[0]?.toUpperCase() || "U"}
                </div>
            </div>

            {/* Mobile Drawer */}
            <MobileSidebar open={open} onClose={() => setOpen(false)} />
        </header>

    );
}
