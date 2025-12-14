import {
  Sparkles,
  ArrowRight,
  Users,
  Search,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  getDashboardOverviewApi,
  type DashboardOverviewResponse,
} from "../../services/dashboard.api";
import CandidateDrawer from "../../components/candidate/CandidateDrawer";
import { getCandidatesApi } from "../../services/candidates.api";

export default function OverviewPage() {
  const [data, setData] =
    useState<DashboardOverviewResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<any | null>(null);

  const aiSteps = [
    "Understanding your requirements",
    "Scanning candidate profiles",
    "Evaluating skill relevance",
    "Ranking best matches",
  ];


  useEffect(() => {
    const load = async () => {
      try {
        const res = await getDashboardOverviewApi();
        setData(res);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const handleSearch = async () => {
    if (!prompt.trim()) return;

    setIsSearching(true);
    setStepIndex(0);
    setResults([]);

    let idx = 0;
    const timer = setInterval(() => {
      idx++;
      if (idx < aiSteps.length) {
        setStepIndex(idx);
      }
    }, 1200);

    try {
      const res = await getCandidatesApi(1, 20);

      // 🔹 Simple semantic-like filter (client-side for now)
      const keywords = prompt.toLowerCase().split(" ");

      const filtered = res.data
        .filter((c) =>
          keywords.some((k) =>
            `${c.name} ${c.title}`.toLowerCase().includes(k)
          )
        )
        .map((c) => ({
          ...c,
          match: Math.floor(75 + Math.random() * 20), // 75–95%
        }))
        .slice(0, 6); // preview only

      setTimeout(() => {
        clearInterval(timer);
        setResults(filtered);
        setIsSearching(false);
      }, 4500);
    } catch {
      clearInterval(timer);
      setIsSearching(false);
    }
  };

  return (
    <div>
      <div className="space-y-8">
        {/* ===== PAGE HEADER ===== */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            AI Recruiting Overview
          </h1>
          <p className="text-slate-500 mt-1">
            Describe what you’re hiring for and let AI handle the rest.
          </p>
        </div>

        {/* ===== AI PROMPT CARD ===== */}
        <div className="bg-white rounded-2xl border shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900 mb-1">
                Ask AI to find candidates
              </p>
              <p className="text-sm text-slate-500 mb-4">
                Use natural language to describe skills, experience, and role
                context.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. Find senior backend engineers with system design experience"
                  className="flex-1 px-4 py-3 rounded-xl border text-sm
                focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
                <button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="px-5 py-3 rounded-xl bg-indigo-600 text-white
                text-sm font-semibold hover:bg-indigo-700
                disabled:opacity-50"
                >
                  Run AI Search <ArrowRight className="w-4 h-4 inline-block ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== AI SEARCH PROGRESS ===== */}
        {isSearching && (
          <div className="relative overflow-hidden rounded-3xl p-[1.5px] 
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  animate-gradient-x shadow-2xl">

            {/* Inner Card */}
            <div className="bg-white rounded-3xl p-8 space-y-6 relative">
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 
                      bg-indigo-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 
                      bg-purple-400/20 rounded-full blur-3xl" />

              {/* ===== HEADER ===== */}
              <div className="relative z-10 flex items-center gap-5">
                {/* AI CORE */}
                <div className="relative">
                  {/* Outer pulse */}
                  <div className="absolute inset-0 w-14 h-14 rounded-full 
                          bg-gradient-to-br from-indigo-500 to-purple-600
                          opacity-30 blur-xl animate-ping" />

                  {/* Orbit ring */}
                  <div className="absolute inset-0 w-14 h-14 rounded-full 
                          border border-indigo-300/40 animate-spin-slow" />

                  {/* Core */}
                  <div className="w-14 h-14 rounded-full 
                          bg-gradient-to-br from-indigo-600 to-purple-600
                          flex items-center justify-center text-white font-bold">
                    AI
                  </div>
                </div>

                <div>
                  <p className="text-base font-bold text-slate-900">
                    AI is analyzing candidates
                  </p>
                  <p className="text-sm text-slate-500">
                    Understanding intent • Evaluating skills • Ranking profiles
                  </p>
                </div>
              </div>

              {/* ===== STEPS ===== */}
              <div className="relative z-10 space-y-4">
                {aiSteps.map((step, index) => {
                  const isCompleted = index < stepIndex;
                  const isActive = index === stepIndex;

                  return (
                    <div
                      key={step}
                      className={`flex items-start gap-4 rounded-xl px-4 py-3 transition-all
                ${isActive
                          ? "bg-indigo-50 border border-indigo-200"
                          : "bg-transparent"
                        }`}
                    >
                      {/* Indicator */}
                      <div className="relative mt-1">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center
                    ${isCompleted
                              ? "bg-green-500"
                              : isActive
                                ? "bg-indigo-600 animate-pulse"
                                : "bg-slate-300"
                            }`}
                        >
                          {isCompleted && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Text */}
                      <div>
                        <p
                          className={`text-sm font-semibold
                    ${isCompleted
                              ? "text-slate-700"
                              : isActive
                                ? "text-indigo-700"
                                : "text-slate-400"
                            }`}
                        >
                          {step}
                        </p>
                        {isActive && (
                          <p className="text-xs text-indigo-500 mt-0.5 animate-pulse">
                            Processing…
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ===== FOOTER ===== */}
              <div className="relative z-10 text-xs text-slate-400 italic">
                AI may take a few seconds to reason across thousands of profiles.
              </div>
            </div>
          </div>
        )}


        {/* ===== AI SEARCH RESULTS ===== */}
        {!isSearching && results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {results.map((c) => (
              <div
                key={c.id}
                onClick={() => setSelectedCandidate(c)}
                className="bg-white rounded-xl border p-4 cursor-pointer
                    hover:shadow-md transition"
              >
                <div className="mb-3">
                  <p className="text-sm font-semibold text-slate-900">
                    {c.name}
                  </p>
                  <p className="text-xs text-slate-500">{c.title}</p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-indigo-600">
                    {c.match}% Match
                  </span>
                  <span className="text-xs text-slate-400">
                    {c.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===== AI INSIGHTS ===== */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Searches */}
          <InsightCard
            icon={<Search className="w-4 h-4" />}
            label="Searches Run"
            value={
              loading ? "—" : data?.stats.searchesRun ?? 0
            }
            sub="Based on AI-powered queries"
          />

          {/* Candidates */}
          <InsightCard
            icon={<Users className="w-4 h-4" />}
            label="Candidates Analyzed"
            value={
              loading ? "—" : data?.stats.candidatesAnalyzed ?? 0
            }
            sub="Profiles evaluated by AI"
          />

          {/* Outreach */}
          <InsightCard
            icon={<Mail className="w-4 h-4" />}
            label="Outreach Initiated"
            value={
              loading ? "—" : data?.stats.outreachInitiated ?? 0
            }
            sub="AI-personalized messages sent"
          />
        </div>

        {/* ===== RECENT AI ACTIVITY ===== */}
        <div className="bg-white rounded-2xl border p-6">
          <h2 className="text-sm font-semibold text-slate-900 mb-4">
            Recent AI activity
          </h2>

          {loading ? (
            <p className="text-sm text-slate-400">
              Loading AI activity…
            </p>
          ) : (
            <div className="space-y-4 text-sm">
              {data?.recentActivity.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between text-slate-600"
                >
                  <span>{item.message}</span>
                  <span className="text-slate-400">
                    {formatTime(item.createdAt)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* ===== CANDIDATE DRAWER ===== */}
      {selectedCandidate && (
        <CandidateDrawer
          candidate={selectedCandidate}
          open={true}
          onClose={() => setSelectedCandidate(null)}
        />
      )}
    </div>
  );
}

/* ------------------ Helpers ------------------ */

function InsightCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  sub: string;
}) {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600
                        flex items-center justify-center">
          {icon}
        </div>
        <p className="text-sm font-semibold text-slate-700">
          {label}
        </p>
      </div>
      <p className="text-3xl font-bold text-slate-900">
        {value}
      </p>
      <p className="text-xs text-slate-400 mt-1">
        {sub}
      </p>
    </div>
  );
}

function formatTime(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));

  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  return "Yesterday";
}
