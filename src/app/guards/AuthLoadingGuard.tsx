import { useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function AuthLoadingGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const loading = useSelector((state: RootState) => state.auth.loading);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA]">
        <div className="text-slate-500 text-sm">
          Checking authentication…
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
