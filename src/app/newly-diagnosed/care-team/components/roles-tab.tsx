import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList, Stethoscope, HeartPulse, Scissors } from "lucide-react";

export function RolesTab() {
  const specialtyTeams = [
    {
      title: "Medical Oncology Team",
      description: "Specialists who focus on treating cancer with medications such as chemotherapy, targeted therapy, and immunotherapy.",
      members: [
        { role: "Sarcoma Oncologist", description: "Directs your treatment and coordinates your care with other doctors and team members." },
        { role: "Fellow", description: "A doctor who is training to become a specialist." },
        { role: "Resident or Intern", description: "A doctor who is taking more medical training." },
        { role: "Nurse Practitioner (NP)", description: "A nurse with advanced training who may do procedures and prescribe medicine." },
        { role: "Physician Assistant (PA)", description: "A PA is a special assistant with advanced training who may do procedures and prescribe medicine." },
        { role: "Primary Nurse (RN)", description: "This is your main nurse who will plan, coordinate and direct your nursing care." },
        { role: "Social Worker", description: "The social worker can help you and your family with concerns such as your care after your hospital stay, coping or finding resources to meet your needs." },
        { role: "Patient Care Associate (PCA)", description: "This nurse plans and directs your nursing care." },
        { role: "Registered Dietitian", description: "A dietitian and diet tech provide education about nutrition, and food choices." }
      ],
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      icon: <Stethoscope className="h-6 w-6 text-white" />,
      iconBg: "bg-blue-500"
    },
    {
      title: "Surgical Oncology Team",
      description: "Specialists who perform surgical procedures to remove tumors and affected tissues.",
      members: [
        { role: "Attending Physician (Surgeon)", description: "The Physician who directs your treatment and coordinates your care with other doctors and team members." },
        { role: "Fellow", description: "A physician who is training to become a specialist." },
        { role: "Resident or Intern", description: "A doctor who is taking more medical training." },
        { role: "Nurse Practitioner (NP)", description: "A nurse with advanced training who may do procedures and prescribe medicine." },
        { role: "Physician Assistant (PA)", description: "A PA is a special assistant with advanced training who may do procedures and prescribe medicine." },
        { role: "Primary Nurse (RN)", description: "This is your main nurse who will plan, coordinate and direct your nursing care." },
        { role: "Social Worker", description: "The social worker can help you and your family with concerns such as your care after your hospital stay, coping or finding resources to meet your needs." },
        { role: "Patient Care Associate (PCA)", description: "A PCA helps the nurse take care of you." }
      ],
      gradient: "from-teal-50 to-teal-100",
      border: "border-teal-200",
      icon: <Scissors className="h-6 w-6 text-white" />,
      iconBg: "bg-teal-500"
    },
    {
      title: "Radiation Oncology Team",
      description: "Specialists who use radiation therapy to treat cancer.",
      members: [
        { role: "Attending Physician (Radiation Oncologist)", description: "A doctor who directs your treatment and coordinates your care with other doctors and team members." },
        { role: "Fellow", description: "A doctor who is training to become a specialist." },
        { role: "Resident or Intern", description: "A doctor who is taking more medical training." },
        { role: "Nurse Practitioner (NP)", description: "A nurse with advanced training who may do procedures and prescribe medicine." },
        { role: "Physician Assistant (PA)", description: "A PA is a special assistant with advanced training who may do procedures and prescribe medicine." },
        { role: "Primary Nurse (RN)", description: "This is your main nurse who will plan, coordinate and direct your nursing care." },
        { role: "Radiation Therapist", description: "A therapist who will give your radiation treatment each day." }
      ],
      gradient: "from-amber-50 to-amber-100",
      border: "border-amber-200",
      icon: <HeartPulse className="h-6 w-6 text-white" />,
      iconBg: "bg-amber-500"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md border border-indigo-200">
        <div className="flex items-center mb-4">
          <div className="bg-indigo-500 p-2 rounded-full mr-4">
            <ClipboardList className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-800">Specialty Teams</h3>
            <p className="text-indigo-600">Different teams that may be involved in your care</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Your sarcoma treatment may involve multiple specialty teams working together. Each team has members with specific roles and expertise. Understanding these roles can help you communicate effectively with your healthcare providers.
        </p>
      </div>

      {specialtyTeams.map((team, index) => (
        <div key={index} className={`bg-gradient-to-r ${team.gradient} rounded-xl p-6 shadow-md border ${team.border} mb-6`}>
          <div className="flex items-center mb-4">
            <div className={`${team.iconBg} p-2 rounded-full mr-4`}>
              {team.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{team.title}</h3>
              <p className="text-gray-600">{team.description}</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-3">
            {team.members.map((member, mIndex) => (
              <div key={mIndex} className="bg-white/80 rounded-lg p-3 border border-gray-200">
                <h4 className="font-medium text-gray-800">{member.role}</h4>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Coordinated Care Approach</h3>
        <p className="text-gray-700 mb-4">
          Your care team members work together to provide you with comprehensive treatment. They regularly communicate with each other about your care through:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Tumor board meetings where multiple specialists discuss your case</li>
          <li>Shared electronic medical records</li>
          <li>Regular team meetings and consultations</li>
          <li>Coordinated appointment scheduling</li>
        </ul>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-gray-700 font-medium">
            Don't hesitate to ask questions about how your care is being coordinated or to request that information be shared between different members of your healthcare team.
          </p>
        </div>
      </div>
    </div>
  );
}
