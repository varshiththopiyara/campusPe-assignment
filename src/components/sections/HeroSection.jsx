import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import label from "../../assets/Label.png";
import { FaWhatsapp } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import conatiner from "../../assets/Container.png";
import briefCase from"../../assets/Overlay.png";

const HeroSection = () => {
  const cardFeatures = [
    {
      title: "College",
      description: "Explore colleges, courses, fees, placements & more",
      features: [
        "Search by course, location, fees",
        "Connect directly with colleges",
        "Improve student placements",
      ],
      badge: "Coming Soon",
      type: "college",
    },
    {
      title: "I'm Looking for a Job",
      description: "Upload your resume. We'll find jobs that fit you.",
      features: [
        "Jobs from 1000+ sources",
        "AI powered matching",
        "WhatsApp & email alerts",
      ],
      badge: "Available Now",
      type: "job",
    },
    {
      title: "I'm Hiring",
      description: "Connect with colleges and find candidates.",
      features: [
        "Connect directly with colleges",
        "Find the right candidates",
        "Simplify your hiring",
      ],
      badge: "Coming Soon",
      type: "hiring",
    },
  ];

  const getCardIcon = (type) => {
    if (type === "college") return GraduationCap;
    if (type === "job") return Search;
    return Briefcase;
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-blue-50/40 pt-8 pb-16 md:pt-10">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute top-32 right-1/4 h-64 w-64 rounded-full bg-purple-100/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-100/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Top floating cards */}
        <div className="mb-5 flex items-start justify-between gap-3 md:mb-0 md:gap-8">
          {/* WhatsApp Alert */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-40 shrink-0 rounded-2xl border border-indigo-200 bg-white/90 p-3 shadow-sm backdrop-blur-sm md:w-52 md:p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <FaWhatsapp className="h-4 w-4 shrink-0 text-green-500" />
              <span className="text-[10px] font-medium text-orange-500 md:text-xs">
                WhatsApp Alert
              </span>
            </div>

            <p className="mb-1 text-[10px] font-semibold text-gray-800 md:text-xs">
              Get notified on whatsapp
            </p>

            <p className="text-[9px] leading-relaxed text-gray-500 md:text-[10px]">
              You'll get all important updates on your WhatsApp
            </p>
          </motion.div>

          {/* AI badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-2 hidden items-center justify-center rounded-full border border-orange-100/60 bg-orange-50/70 px-4 py-2 sm:flex"
          >
            <img
              src={label}
              alt="AI-powered campus assistant"
              className="h-auto max-h-5 w-auto object-contain"
            />
          </motion.div>

          {/* Resume Builder */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-40 shrink-0 rounded-2xl border border-indigo-200 bg-white/90 p-3 shadow-sm backdrop-blur-sm md:w-52 md:p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <AiFillThunderbolt className="h-4 w-4 shrink-0 text-purple-500" />
              <span className="text-[10px] font-medium text-purple-600 md:text-xs">
                Resume Builder
              </span>
            </div>

            <p className="mb-1 text-[10px] font-semibold text-gray-800 md:text-xs">
              Build Your Resume
            </p>

            <p className="text-[9px] leading-relaxed text-gray-500 md:text-[10px]">
              Our resume builder gives you dynamic options to build better and
              faster resumes that get you hired
            </p>
          </motion.div>
        </div>

        {/* Main headline */}
        <div className="relative z-10 mx-auto mb-8 mt-6 max-w-4xl text-center md:-mt-16 md:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Connect{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              10X Faster.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-2xl px-2 text-sm text-gray-600 sm:text-base md:text-lg"
          >
            One platform connecting students, colleges &amp; employers — faster.
          </motion.p>
        </div>

        {/* Student activity, search prompt and recruiter activity */}
        <div className="mx-auto mb-12 flex max-w-6xl flex-col items-center justify-between gap-5 md:mb-16 md:flex-row md:gap-3">
          {/* Student activity */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-white/95 px-3 py-2 shadow-[0_4px_16px_rgba(37,99,235,0.08)]"
          >
            <img
              src={conatiner}
              alt="Student avatars"
              className="h-auto w-10 shrink-0 object-contain"
            />

            <div className="flex items-start gap-1.5">
              <span className="mt-1 h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500" />

              <div className="flex flex-col">
                <span className="whitespace-nowrap text-[10px] font-semibold text-gray-800 sm:text-xs">
                  🔥 142 students matched today
                </span>
                <span className="mt-0.5 text-[9px] font-normal text-gray-400">
                  Just now · IITs, BITs, VIT
                </span>
              </div>
            </div>
          </motion.div>

          {/* Central prompt */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-center text-base font-semibold text-blue-500 sm:text-lg md:text-xl"
          >
            <Sparkles className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">What are you looking for?</span>
            <Sparkles className="h-4 w-4 shrink-0" />
          </motion.div>

          {/* Recruiter activity */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-white/95 px-3 py-2 shadow-[0_4px_16px_rgba(37,99,235,0.08)]"
          >
            <div className="shrink-0 rounded-lg bg-gray-100 p-1.5">
              {/* <Briefcase className="h-4 w-4 text-gray-500" /> */}
              <img src={briefCase} alt="new images" className="h-auto w-8 shrink-0 object-contain"/>
            </div>

            <div className="whitespace-nowrap">
              <p className="text-[10px] font-semibold text-blue-600 sm:text-xs">
                Radiant Info{" "}
                <span className="font-normal text-gray-700">
                  shortlisted 8 interns
                </span>
              </p>

              <p className="mt-0.5 text-[9px] font-medium text-emerald-500">
                ● Verified recruiter · 2 days ago
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {cardFeatures.map((item) => {
            const Icon = getCardIcon(item.type);
            const isJob = item.type === "job";

            return (
              <motion.div
                key={item.type}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card
                  className={`group relative h-full overflow-hidden ${
                    isJob
                      ? "border-blue-200 bg-gradient-to-b from-white to-blue-50/30 shadow-xl"
                      : "border-blue-100 shadow-lg"
                  }`}
                >
                  <div className="absolute right-0 top-0 p-4">
                    <Badge
                      variant="outline"
                      className={
                        isJob
                          ? "border-green-200 bg-green-50 text-green-600"
                          : "border-blue-200 bg-blue-50 text-blue-600"
                      }
                    >
                      {item.badge}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 transition-colors group-hover:bg-blue-600">
                      <Icon className="h-6 w-6 text-blue-600 transition-colors group-hover:text-white" />
                    </div>

                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {item.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`mt-4 w-full text-white ${
                        isJob
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                    >
                      {isJob ? "Explore Jobs" : "Join Waitlist"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
