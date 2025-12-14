import {
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

const integrations = [
  {
    id: "gmail",
    name: "Gmail",
    description:
      "Connect your Google Workspace to send AI-personalized emails directly from SARAL AI.",
    connected: true,
  },
  {
    id: "outlook",
    name: "Outlook",
    description:
      "Sync with Microsoft Outlook 365 for seamless email and calendar integration.",
    connected: false,
  },
];

export default function IntegrationsPage() {
  return (
    <div className="max-w-full space-y-8">
      {/* ===== HEADER ===== */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Integrations
        </h1>
        <p className="text-slate-500 mt-1">
          Connect your tools to enable AI-powered outreach and scheduling.
        </p>
      </div>

      {/* ===== INTEGRATION LIST ===== */}
      <div className="space-y-4">
        {integrations.map((tool) => (
          <div
            key={tool.id}
            className="bg-white rounded-2xl border p-6
                       flex items-start justify-between
                       hover:shadow-sm transition"
          >
            {/* Left */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-50 border
                              flex items-center justify-center">
                <span className="font-semibold text-slate-600">
                  {tool.name[0]}
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                  {tool.name}
                  {tool.connected && (
                    <span className="inline-flex items-center gap-1 text-xs
                                     text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      Connected
                    </span>
                  )}
                </h3>
                <p className="text-sm text-slate-500 mt-1 max-w-lg">
                  {tool.description}
                </p>
              </div>
            </div>

            {/* Right */}
            <div>
              {tool.connected ? (
                <button
                  className="px-4 py-2 rounded-lg border text-sm font-medium
                             text-slate-600 hover:bg-red-50 hover:text-red-600"
                >
                  Disconnect
                </button>
              ) : (
                <button
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white
                             text-sm font-medium hover:bg-indigo-700
                             flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ===== FOOTER NOTE ===== */}
      <div className="bg-slate-50 border border-dashed rounded-2xl p-6 text-center">
        <div className="w-10 h-10 rounded-full bg-white border
                        flex items-center justify-center mx-auto mb-3">
          <AlertCircle className="w-5 h-5 text-slate-400" />
        </div>
        <p className="text-sm font-semibold text-slate-900">
          More integrations coming soon
        </p>
        <p className="text-xs text-slate-500 mt-1">
          ATS platforms like Greenhouse and Lever are on our roadmap.
        </p>
      </div>
    </div>
  );
}
