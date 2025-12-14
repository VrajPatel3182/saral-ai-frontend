import { ArrowUpRight, CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹1,299",
    credits: "100 Credits",
  },
  {
    name: "Growth",
    price: "₹4,999",
    credits: "500 Credits",
    highlight: true,
  },
  {
    name: "Scale",
    price: "₹12,999",
    credits: "2000 Credits",
  },
];

const invoices = [
  {
    id: "INV-001",
    date: "Mar 12, 2024",
    amount: "₹4,999",
    status: "Paid",
  },
  {
    id: "INV-002",
    date: "Feb 10, 2024",
    amount: "₹1,299",
    status: "Paid",
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-10 max-w-full">
      {/* ===== HEADER ===== */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Billing & Credits
        </h1>
        <p className="text-slate-500 mt-1">
          Credits are used for AI searches, profile unlocks, and outreach.
        </p>
      </div>

      {/* ===== CREDIT BALANCE ===== */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600
                      rounded-3xl p-8 text-white shadow-lg">
        <p className="text-sm opacity-80 mb-2">Available Credits</p>
        <p className="text-4xl font-extrabold mb-4">320</p>
        <p className="text-sm opacity-90 max-w-md">
          Credits are consumed when AI analyzes profiles, unlocks contact
          details, or sends personalized outreach.
        </p>
      </div>

      {/* ===== PLANS ===== */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Buy more credits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl border p-6
                          ${
                            plan.highlight
                              ? "border-indigo-600 shadow-lg"
                              : "hover:shadow-md"
                          }`}
            >
              <h3 className="font-semibold text-slate-900 mb-1">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-slate-900 mb-1">
                {plan.price}
              </p>
              <p className="text-sm text-slate-500 mb-4">
                {plan.credits}
              </p>

              <ul className="space-y-2 text-sm text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  AI candidate search
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Profile unlocks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Outreach sequences
                </li>
              </ul>

              <button
                className={`w-full py-2.5 rounded-lg text-sm font-semibold
                            ${
                              plan.highlight
                                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                : "border hover:bg-slate-50"
                            }`}
              >
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== INVOICES ===== */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Invoice history
        </h2>

        <div className="bg-white rounded-2xl border overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 border-b
                          text-xs font-semibold text-slate-500 uppercase">
            <span>Invoice</span>
            <span>Date</span>
            <span>Amount</span>
            <span>Status</span>
          </div>

          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="grid grid-cols-4 px-6 py-4 border-b
                         last:border-0 text-sm text-slate-700"
            >
              <span>{inv.id}</span>
              <span>{inv.date}</span>
              <span>{inv.amount}</span>
              <span className="flex items-center gap-1 text-green-600 font-medium">
                {inv.status}
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
