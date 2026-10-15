import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Apple,
  Play,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import phoneImg from "../../assets/iPhone 12 Pro copy.png";
import download from "../../assets/Download Store.png";
import Logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Download App Now
            </h2>
            <p className="text-gray-600 mb-6">
              Elevate your academic journey with Campuspe, the all-in-one
              digital ecosystem designed to bridge the gap between education and
              industry.
            </p>
            <div className="flex gap-4">
              <img
                src={download}
                alt="download"
                className="w-auto cursor-pointer h-10 object-contain"
              />
            </div>
          </div>
          <div className="relative w-full md:w-1/3 h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={phoneImg}
                alt="phoneimage"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8">
            Our support team is here to help you succeed. Get in touch anytime.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg">
              Contact Support <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg"
            >
              Schedule a Call <Phone className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
        {/* Ready for what's next CTA */}
        <div className="mb-16 rounded-[28px] border border-gray-200 bg-white px-6 py-8 shadow-sm md:px-10 md:py-9">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#14213D] md:text-3xl">
                Ready for what’s next?
              </h2>
              <p className="text-sm leading-5 text-slate-500 md:text-base">
                Discover colleges, find opportunities, list your institution, or
                start hiring with CampusPe.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button className="rounded-xl bg-[#0785F9] px-5 text-white hover:bg-blue-700">
                Explore Colleges <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button className="rounded-xl bg-[#0785F9] px-5 text-white hover:bg-blue-700">
                Find Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="rounded-xl border-gray-300 bg-white px-5 text-gray-800 hover:bg-gray-50"
              >
                List Your College <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="rounded-xl border-gray-300 bg-white px-5 text-gray-800 hover:bg-gray-50"
              >
                Post a Job <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Decorative dotted divider */}
          <div className="mx-auto mt-7 hidden max-w-2xl items-center lg:flex">
            <div className="w-full border-t border-dashed border-blue-400" />
            <span className="mx-2 text-xl text-blue-400">✳</span>
            <div className="w-full border-t border-dashed border-blue-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 border-t border-gray-100 pt-16">
          <div className="lg:col-span-1">
            <div className="text-blue-600 font-bold text-2xl mb-6">
              <img
                src={Logo}
                alt="logo"
                classNmae="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm">
              From choosing a college to finding your next opportunity. CampusPe
              connects students, colleges and employers in one place.
            </p>
          </div>
          {[
            {
              title: "For Students",
              links: [
                "Explore Colleges",
                "Find Opportunities",
                "Internships",
                "Full-time Jobs",
              ],
            },
            {
              title: "For Colleges",
              links: [
                "List Your College",
                "Admissions",
                "Fee Collection",
                "Placements",
              ],
            },
            {
              title: "For Employers",
              links: ["Post a Job", "Find Talent", "Campus Hiring"],
            },
            {
              title: "Company",
              links: ["About Us", "Contact Us", "Blogs", "Careers"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-gray-900 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal & Policies</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Refund & Cancellation Policy",
                "Cookie Policy",
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <p className="text-gray-600 text-sm">
              Separate user, institution and employer terms can live inside the
              full Policies page.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> contact@campuspe.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +91 6362606464
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
              Students • Colleges • Employers
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>2026 CampusPe Technologies Pvt. Ltd. Privacy Terms Grievance</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
