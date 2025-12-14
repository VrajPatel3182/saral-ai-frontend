import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMeApi } from "../services/auth.api";
import { setUser, authFailed } from "../store/auth/authSlice";
import type { RootState } from "../store";

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const { token, initialized } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!token) {
      dispatch(authFailed());
      return;
    }

    const hydrateUser = async () => {
      try {
        const user = await getMeApi();
        dispatch(setUser(user));
      } catch {
        dispatch(authFailed());
      }
    };

    hydrateUser();
  }, [token, dispatch]);

  if (!initialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA]">
        <p className="text-sm text-slate-500">Initializing session…</p>
      </div>
    );
  }

  return <>{children}</>;
}
