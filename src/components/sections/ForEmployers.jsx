import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  CircleCheck,
  MessageCircle,
  Clock,
} from "lucide-react";

const employerSteps = [
  {
    num: "01",
    title: "Post a role in minutes",
    desc: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
    badges: [
      {
        label: "5 Min Deployment",
        style: "bg-emerald-50 text-emerald-600 border-emerald-100",
        icon: Zap,
      },
      {
        label: "500+ Campus Network",
        style: "bg-gray-50 text-gray-600 border-gray-200",
      },
    ],
  },
  {
    num: "02",
    title: "Receive a matched shortlist",
    desc: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
    badges: [
      {
        label: "Zero CV Clutter",
        style: "bg-purple-50 text-purple-600 border-purple-100",
        icon: CircleCheck,
      },
      {
        label: "Tier 1–Tier 3 Parity",
        style: "bg-gray-50 text-gray-600 border-gray-200",
      },
    ],
  },
  {
    num: "03",
    title: "Connect with candidates directly",
    desc: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
    badges: [
      {
        label: "In-App Scheduling",
        style: "bg-blue-50 text-blue-600 border-blue-100",
        icon: MessageCircle,
      },
      {
        label: "1-Click Video / Chat",
        style: "bg-gray-50 text-gray-600 border-gray-200",
      },
    ],
  },
  {
    num: "04",
    title: "Reduce your time-to-hire",
    desc: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
    highlight: true,
    badges: [
      { label: "< 2 DAYS", style: "bg-blue-600 text-white border-blue-600" },
      {
        label: "57% Faster Hiring",
        style: "bg-emerald-50 text-emerald-600 border-emerald-100",
      },
    ],
  },
];

const ForEmployers = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-14">
          {/* Left-side content */}
          <div className="w-full space-y-6 lg:sticky lg:top-24 lg:w-[38%]">
            <Badge
              variant="outline"
              className="border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600"
            >
              • 03 • FOR EMPLOYERS
            </Badge>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Stop running
              <br />
              campus drives.
              <br />
              <span className="text-blue-600">
                Start hiring the right people.
              </span>
            </h2>

            <p className="max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
              Post a role in minutes and reach relevant candidates without the
              time, travel and coordination of traditional hiring.
            </p>

            <Button className="rounded-full bg-blue-600 px-8 py-6 text-lg text-white shadow-lg hover:bg-blue-700">
              Post a Job
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right-side feature cards */}
          <div className="w-full space-y-4 lg:w-[62%]">
            {employerSteps.map((item) => (
              <Card
                key={item.num}
                className={`rounded-2xl border shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                  item.highlight
                    ? "border-blue-100 bg-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                <CardContent className="p-4 md:p-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-5">
                    {/* Number and description */}
                    <div className="flex min-w-0 flex-1 items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-sm font-semibold text-indigo-600">
                        {item.num}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold leading-snug text-slate-900 md:text-lg">
                            {item.title}
                          </h3>

                          <Badge
                            variant="secondary"
                            className="shrink-0 rounded-full bg-indigo-50 px-2 py-1 text-[9px] font-medium text-indigo-600"
                          >
                            INSTANT SETUP
                          </Badge>
                        </div>

                        <p className="max-w-xl text-xs leading-relaxed text-slate-500 md:text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Right-side badges */}
                    <div className="flex shrink-0 flex-row flex-wrap gap-2 pl-[52px] md:w-44 md:flex-col md:items-stretch md:pl-0">
                      {item.badges.map((badge) => {
                        const Icon = badge.icon;

                        return (
                          <Badge
                            key={badge.label}
                            variant="outline"
                            className={`flex justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-[11px] font-medium ${badge.style}`}
                          >
                            {Icon && <Icon className="h-3 w-3 shrink-0" />}
                            {badge.label}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEmployers;
