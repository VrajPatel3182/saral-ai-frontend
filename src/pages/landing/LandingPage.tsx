import {
  ArrowRight,
  Sparkles,
  Search,
  Brain,
  Users,
  Mail,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F8FA] text-gray-900 scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-xl text-primary">
            SARAL<span className="text-indigo-400">AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#how" className="hover:text-primary">How it works</a>
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#usecases" className="hover:text-primary">Use cases</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
          </nav>

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-indigo-700"
          >
            Login
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1 rounded-full bg-indigo-100 text-primary mb-6">
              <Sparkles className="w-4 h-4" /> AI Recruiting Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Find, evaluate & engage
              <span className="text-primary"> top talent</span> using AI
            </h1>

            <p className="text-lg text-gray-600 mb-10 max-w-xl">
              SARAL AI transforms hiring by combining natural language search,
              candidate intelligence, and automated outreach — all in one place.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-indigo-700 flex items-center gap-2 shadow-lg"
              >
                Start Hiring <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#how"
                className="px-6 py-3 rounded-xl bg-white border font-semibold hover:bg-gray-50"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* AI MOCK */}
          <div className="bg-white rounded-3xl shadow-2xl border p-8">
            {/* Search Query */}
            <p className="text-sm text-gray-500 mb-4">
              “Find Senior Backend Engineer with Node.js & AWS”
            </p>

            {/* Match Progress */}
            <div className="h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-indigo-500 to-purple-500" />
            </div>

            {/* AI Results */}
            <div className="space-y-5">
              {/* Candidate 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                  A
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    Senior Backend Engineer
                  </p>
                  <p className="text-xs text-gray-500">
                    Node.js • AWS • Microservices • 8+ yrs
                  </p>
                </div>

                <span className="text-sm font-bold text-indigo-600">92%</span>
              </div>

              {/* Candidate 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                  R
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    Backend Engineer
                  </p>
                  <p className="text-xs text-gray-500">
                    AWS • Node.js • Docker • 6+ yrs
                  </p>
                </div>

                <span className="text-sm font-bold text-indigo-600">87%</span>
              </div>

              {/* Candidate 3 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-600">
                  S
                </div>

                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">
                    Full Stack Engineer
                  </p>
                  <p className="text-xs text-gray-500">
                    Node.js • React • PostgreSQL • 5+ yrs
                  </p>
                </div>

                <span className="text-sm font-bold text-indigo-600">81%</span>
              </div>
            </div>

            {/* AI Insight Footer */}
            <div className="mt-6 text-xs text-gray-500">
              AI ranked candidates based on skill match, experience depth, and role fit.
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            How SARAL AI works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Search />,
                title: "Describe the role",
                desc: "Use plain English to describe skills, experience and role expectations.",
                color: "bg-indigo-50 text-indigo-600",
              },
              {
                icon: <Brain />,
                title: "AI analyzes profiles",
                desc: "Our AI scores candidates using skills, career trajectory & signals.",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: <Mail />,
                title: "Engage automatically",
                desc: "Launch personalized email & LinkedIn outreach sequences instantly.",
                color: "bg-pink-50 text-pink-600",
              },
            ].map((s) => (
              <div key={s.title} className="p-8 rounded-3xl border shadow-sm">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.color}`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="bg-[#F7F8FA] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-16 text-center">
            Built for modern hiring teams
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <BarChart3 />,
                title: "AI Match Scoring",
                desc: "Objective scoring based on skills, tenure, growth & intent.",
              },
              {
                icon: <Users />,
                title: "Talent Pool Management",
                desc: "Organize candidates into projects and pipelines.",
              },
              {
                icon: <Mail />,
                title: "Outreach Automation",
                desc: "Multi-step email & LinkedIn campaigns with analytics.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white p-8 rounded-3xl border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-primary flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section id="pricing" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16">
            Transparent pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "₹1,299", credits: "100 Credits" },
              { name: "Growth", price: "₹4,999", credits: "500 Credits", highlight: true },
              { name: "Scale", price: "₹12,999", credits: "2000 Credits" },
            ].map((p) => (
              <div
                key={p.name}
                className={`p-8 rounded-3xl border ${p.highlight
                    ? "border-primary shadow-xl"
                    : "hover:shadow-lg"
                  }`}
              >
                <h3 className="font-bold text-lg mb-2">{p.name}</h3>
                <div className="text-4xl font-extrabold mb-1">{p.price}</div>
                <p className="text-gray-500 mb-6">{p.credits}</p>

                <ul className="space-y-3 text-sm mb-6">
                  {["AI Search", "Match Scoring", "Outreach"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/login")}
                  className={`w-full py-3 rounded-xl font-semibold ${p.highlight
                      ? "bg-primary text-white"
                      : "border hover:bg-gray-50"
                    }`}
                >
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Start hiring smarter today
          </h2>
          <p className="text-indigo-100 mb-8">
            Join modern teams using AI to hire faster and better.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:bg-gray-100"
          >
            Login to SARAL AI
          </button>
        </div>
      </section>
    </div>
  );
}
