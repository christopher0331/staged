import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video } from "lucide-react";
import { telemedicineCenters } from "../data";

export function TelemedicineCenters() {
  return (
    <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <CardHeader>
        <CardTitle className="text-2xl text-nlmsf-purple flex items-center gap-2">
          <Video className="h-6 w-6" />
          Telemedicine Clinics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {telemedicineCenters.map((center) => (
            <a
              key={center.name}
              href={center.link}
              className="p-4 rounded-lg border bg-white shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 group"
            >
              <h3 className="font-medium text-nlmsf-purple group-hover:text-nlmsf-purple-dark">
                {center.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Serving: {center.location}
              </p>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
