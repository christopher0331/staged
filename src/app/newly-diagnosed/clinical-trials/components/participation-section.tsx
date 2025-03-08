import { ClipboardCheck, FileText, UserCheck, CalendarClock, MessageSquare } from "lucide-react"

export function ParticipationSection() {
  return (
    <div className="space-y-6">
      <p className="text-gray-700">
        Patient participants are essential to clinical trials. Each clinical trial accepts patients 
        with a specific type and stage of cancer, and there are several important steps involved in 
        the participation process.
      </p>
      
      <div id="eligibility" className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-700 flex items-center">
          <UserCheck className="h-5 w-5 mr-2 text-purple-600" />
          Eligibility Criteria
        </h3>
        
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200 shadow-sm">
          <p className="text-gray-700 mb-4">
            In general, you must meet these conditions to participate in a clinical trial:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5 mr-3">
                <ClipboardCheck className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-gray-700">
                Doctors have diagnosed and checked the stage of your cancer.
              </p>
            </li>
            
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5 mr-3">
                <ClipboardCheck className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-gray-700">
                A doctor has reviewed your general health, and your health meets study requirements.
              </p>
            </li>
            
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5 mr-3">
                <ClipboardCheck className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-gray-700">
                We have answered all your questions about the clinical trial.
              </p>
            </li>
            
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5 mr-3">
                <ClipboardCheck className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-gray-700">
                You understand the possible benefits and risks of participating in a clinical trial.
              </p>
            </li>
            
            <li className="flex items-start">
              <div className="bg-purple-100 p-1 rounded-full mt-0.5 mr-3">
                <ClipboardCheck className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-gray-700">
                You have signed and submitted your informed consent form.
              </p>
            </li>
          </ul>
          
          <div className="mt-4 bg-white/70 rounded-lg p-3 border border-purple-100">
            <p className="text-sm text-purple-800">
              Before you decide to take part in a clinical trial, doctors and research teams will tell 
              you all of the known benefits and risks. The research team closely watches the health and 
              safety of every patient who participates.
            </p>
          </div>
        </div>
      </div>
      
      <div id="informed-consent" className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-700 flex items-center">
          <FileText className="h-5 w-5 mr-2 text-purple-600" />
          Informed Consent Process
        </h3>
        
        <div className="bg-white rounded-lg border border-purple-200 p-5 shadow-sm">
          <p className="text-gray-700 mb-4">
            An informed consent form tells you the purpose, steps, and the benefits and risks of taking 
            part in the clinical trial. These are included to inform you of the details of the clinical 
            trial so you can decide if it is right for you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-2 text-purple-600" />
                What's in an Informed Consent Form
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Study purpose and procedures</li>
                <li>• Duration of participation</li>
                <li>• Potential risks and benefits</li>
                <li>• Alternative treatments available</li>
                <li>• Privacy and confidentiality information</li>
                <li>• Contact information for questions</li>
                <li>• Statement that participation is voluntary</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-purple-600" />
                Questions to Ask Before Signing
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• What is the purpose of the study?</li>
                <li>• What tests and treatments will I receive?</li>
                <li>• How long will the trial last?</li>
                <li>• What are the possible side effects?</li>
                <li>• How will this affect my current treatment?</li>
                <li>• Will I incur any costs?</li>
                <li>• Can I leave the trial if I change my mind?</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 bg-purple-50 rounded-lg p-3 border border-purple-100">
            <p className="text-sm text-purple-800">
              <strong>Remember:</strong> Signing an informed consent form is not a contract. You can withdraw from 
              a clinical trial at any time, for any reason, without penalty or loss of benefits to which 
              you are otherwise entitled.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border border-purple-200 p-5 shadow-sm mt-6">
        <h4 className="font-medium text-purple-800 mb-3 flex items-center">
          <CalendarClock className="h-5 w-5 mr-2 text-purple-600" />
          Steps to Participate in a Clinical Trial
        </h4>
        
        <ol className="space-y-4 mt-4">
          <li className="flex">
            <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center text-purple-700 font-medium mr-3 mt-0.5 flex-shrink-0">1</div>
            <div>
              <h5 className="font-medium text-purple-700">Talk to Your Doctor</h5>
              <p className="text-sm text-gray-700">
                Ask your doctor if a clinical trial might be right for you. Your oncologist can help identify 
                trials that match your cancer type, stage, and treatment history.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center text-purple-700 font-medium mr-3 mt-0.5 flex-shrink-0">2</div>
            <div>
              <h5 className="font-medium text-purple-700">Search for Clinical Trials</h5>
              <p className="text-sm text-gray-700">
                Use resources like ClinicalTrials.gov, the National Cancer Institute, or cancer center 
                websites to find trials that may be appropriate for your situation.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center text-purple-700 font-medium mr-3 mt-0.5 flex-shrink-0">3</div>
            <div>
              <h5 className="font-medium text-purple-700">Contact the Research Team</h5>
              <p className="text-sm text-gray-700">
                Reach out to the contact person listed for the trial to express your interest and 
                learn more about the eligibility requirements.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center text-purple-700 font-medium mr-3 mt-0.5 flex-shrink-0">4</div>
            <div>
              <h5 className="font-medium text-purple-700">Screening Visit</h5>
              <p className="text-sm text-gray-700">
                If you appear to be eligible, you'll be invited for a screening visit where the research 
                team will conduct tests to confirm your eligibility.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center text-purple-700 font-medium mr-3 mt-0.5 flex-shrink-0">5</div>
            <div>
              <h5 className="font-medium text-purple-700">Informed Consent</h5>
              <p className="text-sm text-gray-700">
                Review and sign the informed consent form after all your questions have been answered 
                to your satisfaction.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="bg-purple-100 rounded-full h-6 w-6 flex items-center justify-center text-purple-700 font-medium mr-3 mt-0.5 flex-shrink-0">6</div>
            <div>
              <h5 className="font-medium text-purple-700">Begin Participation</h5>
              <p className="text-sm text-gray-700">
                If you're eligible and have provided informed consent, you'll begin participating in 
                the trial according to the study protocol.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}
