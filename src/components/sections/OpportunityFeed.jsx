import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  MapPin,
  DollarSign,
  Zap,
  Search,
  Briefcase,
  FileText,
} from "lucide-react";
import IIM from "../../assets/IIM_BANGALORE_LOGO_3c41374c6b.png";
import Google from "../../assets/google logo.jpg";
const opportunities = [
  {
    title: "IIM Bangalore",
    sub: "MBA",
    loc: "Bengaluru",
    salary: "3L+",
    type: "Top College",
    icon: IIM,
    isImage: true,
    color: "bg-white border border-gray-100",
  },
  {
    title: "Product Intern",
    sub: "Internship",
    loc: "Bengaluru",
    salary: "35K/mo",
    type: "Internship",
    icon: Google,
    isImage: true,
    color: "bg-white border border-gray-100",
  },
  {
    title: "Marketing Gig",
    sub: "Freelance",
    loc: "Remote",
    salary: "10K - 25K",
    type: "Freelance",
    icon: "N",
    isImage: false,
    color: "bg-black text-white",
  },
];
const OpportunityFeed = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <Badge
              variant="outline"
              className="text-blue-600 border-blue-200 bg-blue-50 px-3 py-1 text-sm"
            >
              • 01 • OPPORTUNITY DISCOVERY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Stop searching.
              <br />
              <span className="text-blue-600">Start getting matched.</span>
            </h2>
            <p className="text-lg text-gray-600">
              Tell CampusPe your skills, preferences and goals. We continuously
              monitor company career pages and job sources, find opportunities
              that match you, and notify you when they appear.
            </p>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Set your preferences",
                  desc: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
                  tag: "Smart Profile",
                  tagColor: "bg-indigo-50 text-[#4F46E5]",
                },
                {
                  num: "02",
                  title: "Discover relevant opportunities",
                  desc: "Explore colleges and career opportunities matched to your profile, interests and goals.",
                  tag: "AI Ranked",
                  tagColor: "bg-gray-100 text-gray-600",
                },
                {
                  num: "03",
                  title: "Get notified when something fits",
                  desc: "Get notified when a relevant college or new opportunity is found, so you can act early.",
                  tag: "Instant Alerts",
                  tagColor: "bg-green-50 text-[#047857]",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-xl border border-transparent p-4 transition-all hover:border-gray-100 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    {item.num}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>

                      <Badge
                        variant="secondary"
                        className={`shrink-0 text-xs ${item.tagColor}`}
                      >
                        {item.tag}
                      </Badge>
                    </div>

                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg">
              Explore opportunities <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        CampusPe Opportunity Feed
                      </h3>
                      <p className="text-xs text-gray-500">
                        Colleges & opportunities matched to you
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 border-green-200"
                  >
                    • 12 new matches today
                  </Badge>
                </div>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="w-full justify-start h-auto p-1 bg-transparent gap-2">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-full px-4 py-1.5 text-xs"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="colleges"
                      className="rounded-full px-4 py-1.5 text-xs bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Colleges
                    </TabsTrigger>
                    <TabsTrigger
                      value="jobs"
                      className="rounded-full px-4 py-1.5 text-xs bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Jobs
                    </TabsTrigger>
                    <TabsTrigger
                      value="internships"
                      className="rounded-full px-4 py-1.5 text-xs bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Internships
                    </TabsTrigger>
                    <TabsTrigger
                      value="freelance"
                      className="rounded-full px-4 py-1.5 text-xs bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Free-lance
                    </TabsTrigger>
                    <TabsTrigger
                      value="parttime"
                      className="rounded-full px-4 py-1.5 text-xs bg-gray-100 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      Part-time
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="max-h-[400px] space-y-4 overflow-y-auto p-6">
                {opportunities.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 rounded-xl border border-gray-100 p-4 transition-all hover:border-blue-200 hover:shadow-md"
                  >
                    {/* Opportunity logo or icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full ${item.color}`}
                    >
                      {item.isImage ? (
                        <img
                          src={item.icon}
                          alt={`${item.title} logo`}
                          className="h-full w-full object-contain p-1.5"
                        />
                      ) : (
                        <span className="text-lg font-bold text-white">
                          {item.icon}
                        </span>
                      )}
                    </div>

                    {/* Opportunity details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h4 className="font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
                            {item.title}
                          </h4>

                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Building2 className="h-3 w-3" />
                              {item.sub}
                            </span>

                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {item.loc}
                            </span>

                            <span className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {item.salary}
                            </span>
                          </div>
                        </div>

                        <Badge className="w-fit shrink-0 bg-blue-600 text-[10px] text-white">
                          {item.type}
                        </Badge>
                      </div>

                      <Button
                        size="sm"
                        className="mt-3 h-8 bg-blue-600 text-xs text-white hover:bg-blue-700"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
                <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">
                  View all matched opportunities →
                </span>
                <span className="text-xs text-gray-400">
                  Curated for you • Updated daily
                </span>
              </div>
            </Card>
            <div className="absolute -bottom-6 -right-6 text-blue-600 font-handwriting text-xl rotate-[-5deg]">
              A mix of colleges, jobs, internships and gigs — all in one place.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunityFeed;
