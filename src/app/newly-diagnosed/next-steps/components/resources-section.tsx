import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, FileText, ExternalLink } from "lucide-react";
import { resourceLinks } from "../data";

export function ResourcesSection() {
  // Array of gradient colors for video items
  const videoGradients = [
    "from-indigo-50 to-indigo-100 border-indigo-200",
    "from-blue-50 to-blue-100 border-blue-200",
    "from-purple-50 to-purple-100 border-purple-200",
    "from-violet-50 to-violet-100 border-violet-200"
  ];
  
  // Array of gradient colors for article items
  const articleGradients = [
    "from-teal-50 to-teal-100 border-teal-200",
    "from-emerald-50 to-emerald-100 border-emerald-200",
    "from-green-50 to-green-100 border-green-200",
    "from-cyan-50 to-cyan-100 border-cyan-200"
  ];
  
  // Array of gradient colors for link items
  const linkGradients = [
    "from-amber-50 to-amber-100 border-amber-200",
    "from-orange-50 to-orange-100 border-orange-200",
    "from-rose-50 to-rose-100 border-rose-200",
    "from-pink-50 to-pink-100 border-pink-200"
  ];
  
  return (
    <div className="space-y-8">
      {/* Videos Section */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200">
        <div className="flex items-center mb-4">
          <div className="bg-purple-500 p-2 rounded-full mr-4">
            <Video className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800">Educational Videos</h3>
            <p className="text-purple-600">Visual resources to help understand LMS</p>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {resourceLinks.videos.map((video, index) => (
            <a
              key={video.title}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg bg-gradient-to-br ${videoGradients[index % videoGradients.length]} hover:shadow-md transition-all duration-300 border group`}
            >
              <h4 className="font-semibold text-gray-800 group-hover:text-purple-800">
                {video.title}
              </h4>
              <p className="mt-1 text-sm text-gray-700">{video.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Articles Section */}
      <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border border-teal-200">
        <div className="flex items-center mb-4">
          <div className="bg-teal-500 p-2 rounded-full mr-4">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-teal-800">Research & Articles</h3>
            <p className="text-teal-600">Scientific and informational resources</p>
          </div>
        </div>
        
        <div className="grid gap-4 bg-white/90 rounded-lg p-4 shadow-sm border border-teal-200">
          {resourceLinks.articles.map((article, index) => (
            <a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br ${articleGradients[index % articleGradients.length]} hover:shadow-md transition-all duration-300 border group`}
            >
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 group-hover:text-teal-800">
                  {article.title}
                </h4>
                <p className="mt-1 text-sm text-gray-700">
                  {article.authors || article.source}
                </p>
              </div>
              <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-teal-600" />
            </a>
          ))}
        </div>
      </div>

      {/* Important Links Section */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 shadow-md border border-amber-200">
        <div className="flex items-center mb-4">
          <div className="bg-amber-500 p-2 rounded-full mr-4">
            <ExternalLink className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-800">Important Links</h3>
            <p className="text-amber-600">Essential resources for your journey</p>
          </div>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {resourceLinks.importantLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-lg bg-gradient-to-br ${linkGradients[index % linkGradients.length]} hover:shadow-md transition-all duration-300 border group`}
            >
              <h4 className="font-semibold text-gray-800 group-hover:text-amber-800">
                {link.title}
              </h4>
              <p className="mt-1 text-sm text-gray-700">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
