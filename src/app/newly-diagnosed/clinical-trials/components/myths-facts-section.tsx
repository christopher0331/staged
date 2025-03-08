import { AlertTriangle, CheckCircle } from "lucide-react"

interface MythFactProps {
  myth: string;
  fact: string;
}

function MythFactItem({ myth, fact }: MythFactProps) {
  return (
    <div className="bg-white rounded-lg border border-amber-200 shadow-sm overflow-hidden">
      <div className="bg-amber-50 p-4 flex items-start gap-3">
        <div className="bg-amber-100 p-1.5 rounded-full mt-0.5">
          <AlertTriangle className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h4 className="font-medium text-amber-800 mb-1">Myth</h4>
          <p className="text-gray-700">{myth}</p>
        </div>
      </div>
      
      <div className="p-4 flex items-start gap-3">
        <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
          <CheckCircle className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <h4 className="font-medium text-green-800 mb-1">Fact</h4>
          <p className="text-gray-700">{fact}</p>
        </div>
      </div>
    </div>
  )
}

export function MythsFactsSection() {
  return (
    <div className="space-y-6">
      <div id="misconceptions" className="space-y-4">
        <p className="text-gray-700">
          There are many misconceptions about clinical trials that may prevent patients from considering 
          them as a treatment option. Let's address some common myths with facts to help you make an 
          informed decision.
        </p>
        
        <div className="grid grid-cols-1 gap-6 mt-6">
          <MythFactItem 
            myth="Clinical trials are only for patients who have exhausted all other treatment options."
            fact="Clinical trials are available for patients at all stages of cancer treatment. Some trials are specifically designed for newly diagnosed patients, while others are for patients who have already received certain treatments."
          />
          
          <MythFactItem 
            myth="If I join a clinical trial, I might receive a placebo instead of actual treatment."
            fact="In cancer clinical trials, placebos are rarely used alone. If a placebo is used, it's typically given along with standard treatment. You will be informed if the trial involves a placebo before you agree to participate."
          />
          
          <MythFactItem 
            myth="Clinical trials are dangerous because treatments are untested."
            fact="All treatments in clinical trials have undergone rigorous laboratory testing before being offered to patients. Trials follow strict protocols and are closely monitored for safety. In many cases, participants receive more frequent and careful medical attention than they would with standard care."
          />
          
          <MythFactItem 
            myth="Once I start a clinical trial, I cannot leave until it's completed."
            fact="Participation in clinical trials is completely voluntary. You can choose to leave a clinical trial at any time, for any reason, without any penalty or impact on your future medical care."
          />
          
          <MythFactItem 
            myth="Clinical trials are too expensive and not covered by insurance."
            fact="Many costs in clinical trials are covered by insurance. The Affordable Care Act requires insurance companies to cover routine care costs in clinical trials. Research costs are typically covered by the trial sponsor. Financial counselors can help you understand potential costs before you enroll."
          />
          
          <MythFactItem 
            myth="Clinical trials are only conducted at major medical centers in big cities."
            fact="While many trials are available at major cancer centers, clinical trials are increasingly being offered at community hospitals and cancer centers. Some trials are even designed with multiple locations to make participation more accessible to patients in different geographic areas."
          />
          
          <MythFactItem 
            myth="Participating in a clinical trial means I'll be treated like a 'guinea pig' rather than a patient."
            fact="Clinical trials follow strict ethical guidelines that prioritize patient welfare. Research teams include medical professionals dedicated to patient care. Many patients report receiving more personalized attention and support during clinical trials than with standard treatment."
          />
          
          <MythFactItem 
            myth="Clinical trials only benefit future patients, not current participants."
            fact="While clinical trials do help future patients, current participants may benefit directly from access to promising new treatments before they're widely available. Even if a particular treatment doesn't work for you, the close monitoring and comprehensive care provided during trials can be beneficial."
          />
        </div>
        
        <div className="bg-white rounded-lg border border-amber-200 p-5 shadow-sm mt-6">
          <h4 className="font-medium text-amber-800 mb-3">Learn More About Clinical Trial Facts</h4>
          <p className="text-gray-700">
            For more information about common misconceptions and facts about clinical trials, 
            visit the Huntsman Cancer Institute's article: 
            <a 
              href="https://healthcare.utah.edu/huntsmancancerinstitute/news/2024/06/ask-expert-truth-about-clinical-trials" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 ml-1 font-medium"
            >
              The Truth About Clinical Trials: Facts vs Myths
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
