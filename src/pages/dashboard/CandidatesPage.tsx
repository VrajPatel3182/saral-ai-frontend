import { Sparkles, ArrowUpRight } from "lucide-react";

const candidates = [
  {
    name: "Senior Backend Engineer",
    skills: "Node.js • AWS • Microservices",
    experience: "8+ years experience",
    score: 92,
    insight: "Strong system design and cloud experience",
  },
  {
    name: "Backend Engineer",
    skills: "Node.js • AWS • Docker",
    experience: "6+ years experience",
    score: 87,
    insight: "Solid backend fundamentals with scaling exposure",
  },
  {
    name: "Full Stack Engineer",
    skills: "Node.js • React • PostgreSQL",
    experience: "5+ years experience",
    score: 81,
    insight: "Good frontend-backend balance, startup background",
  },
];

export default function CandidatesPage() {
  return (
    <div className="space-y-8">
      {/* ===== HEADER ===== */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          AI-Matched Candidates
        </h1>
        <p className="text-slate-500 mt-1">
          Candidates ranked by AI based on role fit, skills, and experience.
        </p>
      </div>

      {/* ===== AI NOTE ===== */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-sm text-indigo-700 flex items-center gap-3">
        <Sparkles className="w-4 h-4" />
        AI evaluates candidates using skill match, career trajectory, and role
        intent.
      </div>

      {/* ===== CANDIDATE LIST ===== */}
      <div className="space-y-4">
        {candidates.map((c, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border p-6 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Left */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {c.name}
                </h3>
                <p className="text-sm text-slate-500">{c.skills}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {c.experience}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-6">
                {/* AI Score */}
                <div className="text-right">
                  <p className="text-xs text-slate-400 mb-1">AI Match</p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {c.score}%
                  </p>
                </div>

                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* AI Insight */}
            <div className="mt-4 text-sm text-slate-600 bg-slate-50 rounded-lg p-3">
              <strong>AI Insight:</strong> {c.insight}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
