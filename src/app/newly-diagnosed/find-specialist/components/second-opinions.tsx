import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, ExternalLink } from "lucide-react";
import { secondOpinionResources } from "../data";

export function SecondOpinions() {
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-2xl text-nlmsf-purple flex items-center gap-2">
          <FileCheck className="h-6 w-6" />
          Virtual Second Opinion Resources
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose max-w-none">
          <p className="text-gray-700">
            Getting a second opinion at a sarcoma center is crucial. Many hospitals now offer virtual 
            second opinions, making it easier to access expert opinions without the need for travel.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {secondOpinionResources.map((resource) => (
            <a
              key={resource.name}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-nlmsf-purple group-hover:text-nlmsf-purple-dark">
                    {resource.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {resource.description}
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-nlmsf-purple flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
