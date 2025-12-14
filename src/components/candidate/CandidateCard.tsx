import { ArrowUpRight } from "lucide-react";

interface Props {
  candidate: any;
  isSearchResult?: boolean;
  onClick: () => void;
}

export default function CandidateListCard({
  candidate: c,
  isSearchResult = false,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`group bg-white rounded-2xl p-6 cursor-pointer
        transition-all hover:shadow-xl
        ${
          isSearchResult
            ? "border-2 border-indigo-400 shadow-indigo-100"
            : "border hover:border-indigo-200"
        }`}
    >
      <div className="flex justify-between gap-6">
        {/* LEFT */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900
                         group-hover:text-indigo-600 transition">
            {c.name}
          </h3>

          <p className="text-sm text-slate-600">
            {c.title}
          </p>

          <p className="text-xs text-slate-400">
            {c.experienceYears
              ? `${c.experienceYears}+ years experience`
              : c.experience}
          </p>

          {/* Skills */}
          {c.skills && (
            <div className="flex flex-wrap gap-2 pt-2">
              {c.skills
                .split("•")
                .slice(0, 3)
                .map((skill: string) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-indigo-600
                               bg-indigo-50 px-2.5 py-1 rounded-full"
                  >
                    {skill.trim()}
                  </span>
                ))}
            </div>
          )}
        </div>

        {/* RIGHT SCORE */}
        {c.score && (
          <div className="flex flex-col items-end justify-between">
            <div className="text-right">
              <p className="text-xs text-slate-400 mb-1">
                AI Match
              </p>

              <div
                className={`text-3xl font-bold ${
                  c.score >= 85
                    ? "text-green-600"
                    : c.score >= 75
                    ? "text-indigo-600"
                    : "text-yellow-600"
                }`}
              >
                {c.score}%
              </div>
            </div>

            <ArrowUpRight
              className="w-5 h-5 text-slate-300
                         group-hover:text-indigo-600 transition"
            />
          </div>
        )}
      </div>

      {/* AI Insight */}
      {c.insight && (
        <div className="mt-5 bg-gradient-to-r from-slate-50 to-indigo-50
                        border border-indigo-100 rounded-xl p-4 text-sm">
          <span className="font-semibold text-indigo-700">
            AI Insight:
          </span>{" "}
          <span className="text-slate-700">
            {c.insight}
          </span>
        </div>
      )}
    </div>
  );
}
