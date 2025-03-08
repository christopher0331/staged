import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCircle, Stethoscope, Microscope, HeartPulse, Pill } from "lucide-react";

export function CareTeamTab() {
  const teamMembers = [
    {
      title: "Sarcoma Oncologist",
      description: "Directs your treatment and coordinates your care with other doctors and team members.",
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      color: "bg-blue-500",
      textColor: "text-blue-800",
      descColor: "text-blue-600",
      gradient: "from-blue-50 to-blue-100 border-blue-200"
    },
    {
      title: "Fellow/Resident/Intern",
      description: "Doctors who are training to become specialists or taking more medical training.",
      icon: <UserCircle className="h-6 w-6 text-white" />,
      color: "bg-indigo-500",
      textColor: "text-indigo-800",
      descColor: "text-indigo-600",
      gradient: "from-indigo-50 to-indigo-100 border-indigo-200"
    },
    {
      title: "Nurse Practitioner (NP)",
      description: "A nurse with advanced training who may do procedures and prescribe medicine.",
      icon: <HeartPulse className="h-6 w-6 text-white" />,
      color: "bg-purple-500",
      textColor: "text-purple-800",
      descColor: "text-purple-600",
      gradient: "from-purple-50 to-purple-100 border-purple-200"
    },
    {
      title: "Physician Assistant (PA)",
      description: "A special assistant with advanced training who may do procedures and prescribe medicine.",
      icon: <UserCircle className="h-6 w-6 text-white" />,
      color: "bg-teal-500",
      textColor: "text-teal-800",
      descColor: "text-teal-600",
      gradient: "from-teal-50 to-teal-100 border-teal-200"
    },
    {
      title: "Primary Nurse (RN)",
      description: "Your main nurse who plans, coordinates and directs your nursing care.",
      icon: <HeartPulse className="h-6 w-6 text-white" />,
      color: "bg-rose-500",
      textColor: "text-rose-800",
      descColor: "text-rose-600",
      gradient: "from-rose-50 to-rose-100 border-rose-200"
    },
    {
      title: "Social Worker",
      description: "Helps you and your family with concerns such as your care after hospital stay, coping or finding resources.",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "bg-amber-500",
      textColor: "text-amber-800",
      descColor: "text-amber-600",
      gradient: "from-amber-50 to-amber-100 border-amber-200"
    },
    {
      title: "Patient Care Associate (PCA)",
      description: "Helps the nurse take care of you.",
      icon: <HeartPulse className="h-6 w-6 text-white" />,
      color: "bg-emerald-500",
      textColor: "text-emerald-800",
      descColor: "text-emerald-600",
      gradient: "from-emerald-50 to-emerald-100 border-emerald-200"
    },
    {
      title: "Registered Dietitian",
      description: "Provides education about nutrition and food choices.",
      icon: <Pill className="h-6 w-6 text-white" />,
      color: "bg-cyan-500",
      textColor: "text-cyan-800",
      descColor: "text-cyan-600",
      gradient: "from-cyan-50 to-cyan-100 border-cyan-200"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border border-blue-200">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 p-2 rounded-full mr-4">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-800">Your Care Team</h3>
            <p className="text-blue-600">The people who will be involved in your treatment</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          There are many people who are part of your Sarcoma Clinic care team. Each member plays an important role in your care. You can use this as a reference tool to write down the names and phone numbers of your care team members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className={`bg-gradient-to-r ${member.gradient} rounded-xl p-5 shadow-md border transition-all duration-300 hover:shadow-lg`}>
            <div className="flex items-start">
              <div className={`${member.color} p-2 rounded-full mr-4 shrink-0`}>
                {member.icon}
              </div>
              <div>
                <h3 className={`text-lg font-bold ${member.textColor}`}>{member.title}</h3>
                <p className={`${member.descColor} text-sm mb-2`}>{member.description}</p>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">Your {member.title}: ___________________</p>
                  <p className="text-gray-600 text-sm">Phone: ___________________</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Team Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800">Clinical Research Coordinator</h4>
            <p className="text-gray-600 text-sm">Monitors research studies</p>
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-gray-600 text-sm">Name: ___________________</p>
              <p className="text-gray-600 text-sm">Phone: ___________________</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800">Palliative Care Team</h4>
            <p className="text-gray-600 text-sm">Works with your doctor to help manage your pain and symptoms</p>
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-gray-600 text-sm">Name: ___________________</p>
              <p className="text-gray-600 text-sm">Phone: ___________________</p>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800">Pharmacist or Pharmacy Tech</h4>
            <p className="text-gray-600 text-sm">Prepares medicines for you and provides medicine education</p>
            <div className="mt-2 pt-2 border-t border-gray-200">
              <p className="text-gray-600 text-sm">Name: ___________________</p>
              <p className="text-gray-600 text-sm">Phone: ___________________</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
