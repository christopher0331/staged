import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ExternalLink } from "lucide-react";

export function SarcCenters() {
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-2xl text-nlmsf-purple flex items-center gap-2">
          <MapPin className="h-6 w-6" />
          SARC Centers Map
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose max-w-none">
          <p className="text-gray-700">
            This interactive map will help you locate SARC Centers across the nation. 
            All listed centers meet strict criteria and have a strong history of collaboration 
            and commitment to sarcoma research.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <a 
            href="#" 
            className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 group"
          >
            <h3 className="font-medium text-nlmsf-purple group-hover:text-nlmsf-purple-dark flex items-center gap-2">
              SARC Centers Interactive Map
              <ExternalLink className="h-4 w-4" />
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              View an interactive map of SARC Centers across the United States
            </p>
          </a>

          <a 
            href="https://cancer.gov/research/infrastructure/cancer-centers/find"
            className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 group"
          >
            <h3 className="font-medium text-nlmsf-purple group-hover:text-nlmsf-purple-dark flex items-center gap-2">
              NCI Designated Cancer Centers
              <ExternalLink className="h-4 w-4" />
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Search for NCI-designated centers delivering cutting-edge cancer treatments
            </p>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
