import {
    LayoutDashboard,
    Folder,
    Users,
    Mail,
    Plug,
    CreditCard,
    LogOut
} from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authSlice";

const navItems = [
    { label: "Overview", icon: LayoutDashboard, link: "/dashboard" },
    { label: "Projects", icon: Folder, link: "/dashboard/projects" },
    { label: "Candidates", icon: Users, link: "/dashboard/candidates" },
    { label: "Sequences", icon: Mail, link: "/dashboard/sequences" },
    { label: "Integrations", icon: Plug, link: "/dashboard/integrations" },
    { label: "Billing", icon: CreditCard, link: "/dashboard/billing" },
];

export default function Sidebar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigation = (link: string) => {
        navigate(link);
    }

    return (
        <aside className="hidden lg:flex w-64 bg-white border-r h-screen flex-col">
            {/* Logo */}
            <div className="h-16 px-6 flex items-center text-xl font-extrabold text-indigo-600">
                SARAL<span className="text-indigo-400">AI</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1">
                {navItems.map((item) => (
                    <div
                        onClick={() => handleNavigation(item.link)}
                        key={item.label}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition"
                    >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                    </div>
                ))}
            </nav>

            {/* Logout Button */}
            <button
                onClick={() => {
                    dispatch(logout());
                    navigate("/", { replace: true });
                }}
                className="m-4 flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition"
            >
                <LogOut className="w-4 h-4" />
                Logout
            </button>


            {/* Footer hint */}
            <div className="px-6 py-4 text-xs text-slate-400 border-t">
                AI-powered recruiting
            </div>
        </aside>
    );
}
