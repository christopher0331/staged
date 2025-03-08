'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-rose-100 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-5 py-4 text-left flex justify-between items-center transition-colors",
          isOpen 
            ? "bg-gradient-to-r from-rose-50 to-rose-100 text-rose-800" 
            : "bg-white hover:bg-rose-50 text-gray-800"
        )}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-rose-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-5 py-4 bg-white">
          <div className="text-gray-700 space-y-2">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <div className="space-y-6">
      <div id="common-questions" className="space-y-4">
        <h3 className="text-xl font-semibold text-rose-700">Common Questions About Clinical Trials</h3>
        
        <div className="space-y-3">
          <FaqItem
            question="Why are clinical trials important?"
            answer={
              <p>
                Clinical trials test the effectiveness of new drugs or drug combinations. They provide 
                important insight that cannot be found in a lab setting, helping researchers determine 
                effective cancer treatments. For rare cancers like Leiomyosarcoma, clinical trials are 
                especially important as they can lead to new treatment options where few may currently exist.
              </p>
            }
            defaultOpen={true}
          />
          
          <FaqItem
            question="Are clinical trials safe?"
            answer={
              <>
                <p>
                  Clinical trials do have risks, like other medical tests, treatments, or procedures. 
                  The risks are higher in Phase 1 or Phase 2 clinical trials where fewer participants are involved.
                </p>
                <p className="mt-2">
                  Clinical research is overseen by the FDA to ensure trials are designed, conducted, analyzed, 
                  and reported according to federal law and good clinical practice regulations.
                </p>
                <p className="mt-2">
                  Clinical trials at cancer centers like Huntsman Cancer Institute are run through a series of 
                  committees to determine safety, usefulness, and need prior to opening to patients.
                </p>
              </>
            }
          />
          
          <FaqItem
            question="How do I know if a clinical trial is right for me?"
            answer={
              <p>
                The clinical research team will discuss the potential benefits and risks of the clinical 
                trial with you. You will then determine if the possible benefits outweigh the risks. You may 
                want to take part in a clinical trial to help find treatments that could help future patients, 
                or to access treatments not otherwise available. Discussing options with your healthcare team 
                is the best way to determine if a trial is appropriate for your situation.
              </p>
            }
          />
          
          <FaqItem
            question="Will my doctor find clinical trials that I may qualify for?"
            answer={
              <p>
                Your doctors may recommend clinical trials to you, depending on the treatment you have 
                previously received and your type of cancer. You can also look for clinical trials you 
                might want to take part in by reviewing the clinical trials available at cancer centers 
                or through resources like ClinicalTrials.gov. Many patients take an active role in finding 
                clinical trials that might be appropriate for them.
              </p>
            }
          />
          
          <FaqItem
            question="What kind of drugs are available through clinical trials?"
            answer={
              <>
                <p>
                  A variety of treatments are used in clinical trials. Some are designed to help your immune 
                  system. Others target specific genetic changes that cause cancer. The type of treatments or 
                  therapies you get will depend on your cancer type and any treatments you have received.
                </p>
                <p className="mt-2">
                  You may receive new therapy alone or combined with treatments like chemotherapy or hormone therapy. 
                  Other clinical trials may use surgery or radiation to see if they are more effective and/or have 
                  fewer side effects.
                </p>
                <p className="mt-2">
                  Your doctors and clinical research team will let you know about the possible benefits of each 
                  treatment and any known risks before you begin.
                </p>
              </>
            }
          />
          
          <FaqItem
            question="Are clinical trials only for people that have no other treatment options?"
            answer={
              <p>
                Clinical trials are for anyone who meets the trial's eligibility criteria, regardless of 
                treatment options. You and your care team can talk about whether you would need to adjust 
                your current treatment plan to consider a clinical trial. Some trials are specifically for 
                newly diagnosed patients, while others may be for patients who have tried certain treatments 
                already. The eligibility criteria will specify who can participate.
              </p>
            }
          />
          
          <FaqItem
            question="How long are clinical trials?"
            answer={
              <>
                <p>
                  It depends on the phase of the study. You may get a specific number of treatments, or you 
                  may stay on the new therapy as long as it is working.
                </p>
                <p className="mt-2">
                  You should always tell your health care team if you have any side effects from the clinical trial. 
                  They can treat your symptoms and make sure if is safe for you to continue.
                </p>
              </>
            }
          />
          
          <FaqItem
            question="Which providers are involved in my care during the trial?"
            answer={
              <p>
                All clinical trials have a research study team with physicians, advanced practice clinicians, 
                nurses, clinical coordinators, etc. The research study team is available to help answer questions, 
                treat side effects, and assist you. You will typically continue to see your regular oncologist as 
                well, who will coordinate with the research team to ensure your care is comprehensive.
              </p>
            }
          />
          
          <FaqItem
            question="Can I leave a clinical trial?"
            answer={
              <p>
                Taking part in a clinical trial is always your choice. You can tell your doctor if you want 
                to stop at any time and for any reason. Your healthcare team will help you transition to 
                standard care or other treatment options if you decide to leave a clinical trial.
              </p>
            }
          />
        </div>
      </div>
      
      <div id="costs" className="space-y-4 mt-8">
        <h3 className="text-xl font-semibold text-rose-700">Costs & Insurance</h3>
        
        <div className="bg-white rounded-lg border border-rose-200 p-5 shadow-sm">
          <h4 className="font-medium text-rose-800 mb-3">Is there a cost to take part in a clinical trial?</h4>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              When you take part in a clinical trial, much of the care is the same as if you were receiving 
              a standard treatment. You will continue to see a doctor, have regular lab tests, and get imaging 
              scans as needed. Health insurance often covers these costs, along with any approved treatments 
              that you receive while taking part in the trial.
            </p>
            
            <p className="text-gray-700">
              The clinical trial may require extra tests and procedures to ensure your safety and to gather 
              important information. These research costs are usually not covered by insurance. However, they 
              may be paid for by the study sponsor.
            </p>
            
            <p className="text-gray-700">
              Your doctor or clinical research team will discuss any additional costs with you and answer your 
              questions before you begin treatment. You can also speak with financial advocates at your cancer 
              center about insurance or billing concerns.
            </p>
            
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-100 mt-4">
              <h5 className="font-medium text-rose-800 mb-2">Insurance Coverage for Clinical Trials</h5>
              <p className="text-sm text-gray-700">
                Under the Affordable Care Act, health insurance plans cannot deny coverage for routine care 
                that you receive as part of a clinical trial and cannot drop your coverage because you choose 
                to participate in a clinical trial. Medicare also covers routine costs of qualifying clinical trials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
