import Image from 'next/image'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
            <i className="fas fa-calendar-alt mr-2"></i>
            NLMSF Events & Fundraisers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
            Community Events
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-blue-300 mx-auto mb-6"></div>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="px-4 py-2 bg-purple-500/30 rounded-full">Fundraising</span>
            <span className="px-4 py-2 bg-indigo-500/30 rounded-full">Community</span>
            <span className="px-4 py-2 bg-blue-500/30 rounded-full">Support</span>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              GET INVOLVED IN WHAT WE ARE ALL ABOUT
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-heart text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Patient Support & Advocacy</h3>
              <p className="text-gray-700">Focusing on patient priorities and advocacy initiatives</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border-l-4 border-indigo-500 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-microscope text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Research Partnerships</h3>
              <p className="text-gray-700">Collaborative partnerships for LMS funding and research platform expansion</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Research Community</h3>
              <p className="text-gray-700">Integrating research progress within the International LMS Research Roundtable</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-handshake text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-teal-800 mb-3">Building Bridges</h3>
              <p className="text-gray-700">Continuing collaborative programs for the LMS Community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Awareness Recognition Section */}
      <div className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2025/08/events-page-image-2.png"
                  alt="Raton, New Mexico Leiomyosarcoma Awareness Day Recognition"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                  <i className="fas fa-award mr-2"></i>
                  Awareness Recognition
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Raton, New Mexico Recognizes Leiomyosarcoma Awareness Day
                </h3>
                <div className="prose prose-lg text-gray-700 mb-8">
                  <p className="mb-4">
                    Campaigning across New Mexico to build awareness of rare cancers, the{' '}
                    <a 
                      href="https://krtnradio.com/wp/2025/07/08/raton-city-commission-adopts-icip-and-hires-auditor/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-800 font-medium"
                    >
                      City/County of Raton
                    </a>
                    , New Mexico proudly recognizes Leiomyosarcoma Awareness Day.
                  </p>
                  <p className="mb-4">
                    We salute <strong>Bonnie Shaw of Raton, New Mexico</strong> for her dedication, advocacy, 
                    and tireless commitment to increasing awareness of this rare and aggressive cancer. 
                    Her efforts as an NLMSF Ambassador for the leiomyosarcoma patient and family communities 
                    reflect her determination to help save lives through education, outreach, and support.
                  </p>
                  <p>
                    Together, we honor her work and reaffirm our commitment to raising awareness of rare cancers 
                    like leiomyosarcoma — for the sake of earlier detection, improved treatment, and hope for 
                    patients and families everywhere.
                  </p>
                </div>
                <div className="flex items-center text-amber-600">
                  <i className="fas fa-heart mr-2"></i>
                  <span className="font-medium">NLMSF Ambassador Recognition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Our Community Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us in supporting the LMS community through fundraising events, awareness campaigns, and memorial activities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Event 1 - Beaux Arts Ball */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2023/03/Beau-Arts-Ball-Flyer.png"
                  alt="Drury College Beaux Arts Ball"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-3 py-1 bg-purple-500/80 rounded-full text-sm font-medium">Fundraiser</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Drury College Beaux Arts Ball</h3>
                <p className="text-gray-600 mb-4">In Honor of Susie Kapal</p>
                <div className="flex items-center text-purple-600">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span className="text-sm font-medium">Annual Fundraising Event</span>
                </div>
              </div>
            </div>

            {/* Event 2 - Jim Grim and Tom Minnock Tribute */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-64.jpg"
                  alt="Jim Grim and Tom Minnock Tribute"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-3 py-1 bg-indigo-500/80 rounded-full text-sm font-medium">Tribute</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Jim Grim and Tom Minnock Tribute Fundraiser</h3>
                <p className="text-gray-600 mb-4">Honoring the memory of community champions</p>
                <a 
                  href="https://nlmsf.org/wp-content/uploads/2021/07/NLMSF-Jim-Grim-and-Tom-Minnock-Tribute-Fundraiser-2.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  <i className="fas fa-file-pdf mr-2"></i>
                  View Event Details
                </a>
              </div>
            </div>

            {/* Event 3 - Rodney Williams Golf Outing */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-65.jpg"
                  alt="Rodney Williams Golf Outing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-3 py-1 bg-green-500/80 rounded-full text-sm font-medium">Golf Tournament</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rodney Williams Golf Outing for Tom</h3>
                <p className="text-gray-600 mb-4">Annual golf tournament fundraiser</p>
                <a 
                  href="https://nlmsf.org/wp-content/uploads/2021/07/NLMSF-Rodney-Williams-Golf-Outing-for-Tom.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                >
                  <i className="fas fa-file-pdf mr-2"></i>
                  View Event Details
                </a>
              </div>
            </div>

            {/* Event 4 - Neal Jacobs Golf Tournament */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-62.jpg"
                  alt="Neal Jacobs Golf Tournament"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-3 py-1 bg-blue-500/80 rounded-full text-sm font-medium">Golf Tournament</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Neal Jacobs Golf Tournament 2021</h3>
                <p className="text-gray-600 mb-4">Community golf fundraising event</p>
                <a 
                  href="https://nlmsf.org/wp-content/uploads/2021/08/Neal-Jacobs-Golf-Tournament-2021.docx.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <i className="fas fa-file-pdf mr-2"></i>
                  View Event Details
                </a>
              </div>
            </div>

            {/* Event 5 - Incline Hike */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2020/07/unnamed-63.jpg"
                  alt="Incline Hike Memorial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-3 py-1 bg-amber-500/80 rounded-full text-sm font-medium">Memorial Hike</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Incline Hike in Manitou Springs, CO</h3>
                <p className="text-gray-600 mb-4">In Memory of Shawn Borini</p>
                <div className="flex items-center text-amber-600">
                  <i className="fas fa-mountain mr-2"></i>
                  <span className="text-sm font-medium">Memorial Activity</span>
                </div>
              </div>
            </div>

            {/* Support Group Event */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2021/03/Support-group.jpeg"
                  alt="Support Group Meeting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="px-3 py-1 bg-teal-500/80 rounded-full text-sm font-medium">Support</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community Support Groups</h3>
                <p className="text-gray-600 mb-4">Regular meetings for patients and families</p>
                <div className="flex items-center text-teal-600">
                  <i className="fas fa-users mr-2"></i>
                  <span className="text-sm font-medium">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Membership Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                OPENING EVERY DOOR – TOGETHER
              </h2>
              <p className="text-xl mb-6 text-purple-100">
                Become a monthly member "investor" in LMS research... in LMS Survivorship! 
                Investors are Champions of Hope for the future of surviving this form of cancer (sarcoma) – 
                and WE – ALL OF US ARE THE "STAKEHOLDERS."
              </p>
              <p className="text-lg mb-8 text-purple-100">
                $1 a day or $5 – 10 a month or any amount will make all the difference in the world 
                toward accelerating research projects for Leiomyosarcoma!
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
                <p className="text-purple-100">
                  The Foundation is doing everything it can to fund the best research – being the best stewards 
                  of all donations received. Our Foundation Executive Committee vets incoming research grant 
                  proposals each year through a rigorous review process to ensure we are aiming for the best 
                  possible steps forward to accelerate key research that will produce treatment option results.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://nlmsf.org/support/" 
                  className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors duration-300"
                >
                  Become a Monthly Investor
                </a>
                <a 
                  href="https://nlmsf.org/donate/" 
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-300"
                >
                  Make a Donation
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://nlmsf.org/wp-content/uploads/2023/02/Roundtable-2022-Group-Photo-resized-jpeg-2-300x200.jpeg"
                  alt="International LMS Research Roundtable 2022"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">International LMS Research Roundtable 2022</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
