import {
    LayoutDashboard,
    Folder,
    Users,
    Mail,
    Plug,
    CreditCard,
    X,
    LogOut
} from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authSlice";

interface MobileSidebarProps {
    open: boolean;
    onClose: () => void;
}

const navItems = [
    { label: "Overview", icon: LayoutDashboard, link: "/dashboard" },
    { label: "Projects", icon: Folder, link: "/dashboard/projects" },
    { label: "Candidates", icon: Users, link: "/dashboard/candidates" },
    { label: "Sequences", icon: Mail, link: "/dashboard/sequences" },
    { label: "Integrations", icon: Plug, link: "/dashboard/integrations" },
    { label: "Billing", icon: CreditCard, link: "/dashboard/billing" },
];

export default function MobileSidebar({
    open,
    onClose,
}: MobileSidebarProps) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigation = (link: string) => {
        navigate(link);
        onClose();
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 lg:hidden">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Drawer */}
            <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col animate-slide-in">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="text-xl font-extrabold text-indigo-600">
                        SARAL<span className="text-indigo-400">AI</span>
                    </div>
                    <button onClick={onClose}>
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                {/* Divider */}
                <div className="mb-3 border-t" />

                {/* Navigation */}
                <nav className="space-y-2 cursor-pointer">
                    {navItems.map((item) => (
                        <div
                            onClick={() => handleNavigation(item.link)}
                            key={item.label}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </div>
                    ))}
                </nav>

                {/* Divider */}
                <div className="my-6 border-t" />

                {/* Logout */}
                <button
                    onClick={() => {
                        dispatch(logout());
                        navigate("/", { replace: true });
                        onClose();
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition"
                >
                    <LogOut className="w-4 h-4" />
                    Logout
                </button>


                {/* Footer */}
                <div className="mt-auto pt-6 text-xs text-slate-400">
                    AI-powered recruiting
                </div>
            </aside>
        </div>
    );
}
