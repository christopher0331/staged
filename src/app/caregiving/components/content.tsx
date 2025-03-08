import React from 'react';
import Link from 'next/link';
import { ExternalLink, FileText, Video, Headphones, Calendar } from 'lucide-react';

export function CaregivingContent() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="mb-12">
        <div className="bg-purple-50 border-l-4 border-nlmsf-purple p-6 rounded-r-lg mb-8">
          <h2 className="text-2xl font-bold text-nlmsf-purple mb-4">Informal Guidance Highlights</h2>
          <p className="mb-4">
            We provide PowerPoints to share with attendees (in place of taking notes during sessions). 
            More resources are available after sessions to help guide and support your caregiving journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a 
              href="#" 
              className="inline-flex items-center text-nlmsf-purple hover:text-purple-700 font-medium"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download PowerPoint Slides
            </a>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Group Discussion</h2>
          <p className="mb-4">
            Share concerns, experiences, and perspectives for mutual support with others who are:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Just starting out in caregiving</li>
            <li>Currently in caregiving mode</li>
            <li>No longer caregiving</li>
          </ul>
          <p className="text-sm italic mt-4">
            Join our quarterly virtual caregiving guidance sessions to connect with other caregivers.
          </p>
        </div>
      </section>

      <section id="resources" className="mb-12">
        <h2 className="text-2xl font-bold text-nlmsf-purple mb-6 pb-2 border-b border-gray-200">
          FROM THE NATIONAL LEIOMYOSARCOMA FOUNDATION
        </h2>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="bg-nlmsf-purple text-white p-4">
            <h3 className="text-xl font-bold">NLMSF Caregiving Counts – Guide</h3>
          </div>
          <div className="p-6">
            <p className="mb-4 text-gray-700">
              <span className="font-medium">Note:</span> Quarterly virtual caregiving guidance sessions are held with Caregivers discussing perspectives, support, tips, and more.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-nlmsf-purple mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Caregiving Counts Slides for patients and families</h4>
                  <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                    Download Slides <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Headphones className="h-5 w-5 text-nlmsf-purple mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">NLMSF Podcast on Caring for the Caregiver</h4>
                  <a 
                    href="https://nlmsf.org/podcast/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    Listen to Podcast <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-nlmsf-purple mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Caring for the Caregiver PowerPoint</h4>
                  <p className="text-sm text-gray-600">Notes for the family</p>
                  <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                    Download PowerPoint <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="text-xl font-bold">More Resource Assistance</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Caregiver Support Video Series from Cancer.Net</h4>
                <p className="mb-3 text-gray-700">
                  This video series offers educational support as you assist with the everyday needs of your loved one, as well as self-care techniques to improve your own quality of life.
                </p>
                <a 
                  href="https://www.cancer.net/navigating-cancer-care/videos/family-friends-and-caregivers" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  <Video className="mr-2 h-5 w-5" />
                  View Video Series <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-medium mb-3">Key Support Areas</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-nlmsf-purple mr-2">•</span>
                    <span><strong>Physical Care Training:</strong> drain care, lifting, pain management, medication management, symptom/side effect management, and identifying signs of infection.</span>
                  </li>
                  <li className="flex">
                    <span className="text-nlmsf-purple mr-2">•</span>
                    <span><strong>Caregiver Self-Care:</strong> nutrition, physical activity, stress management and coping, dealing with fear of recurrence, and deep breathing/meditation.</span>
                  </li>
                  <li className="flex">
                    <span className="text-nlmsf-purple mr-2">•</span>
                    <span><strong>Advocacy:</strong> how to effectively communicate your loved one's needs to the cancer care team.</span>
                  </li>
                  <li className="flex">
                    <span className="text-nlmsf-purple mr-2">•</span>
                    <span><strong>Caregiver Stories:</strong> caregivers share their experiences through the ups and downs of their journey.</span>
                  </li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-medium mb-2">Additional Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <a 
                      href="https://www.cancer.net/coping-with-cancer/caring-loved-one/tips-being-successful-caregiver" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline inline-flex items-center"
                    >
                      Tips for Being a Successful Caregiver <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.cancer.net/navigating-cancer-care/videos/family-friends-and-caregivers" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline inline-flex items-center"
                    >
                      Tips for Family, Friends, and Caregivers <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.cancer.net/sites/cancer.net/files/asco_answers_guide_caregiving.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:underline inline-flex items-center"
                    >
                      ASCO Answers Guide to Caregiving (PDF) <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold text-green-700 mb-4">SURVIVORSHIP CARE PLANNING</h2>
          <p className="mb-4">
            A One-on-One Discussion with the Foundation to initiate a customized plan for the patient with the caregiver – a Team Effort and offered as another information session by the NLMSF for general discussion and then one-on-one follow up if requested by the patient.
          </p>
          
          <h3 className="text-lg font-medium mt-6 mb-2">Sharing this plan with your healthcare team:</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Oncology Care Team</li>
            <li>Regular doctors outside of the oncology setting, such as:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Endocrinologist if you have diabetes</li>
                <li>Cardiologist</li>
                <li>Other specialists involved in your care</li>
              </ul>
            </li>
          </ul>
          
          <div className="mt-6">
            <a 
              href="https://www.cancer.net/sites/cancer.net/files/asco_answers_guide_caregiving.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Survivorship Care Planning Guide
            </a>
          </div>
        </div>
      </section>
      
      <section>
        <div className="bg-nlmsf-purple text-white p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Next Caregiving Session</h2>
          <p className="mb-6">
            Connect with other caregivers, share experiences, and learn valuable strategies for your caregiving journey.
          </p>
          <div className="inline-flex items-center justify-center bg-white text-nlmsf-purple font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
            <Calendar className="mr-2 h-5 w-5" />
            <a href="/contact" className="inline-block">Register for Next Session</a>
          </div>
        </div>
      </section>
    </div>
  );
}
