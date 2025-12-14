import { Plus, Folder, ArrowRight } from "lucide-react";

const projects = [
    {
        name: "Frontend Hiring – Q3",
        description: "React, TypeScript, design systems, leadership roles",
        updated: "Updated 2 hours ago",
    },
    {
        name: "Backend Platform Team",
        description: "Node.js, AWS, microservices, scalability",
        updated: "Updated yesterday",
    },
    {
        name: "Founding Engineers",
        description: "Full-stack engineers with startup experience",
        updated: "Updated 3 days ago",
    },
];

export default function ProjectsPage() {
    return (
        <div className="space-y-8">
            {/* ===== HEADER ===== */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Projects
                    </h1>
                    <p className="text-slate-500 mt-1">
                        Projects help AI understand hiring context and intent.
                    </p>
                </div>

                <button
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700"
                >
                    <Plus className="w-4 h-4" />
                    New Project
                </button>
            </div>

            {/* ===== PROJECT LIST ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="bg-white rounded-2xl border p-6 hover:shadow-md transition cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="w-10 h-10 rounded-xl bg-indigo-100
                            text-indigo-600 flex items-center justify-center mb-4">
                            <Folder className="w-5 h-5" />
                        </div>

                        {/* Content */}
                        <h3 className="font-semibold text-slate-900 mb-1">
                            {project.name}
                        </h3>
                        <p className="text-sm text-slate-500 mb-4">
                            {project.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <span>{project.updated}</span>
                            <span className="flex items-center gap-1 text-indigo-600 font-medium">
                                Open <ArrowRight className="w-3 h-3" />
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* ===== AI NOTE ===== */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-sm text-indigo-700">
                <strong>How AI uses projects:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Stores role intent and hiring context</li>
                    <li>Improves candidate matching accuracy</li>
                    <li>Personalizes outreach messages</li>
                </ul>
            </div>
        </div>
    );
}
