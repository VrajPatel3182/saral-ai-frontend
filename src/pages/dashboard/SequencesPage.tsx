import {
  Mail,
  Linkedin,
  Plus,
  ArrowUpRight,
  Send,
  Users,
  BarChart3,
  Clock,
} from "lucide-react";

const sequences = [
  {
    name: "Senior Backend Outreach",
    status: "ACTIVE",
    steps: 5,
    sent: 420,
    replied: 68,
  },
  {
    name: "Frontend Hiring – Design Systems",
    status: "DRAFT",
    steps: 4,
    sent: 0,
    replied: 0,
  },
  {
    name: "Founding Engineers Campaign",
    status: "PAUSED",
    steps: 6,
    sent: 212,
    replied: 31,
  },
];

export default function SequencesPage() {
  return (
    <div className="space-y-8">
      {/* ===== HEADER ===== */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Outreach Sequences
          </h1>
          <p className="text-slate-500 mt-1">
            AI-assisted email and LinkedIn campaigns to engage candidates.
          </p>
        </div>

        <button
          className="inline-flex items-center gap-2 px-4 py-2.5
                     rounded-lg bg-indigo-600 text-white text-sm font-semibold
                     hover:bg-indigo-700"
        >
          <Plus className="w-4 h-4" />
          New Sequence
        </button>
      </div>

      {/* ===== TABS ===== */}
      <div className="flex gap-2 bg-white border rounded-xl p-1 w-fit">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg
                           text-sm font-semibold bg-indigo-50 text-indigo-600">
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg
                           text-sm font-semibold text-slate-600 hover:bg-slate-50">
          <Mail className="w-4 h-4" />
          Email
        </button>
      </div>

      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600
                            flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-600">
              Requests Sent
            </p>
          </div>
          <p className="text-3xl font-bold text-slate-900">1,284</p>
          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> +12% this week
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600
                            flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-600">
              Connection Rate
            </p>
          </div>
          <p className="text-3xl font-bold text-slate-900">48.2%</p>
          <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> +2.4% this week
          </p>
        </div>

        <div className="bg-white rounded-2xl border p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600
                            flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
            <p className="text-sm font-semibold text-slate-600">
              Reply Rate
            </p>
          </div>
          <p className="text-3xl font-bold text-slate-900">15.8%</p>
          <p className="text-xs text-slate-400 mt-1">
            Stable
          </p>
        </div>
      </div>

      {/* ===== LIST ===== */}
      <div className="bg-white rounded-2xl border overflow-hidden">
        {/* Header */}
        <div className="px-6 py-3 border-b text-xs font-semibold text-slate-500 uppercase grid grid-cols-6">
          <span className="col-span-2">Campaign</span>
          <span>Status</span>
          <span>Steps</span>
          <span>Sent</span>
          <span>Replied</span>
        </div>

        {/* Rows */}
        {sequences.map((seq) => (
          <div
            key={seq.name}
            className="px-6 py-4 border-b last:border-0
                       grid grid-cols-6 items-center
                       hover:bg-slate-50 transition cursor-pointer"
          >
            <div className="col-span-2">
              <p className="font-semibold text-slate-900 text-sm">
                {seq.name}
              </p>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Updated recently
              </p>
            </div>

            <span className="text-xs font-semibold text-indigo-600">
              {seq.status}
            </span>
            <span className="text-sm text-slate-700">
              {seq.steps}
            </span>
            <span className="text-sm text-slate-700">
              {seq.sent}
            </span>
            <span className="text-sm text-slate-700">
              {seq.replied}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
