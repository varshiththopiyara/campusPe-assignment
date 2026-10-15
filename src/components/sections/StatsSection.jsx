import React from "react";
import { Users, Building2, BriefcaseBusiness, ShieldCheck } from "lucide-react";
import partnerLogos from "../../assets/Div [framer-hjn7k6].png";
const stats = [
  {
    icon: Users,
    value: "800+",
    label: "Students",
    color: "text-violet-500",
    bg: "bg-violet-100",
  },
  {
    icon: Building2,
    value: "130+",
    label: "colleges",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    icon: BriefcaseBusiness,
    value: "100+",
    label: "jobs & internships",
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Safe & Trusted",
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
];

const StatsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-50/40 via-white to-purple-50/40 py-10 md:py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex items-center justify-center gap-4 px-3 sm:px-5 md:gap-5 ${
                  index < stats.length - 1
                    ? "sm:border-r sm:border-gray-200"
                    : ""
                }`}
              >
                {/* Larger icon circle */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full md:h-16 md:w-16 ${stat.bg}`}
                >
                  <Icon
                    className={`h-7 w-7 md:h-8 md:w-8 ${stat.color}`}
                    strokeWidth={2}
                  />
                </div>

                {/* Larger numbers and labels */}
                <div className="flex flex-col">
                  <span className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
                    {stat.value}
                  </span>

                  <span className="mt-1 text-sm font-medium text-gray-600 md:text-base">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-10 border-t border-gray-100 pt-8 md:mt-12 md:pt-10">
        <div className="mx-auto flex w-full max-w-7xl justify-center">
          <img
            src={partnerLogos}
            alt="Trusted partners across India"
            className="h-auto w-full max-w-none object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
