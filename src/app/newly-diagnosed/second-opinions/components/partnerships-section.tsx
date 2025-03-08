import { Building, ExternalLink } from "lucide-react"
import Link from "next/link"

export function PartnershipsSection() {
  const partnerships = [
    {
      institution: "Included Health - Windstream Benefits",
      description: "Get a second opinion on your medical condition or treatment plan. Included Health will connect you with a world-leading expert who is experienced in treating your condition.",
      url: "https://windstreambenefits.com"
    },
    {
      institution: "ColumbiaDoctors - Columbia University",
      description: "Partnered with Included Health to provide convenient, confidential, and highly secure second opinion services. Their care team is available every step of the way to guide you through this process.",
      url: "https://www.columbiadoctors.org/patients/get-second-opinion"
    },
    {
      institution: "Dana Farber Cancer Institute",
      description: "Their Online Second Opinion program for adult patients is powered by Included Health. Typically takes 5 to 7 business days after your medical records have been received to get your written online second opinion.",
      url: "https://www.dana-farber.org/appointments-second-opinions/second-opinion-program/get-started"
    },
    {
      institution: "Stanford Medicine",
      description: "The Stanford Medicine Online Second Opinion program offers easy access to world-class doctors. If you have received a diagnosis or recommendation for treatment and want another opinion, their service can help you make a more informed decision.",
      url: "https://stanfordhealthcare.org/second-opinion/overview.html"
    },
    {
      institution: "Stanford Children's Health",
      description: "Stanford Medicine launches online second opinion program to help patients worldwide.",
      url: "https://med.stanford.edu/news/all-news/2019/01/stanford-medicine-launches-online-second-opinion-program.html"
    },
    {
      institution: "Weill Cornell Medicine",
      description: "WCM OnDemand Second Opinion — a partnership between Weill Cornell Medicine, NewYork-Presbyterian and Included Health — allows you to turn to world-class experts for second opinions.",
      url: "https://weillcornell.org/digital-health-services/second-opinion"
    }
  ]

  return (
    <div className="space-y-8">
      <div id="institutional-partnerships" className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 shadow-md border border-amber-200">
        <div className="flex items-center mb-4">
          <div className="bg-amber-500 p-2 rounded-full mr-4">
            <Building className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-800">Institutional Partnerships</h3>
            <p className="text-amber-600">Leading institutions offering second opinion services</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6">
          Many leading medical institutions have established partnerships with services like Included Health to provide accessible second opinion services for patients. These programs allow you to access expert opinions without necessarily traveling to the institution.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {partnerships.map((partnership, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-amber-200 overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-4">
                <h4 className="font-bold text-amber-800">{partnership.institution}</h4>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-4 text-sm">{partnership.description}</p>
                <Link 
                  href={partnership.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
                >
                  Visit Website
                  <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="included-health" className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <ExternalLink className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">About Included Health</h3>
            <p className="text-blue-600">A common partner for second opinion services</p>
          </div>
        </div>
        
        <div className="bg-white/70 rounded-lg p-5 border border-blue-100 shadow-sm mb-4">
          <p className="text-gray-700 mb-4">
            Included Health aims to simplify the online healthcare experience by synchronizing virtual care between providers and eliminating common barriers, like cost and convenience, to receiving high-quality care.
          </p>
          
          <h4 className="font-semibold text-blue-700 mb-3">How the Process Typically Works:</h4>
          <ol className="space-y-2 list-decimal list-inside">
            <li className="text-gray-700">
              <span className="font-medium">Record Collection:</span> Included Health gathers your medical records and history.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Expert Review:</span> A medical expert at the partner institution reviews your records.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Written Opinion:</span> You receive a written second opinion, typically within 5-7 business days after your records are received.
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Follow-up:</span> Some programs offer the opportunity to discuss the opinion with the expert.
            </li>
          </ol>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
          <p className="text-gray-700 font-medium">
            Many of these services can be accessed remotely, making it easier for patients to get expert opinions without the need to travel.
          </p>
        </div>
      </div>
    </div>
  )
}
