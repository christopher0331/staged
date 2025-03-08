import Link from "next/link";
import { BookOpen, ExternalLink, MapPin, FileText, Search, BookMarked } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { lmsSubtypes } from "../data";

export function ResourcesTab() {
  // Array of colors for LMS subtype cards
  const subtypeColors = [
    { bg: "bg-blue-50", border: "border-blue-200", hover: "hover:bg-blue-100", text: "text-blue-700", hoverText: "hover:text-blue-800" },
    { bg: "bg-teal-50", border: "border-teal-200", hover: "hover:bg-teal-100", text: "text-teal-700", hoverText: "hover:text-teal-800" },
    { bg: "bg-amber-50", border: "border-amber-200", hover: "hover:bg-amber-100", text: "text-amber-700", hoverText: "hover:text-amber-800" },
    { bg: "bg-indigo-50", border: "border-indigo-200", hover: "hover:bg-indigo-100", text: "text-indigo-700", hoverText: "hover:text-indigo-800" },
    { bg: "bg-rose-50", border: "border-rose-200", hover: "hover:bg-rose-100", text: "text-rose-700", hoverText: "hover:text-rose-800" },
    { bg: "bg-emerald-50", border: "border-emerald-200", hover: "hover:bg-emerald-100", text: "text-emerald-700", hoverText: "hover:text-emerald-800" },
  ];

  return (
    <div className="space-y-8">
      <div id="lms-types" className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200">
        <div className="flex items-center mb-4">
          <div className="bg-teal-500 p-2 rounded-full mr-4">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-800">Types of Leiomyosarcoma</h3>
            <p className="text-teal-600">Learn about different types of LMS and where they can occur</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">
          Leiomyosarcoma can develop in different parts of the body. Click on each type to learn more about its specific characteristics, symptoms, and treatment approaches.
        </p>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lmsSubtypes.map((subtype, index) => {
            const colors = subtypeColors[index % subtypeColors.length];
            
            return (
              <Link
                key={subtype.title}
                href={subtype.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg border ${colors.bg} ${colors.border} ${colors.hover} transition-all duration-300 group hover:shadow-md`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${colors.text} group-${colors.hoverText}`}>{subtype.title}</span>
                  <ExternalLink className={`h-4 w-4 text-gray-400 group-hover:${colors.text}`} />
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 shadow-sm">
          <div className="flex items-center mb-2">
            <div className="bg-blue-500 p-1.5 rounded-full mr-2">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <h4 className="font-semibold text-blue-800">Research Resources</h4>
          </div>
          <p className="text-sm text-gray-700 mb-3 ml-8">
            For detailed information about genomic research in uterine sarcomas, visit:
          </p>
          <Link
            href="https://clincancerres.aacrjournals.org/content/26/14/3881"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center text-blue-600 hover:text-blue-800 ml-8 bg-white px-3 py-2 rounded-md border border-blue-200 hover:shadow-sm transition-all duration-300"
          >
            Genomic landscape of uterine sarcomas (07/2020 – M. Hensley, MD)
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div id="medical-terms" className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <BookMarked className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">Medical Terms Dictionary</h3>
            <p className="text-indigo-600">Understanding medical terminology</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-5">
          The National Cancer Institute (NCI) offers a guide to over 8,000 cancer terms.
          The NCI Dictionary is an easy-to-use resource that helps patients and their
          families better comprehend medical articles that contain unfamiliar terminology.
        </p>
        
        <div className="flex justify-center">
          <Link
            href="https://www.cancer.gov/publications/dictionaries/cancer-terms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-sm"
          >
            <Search className="mr-2 h-4 w-4" />
            Visit NCI Dictionary of Cancer Terms
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
