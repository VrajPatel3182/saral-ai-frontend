export default function CandidateCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border p-6 animate-pulse">
      <div className="flex justify-between items-start">
        {/* Left */}
        <div className="space-y-3 w-2/3">
          <div className="h-4 w-40 bg-slate-200 rounded" />
          <div className="h-3 w-56 bg-slate-100 rounded" />
          <div className="h-2.5 w-24 bg-slate-100 rounded" />
        </div>

        {/* Right */}
        <div className="space-y-2 text-right">
          <div className="h-2.5 w-14 bg-slate-100 rounded ml-auto" />
          <div className="h-6 w-12 bg-slate-200 rounded ml-auto" />
        </div>
      </div>

      {/* Insight */}
      <div className="mt-4 h-10 bg-slate-100 rounded-lg" />
    </div>
  );
}
