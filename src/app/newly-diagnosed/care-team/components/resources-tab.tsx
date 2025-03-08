import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Phone, Calendar, MessageSquare, HelpCircle } from "lucide-react";

export function ResourcesTab() {
  const communicationTips = [
    {
      title: "Prepare for Appointments",
      description: "Write down questions before your appointments. Prioritize your most important concerns.",
      icon: <Calendar className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Take Notes",
      description: "Bring a notebook or use your phone to take notes during appointments. Consider recording discussions (with permission).",
      icon: <FileText className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Bring a Support Person",
      description: "Having a family member or friend with you can help you remember information and provide emotional support.",
      icon: <MessageSquare className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Ask for Clarification",
      description: "Don't hesitate to ask your healthcare providers to explain things in simpler terms if you don't understand.",
      icon: <HelpCircle className="h-5 w-5 text-indigo-500" />
    },
    {
      title: "Use Patient Portals",
      description: "Many healthcare systems offer online portals where you can message your care team, view test results, and schedule appointments.",
      icon: <Phone className="h-5 w-5 text-indigo-500" />
    }
  ];

  const additionalResources = [
    {
      title: "Sarcoma Patient Advocacy Groups",
      description: "Organizations that provide support, education, and resources for sarcoma patients.",
      links: [
        { name: "Sarcoma Foundation of America", url: "https://www.curesarcoma.org/" },
        { name: "The Liddy Shriver Sarcoma Initiative", url: "http://sarcomahelp.org/" }
      ]
    },
    {
      title: "Financial Resources",
      description: "Programs that can help with the financial aspects of cancer treatment.",
      links: [
        { name: "CancerCare Financial Assistance", url: "https://www.cancercare.org/financial" },
        { name: "Patient Advocate Foundation", url: "https://www.patientadvocate.org/" }
      ]
    },
    {
      title: "Transportation Services",
      description: "Resources to help with transportation to and from medical appointments.",
      links: [
        { name: "American Cancer Society Road to Recovery", url: "https://www.cancer.org/treatment/support-programs-and-services/road-to-recovery.html" }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border border-purple-200">
        <div className="flex items-center mb-4">
          <div className="bg-purple-500 p-2 rounded-full mr-4">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-800">Communication Resources</h3>
            <p className="text-purple-600">Tools to help you communicate effectively with your care team</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Effective communication with your healthcare team is essential for receiving the best care. This page provides resources and tips to help you communicate with your care team members and access additional support services.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Communication Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {communicationTips.map((tip, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="mr-3 mt-1">
                {tip.icon}
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{tip.title}</h4>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Questions to Ask Your Care Team</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">About Your Diagnosis</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>What type of sarcoma do I have?</li>
              <li>What is the stage of my cancer?</li>
              <li>Has the cancer spread to other parts of my body?</li>
              <li>What additional tests might I need?</li>
            </ul>
          </div>
          
          <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
            <h4 className="font-medium text-teal-800 mb-2">About Your Treatment</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>What are my treatment options?</li>
              <li>What are the potential side effects of each treatment?</li>
              <li>How will we know if the treatment is working?</li>
              <li>What is the goal of my treatment?</li>
              <li>How will treatment affect my daily life?</li>
            </ul>
          </div>
          
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 className="font-medium text-amber-800 mb-2">About Your Care Team</h4>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Who will be coordinating my overall care?</li>
              <li>How do the different members of my care team communicate with each other?</li>
              <li>Who should I contact if I have questions between appointments?</li>
              <li>What is the best way to reach my care team (phone, email, patient portal)?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Resources</h3>
        <div className="space-y-6">
          {additionalResources.map((resource, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-1">{resource.title}</h4>
              <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
              <div className="space-y-2">
                {resource.links.map((link, lIndex) => (
                  <a 
                    key={lIndex} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                  >
                    {link.name} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-gray-700">
            Remember that your healthcare team is there to support you. Don't hesitate to reach out with questions or concerns at any point during your treatment journey.
          </p>
        </div>
      </div>
    </div>
  );
}
