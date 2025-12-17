import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Second Opinions for LMS Patients | NLMSF',
  description: 'Learn about the importance of seeking second opinions for Leiomyosarcoma (LMS) patients, resources, and guidance on the process.',
};

// Main section components
const Hero = () => (
  <div className="relative bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-6 overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <span className="inline-block mb-5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
        Patient Resource
      </span>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-6">
        Second Opinions for LMS Patients
      </h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        Understanding the importance of second opinions for rare cancers like Leiomyosarcoma and how to navigate the process effectively.
      </p>
      <a href="#resources" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:translate-y-0.5 transition-all">
        Find Resources <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
  </div>
);

const SecondOpinionsPage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Seeking a second opinion is an important step for many cancer patients, especially those with 
            rare cancers like Leiomyosarcoma (LMS). This page provides essential information about why 
            patients seek second opinions, how to navigate the process, and resources available to help.
          </p>
        </div>
        
        {/* Main content sections */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content - 3 columns on large screens */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Why seek section */}
            <section id="why-seek" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-question-circle text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">Why a Second Opinion?</h2>
              </div>
              
              <div className="p-6">
                <p className="mb-4">Multiple factors justify patients to seek a second medical opinion.</p>
                
                <p className="mb-4">From 17% to 68% of the patients, according to different authors Philip et al. (2010); Mellink et al. (2003), ask for second medical opinion to confirm diagnosis or treatment (Mellink et al., 2003). Nearly half (46%) of cancer patients sought a second medical opinion due to treatment complications (Tam et al., 2005).</p>
                
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
                  <p className="font-medium text-blue-800">Your reason for getting a second doctor to weigh in on your cancer diagnosis and care may be as simple as wanting as much information as possible. But you may also want another opinion to:</p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      Make sure your diagnosis is right
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      Find out more about the type, stage, and location of your cancer
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      Talk to a doctor with expertise in your cancer
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      Explore other treatment options
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                      See what clinical trials might work for you
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Patient profiles section */}
            <section id="patient-profiles" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">The "NOMADIC" Patient Profile</h2>
              </div>
              
              <div className="p-6">
                <p className="mb-4">Patients temporarily referring to multiple practitioners of the same medical specialty, or different specialties for the same symptoms, are defined "nomads" by many authors (Boudali et al., 2012).</p>
                
                <p className="mb-4">In a study conducted among nomadic non-cancer patients seeking several opinions, researchers administered a questionnaire to 250 patients with different illnesses. Overall, 35% of all patients were illiterate, 30% had a primary school education, 22% a secondary school education and 13% a higher education degree.</p>
              </div>
            </section>
            
            {/* Patient-oncologist relationships section */}
            <section id="relationships" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-handshake text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">Patient-Oncologist Relationships</h2>
              </div>
              
              <div className="p-6">
                <p className="mb-4">The patient-oncologist relationship should carry inherent elements of trust, loyalty, intimacy and dependency, which belong to the emotional contract between patient and physician. The major predictor for loyalty and mutual commitment to treatment success are trust and satisfaction (DiMatteo, 2003; Platonova et al., 2008).</p>
                
                <p className="mb-4">Second opinion is even more complex, because two or more physicians are involved, resulting in two dyads, but not necessarily a triad (Greenfield et al., 2012).</p>
              </div>
            </section>
            
            {/* Advantages section */}
            <section id="advantages" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-plus-circle text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">Advantages of a Second Opinion</h2>
              </div>
              
              <div className="p-6">
                <p className="mb-4">The impact of second medical opinion in the oncology treatment pathway is currently being debated. Second medical opinion may involve potential advantages or disadvantages for patients, physicians, and society.</p>
                
                <p className="mb-4">Patients can benefit from a second medical opinion, resulting in improved diagnosis or better treatments, or can benefit psychologically being enabled to act more autonomously and exercise some control and freedom of choice (Axon et al., 2008).</p>
              </div>
            </section>
            
            {/* Sarcoma-specific section */}
            <section id="sarcoma-specific" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-rose-600 to-rose-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-heartbeat text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">Why It Matters for Sarcoma</h2>
              </div>
              
              <div className="p-6">
                <p className="mb-4">If you have a suspicious mass that could be sarcoma – regardless of body location – a sarcoma expert should see it first. Here's why:</p>
                
                <div className="space-y-4 mt-4">
                  <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                    <h3 className="font-semibold text-rose-700 mb-2">You might avoid surgery</h3>
                    <p>Our advanced diagnostic techniques may determine whether your tumor is benign, in which case you may not need any surgery, not even for a biopsy.</p>
                  </div>
                  
                  <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                    <h3 className="font-semibold text-rose-700 mb-2">Some treatments should begin before tumor removal</h3>
                    <p>Preoperative therapies like chemotherapy and radiation therapy are often used to prevent tumor cells from spreading and to improve surgeons' ability to remove it entirely, with clear margins. If your tumor is already removed before coming to a specialized center, your treatment choices may be limited.</p>
                  </div>
                  
                  <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                    <h3 className="font-semibold text-rose-700 mb-2">Sarcoma tumors are unique</h3>
                    <p>Sarcoma tumors have a fragile outer capsule that contains the cancer cells into a mass. If the outer capsule is damaged during biopsy or an operation to remove it, cancer cells can "spill" from the tumor, allowing them to spread or regrow. These tumors should be biopsied and/or removed only by a highly skilled and experienced surgeon who specializes in this rare cancer.</p>
                  </div>
                  
                  <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-500">
                    <h3 className="font-semibold text-rose-700 mb-2">Less-invasive biopsy</h3>
                    <p>Core needle biopsy that's guided by imaging such as ultrasound or computed tomography (CT) reduces the risk for cancer cells to spill from the tumor. This helps reduce the chance that the tumor will recur or that a patient would need more drastic surgery, such as amputation.</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <blockquote className="italic border-l-4 border-gray-300 pl-4 text-gray-600">
                    "They're very rare, and not every practitioner is experienced in dealing with these types of tumors. Some hospitals may have never seen certain types of sarcomas before."
                    <footer className="mt-2 text-sm">— Jeffrey M. Farma, MD, FACS, Surgical Oncologist</footer>
                  </blockquote>
                </div>
                
                <div className="mt-6 bg-indigo-50 p-5 rounded-lg">
                  <p className="font-medium text-indigo-800">
                    "It's crucial to see a physician at an NCI-designated comprehensive cancer center. You will be seen by a multidisciplinary team who specializes in sarcoma and can determine the best treatment plan for your specific disease."
                  </p>
                </div>
              </div>
            </section>
            
            {/* Feedback section */}
            <section id="feedback" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-comments text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">Giving Feedback to Your Care Team</h2>
              </div>
              
              <div className="p-6">
                <p className="mb-4">A complete visit report should be, directly and/or through the patient, referred to the oncologist who will treat the patient. Consultation between both physicians with the patient can be most valuable for a team approach to treatment considerations/strategies.</p>
                
                <p className="mb-4">The general practitioner could be informed of this process, if needed.</p>
              </div>
            </section>
            
            {/* Conclusions section */}
            <section id="conclusions" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">Conclusions</h2>
              </div>
              
              <div className="p-6">
                <p className="mb-4">Second medical opinion is an important step and an opportunity for cancer patients and also for the oncologists, in particular cases to ensure correct treatment strategy and not to overtreat the condition.</p>
              </div>
            </section>
            
            {/* Resources section */}
            <section id="resources" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-external-link-alt text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">Second Opinion Resources</h2>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-4">IMPORTANT VIRTUAL SECOND OPINION RESOURCE CENTERS</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Included Health</h4>
                    <p className="mb-3">Get a second opinion on your medical condition or treatment plan. Included Health connects you with world-leading experts experienced in treating your condition.</p>
                    <a href="https://windstreambenefits.com" className="text-blue-600 hover:underline flex items-center">
                      Learn more <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                  
                  <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">ColumbiaDoctors</h4>
                    <p className="mb-3">Included Health helps ColumbiaDoctors deliver its second opinions by gathering your medical records and history.</p>
                    <a href="https://www.columbiadoctors.org/patients/get-second-opinion" className="text-blue-600 hover:underline flex items-center">
                      Details <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                  
                  <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Dana Farber Cancer Institute</h4>
                    <p className="mb-3">Online Second Opinion program powered by Included Health. Typically takes 5-7 business days after medical records have been received.</p>
                    <a href="https://www.dana-farber.org/appointments-second-opinions/second-opinion-program/get-started" className="text-blue-600 hover:underline flex items-center">
                      Get started <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                  
                  <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                    <h4 className="font-semibold text-amber-800 mb-2">Stanford Medicine</h4>
                    <p className="mb-3">The Stanford Medicine Online Second Opinion program offers you easy access to their world-class doctors.</p>
                    <a href="https://stanfordhealthcare.org/second-opinion/overview.html" className="text-blue-600 hover:underline flex items-center">
                      Learn more <i className="fas fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-amber-800 mb-4">Additional Resources</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-amber-100 rounded-full mr-3 mt-1">
                      <i className="fas fa-video text-amber-700"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">MAYO CLINIC VIDEO</h4>
                      <p className="mb-1">The value of second opinions for cancer diagnoses</p>
                      <a href="https://www.youtube.com/watch?v=nv2HP9TbaYA" className="text-blue-600 hover:underline">Watch on YouTube</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-amber-100 rounded-full mr-3 mt-1">
                      <i className="fas fa-file-medical text-amber-700"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">MD Anderson Cancer Center</h4>
                      <p className="mb-1">Second Opinion Pathology</p>
                      <a href="https://www.mdanderson.org/for-physicians/refer-a-patient/second-opinion-pathology.html" className="text-blue-600 hover:underline">Learn more</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-amber-100 rounded-full mr-3 mt-1">
                      <i className="fas fa-microscope text-amber-700"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">American Cancer Society</h4>
                      <p className="mb-1">A Pathology Second Opinion Guidance</p>
                      <a href="https://www.cancer.org/cancer/diagnosis-staging/tests/biopsy-and-cytology-tests/understanding-your-pathology-report/how-to-learn-more.html" className="text-blue-600 hover:underline">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Getting a second opinion */}
            <section id="how-to" className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-sky-600 to-sky-800 p-6 text-white flex items-center">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <i className="fas fa-clipboard-list text-2xl"></i>
                </div>
                <h2 className="text-2xl font-bold">How to Get a Second Opinion</h2>
              </div>
              
              <div className="p-6">
                <p className="mb-6">Most insurance companies/employer insurance coverage will reimburse the cost of a second-opinion consultation for cancer and many insurers require a second opinion before covering some treatment costs. Patients can ask their treating physician to send their pathology slides or related materials directly to the Included Health sites listed above.</p>
                
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <p className="font-medium">
                    Contact the National Leiomyosarcoma Foundation for more information:
                    <a href="mailto:annieachee@aol.com" className="block mt-2 text-blue-600 hover:underline">annieachee@aol.com</a>
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar - 1 column on large screens */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">Quick Navigation</h2>
              
              <ul className="space-y-3 mb-8">
                <li>
                  <a href="#why-seek" className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-all">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Why Seek a Second Opinion
                  </a>
                </li>
                <li>
                  <a href="#patient-profiles" className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-all">
                    <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    Patient Profiles
                  </a>
                </li>
                <li>
                  <a href="#relationships" className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-all">
                    <span className="inline-block w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    Patient-Oncologist Relationships
                  </a>
                </li>
                <li>
                  <a href="#advantages" className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-all">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Advantages
                  </a>
                </li>
                <li>
                  <a href="#sarcoma-specific" className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-all">
                    <span className="inline-block w-2 h-2 bg-rose-500 rounded-full mr-3"></span>
                    Sarcoma-Specific Considerations
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-all">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Giving Feedback
                  </a>
                </li>
                <li>
                  <a href="#resources" className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-all">
                    <span className="inline-block w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#how-to" className="flex items-center p-2 text-gray-700 hover:bg-blue-50 rounded-lg group transition-all">
                    <span className="inline-block w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                    How to Get a Second Opinion
                  </a>
                </li>
              </ul>
              
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100 mb-6">
                <h3 className="font-semibold text-indigo-800 mb-2">Featured Resource</h3>
                <p className="text-sm text-gray-600 mb-3">Watch "The ABCs of a Sarcoma Diagnosis" presented by the Mayo Clinic and the National Leiomyosarcoma Foundation</p>
                <a href="https://www.youtube.com/watch?v=nv2HP9TbaYA" className="text-blue-600 hover:underline text-sm flex items-center">
                  <i className="fas fa-play-circle mr-1"></i> Watch video
                </a>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h3 className="font-semibold text-amber-800 mb-2">Need Support?</h3>
                <p className="text-sm text-gray-600 mb-3">Contact the National Leiomyosarcoma Foundation for guidance on seeking second opinions.</p>
                <a href="mailto:annieachee@aol.com" className="text-blue-600 hover:underline text-sm">
                  annieachee@aol.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SecondOpinionsPage;
