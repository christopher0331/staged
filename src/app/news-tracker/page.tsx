import { Metadata } from "next";
import Link from "next/link";
import SidebarLink from "./components/SidebarLink";
import NewsDropdown from "./components/NewsDropdown";

export const metadata: Metadata = {
  title: "NLMSF News Tracker | News Archives",
  description: "Archive of news and updates from the National Leiomyosarcoma Foundation (NLMSF)",
};

export default function NewsTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-200 to-rose-200 rounded-full blur-3xl opacity-20 -z-10 transform -translate-x-1/3 translate-y-1/4"></div>
      
      <div className="container py-10 px-4 sm:px-6 mx-auto max-w-7xl relative">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text sm:text-5xl mb-4">NLMSF News Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Stay informed with the latest news, updates, and research in the LMS community</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4 text-gray-800">News Categories</h2>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <SidebarLink href="#latest-news">
                      Latest News
                    </SidebarLink>
                  </li>
                  <li>
                    <SidebarLink href="#research-updates">
                      Research Updates
                    </SidebarLink>
                  </li>
                  <li>
                    <SidebarLink href="#clinical-trials">
                      Clinical Trials
                    </SidebarLink>
                  </li>
                  <li>
                    <SidebarLink href="#foundation-updates">
                      Foundation Updates
                    </SidebarLink>
                  </li>
                  <li>
                    <SidebarLink href="#events">
                      Events & Webinars
                    </SidebarLink>
                  </li>
                  <li>
                    <SidebarLink href="#patient-stories">
                      Patient Stories
                    </SidebarLink>
                  </li>
                </ul>
              </nav>
              
              <div className="mt-8 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-100">
                <h3 className="font-semibold text-purple-800 mb-2">Subscribe to Updates</h3>
                <p className="text-sm text-gray-700 mb-3">Get the latest news delivered directly to your inbox.</p>
                <Link 
                  href="/newsletter-signup"
                  className="w-full block text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg text-sm hover:from-purple-700 hover:to-indigo-700 transition duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
              {/* Latest News Section */}
              <section id="latest-news" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5v2a2 2 0 01-2 2H9a2 2 0 01-2-2V6H5a2 2 0 00-2 2v10a2 2 0 002 2h14" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">NLMSF News Tracker</h2>
                </div>
                
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700">
                    The NLMSF News Tracker is your essential resource for staying informed about the latest developments 
                    in Leiomyosarcoma research, treatment options, clinical trials, and community events. Our comprehensive 
                    newsletters provide valuable insights and resources for patients, caregivers, and healthcare professionals.                    
                  </p>
                </div>
              
                {/* 2025 News Trackers Section */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">2025 NLMSF Newsletters</h3>
                  <NewsDropdown
                    year="2025"
                    colorClasses={{
                      base: "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-100",
                      text: "text-purple-800",
                      hoverText: "text-indigo-800"
                    }}
                    initialItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6748546",
                        title: "LMS/Sarcoma Community Connection",
                        date: "March 17, 2025",
                        description: "Patient education sessions, Tips for living with LMS, Medicare guidance"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6747853",
                        title: "LMS/Sarcoma Community Connection",
                        date: "March 1, 2025",
                        description: "Online education sessions, Cancer survivorship guidance, Caregiving support"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6747215",
                        title: "LMS/Sarcoma News Tracker",
                        date: "February 11, 2025",
                        description: "Radiation strategies, Clinical trials, Progress in LMS research, Coping with scanxiety"
                      }
                    ]}
                    additionalItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6746712",
                        title: "LMS/Sarcoma News Tracker",
                        date: "January 28, 2025",
                        description: "Clinical trials information, TKI for LMS patients, STRASS II/III trial updates, financial assistance resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6746206",
                        title: "LMS/Sarcoma News Tracker",
                        date: "January 14, 2025",
                        description: "New newsletter look, ASCO presentation on ICIs with TKIs, genetic testing, well-being through gardening"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6745686",
                        title: "NLMSF News Tracker",
                        date: "December 31, 2024",
                        description: "NLMSF Research Awardee for 2025-26 announced, research updates, advocacy tips"
                      }
                    ]}
                  />
                </div>
                
                {/* 2024 News Trackers Section */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">2024 NLMSF Newsletters</h3>
                  <NewsDropdown
                    year="2024"
                    colorClasses={{
                      base: "bg-gradient-to-br from-teal-50 to-cyan-50 border-teal-100",
                      text: "text-teal-800",
                      hoverText: "text-teal-800"
                    }}
                    initialItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6745686",
                        title: "NLMSF News Tracker",
                        date: "December 31, 2024",
                        description: "Research awardee announcement, advocacy tips, building resilience and strength"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6745367",
                        title: "NLMSF News Tracker",
                        date: "December 20, 2024",
                        description: "January education sessions, holiday coping support, NLMSF bookshelf resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6744783",
                        title: "NLMSF News Tracker",
                        date: "December 3, 2024",
                        description: "Gratitude, upcoming research presentations, genomic profiling, Giving Tuesday"
                      }
                    ]}
                    additionalItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6744291",
                        title: "NLMSF News Tracker",
                        date: "November 21, 2024",
                        description: "Thanksgiving message, CTOS meeting report, survivorship care, supplements guidance"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6743612",
                        title: "NLMSF News Tracker",
                        date: "November 5, 2024",
                        description: "Survivorship care clinic, genetic testing research, LMS Count Me In project"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6743434",
                        title: "NLMSF News Tracker",
                        date: "October 29, 2024",
                        description: "Cancer research surveys, clinical trials, exercise benefits, second opinions"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6742867",
                        title: "NLMSF News Tracker",
                        date: "October 11, 2024",
                        description: "Book club, online sessions, oral hygiene during chemo, tax guidance"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6742394",
                        title: "NLMSF News Tracker",
                        date: "September 17, 2024",
                        description: "BostonGene collaboration, coping tips, flu shot guidance, palliative care"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6741969",
                        title: "NLMSF News Tracker",
                        date: "September 3, 2024",
                        description: "Patient education sessions, telehealth options, treatment resistance research"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6741713",
                        title: "NLMSF News Tracker",
                        date: "August 23, 2024",
                        description: "Immunotherapy in sarcoma, uterine LMS treatment, palliative care, caregiver tips"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6740952",
                        title: "NLMSF News Tracker",
                        date: "July 18, 2024",
                        description: "Sarcoma Awareness Month, clinical trial discussions, recorded presentations"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6740718",
                        title: "NLMSF News Tracker",
                        date: "July 2, 2024",
                        description: "National LMS Awareness Day, support resources, clinical trial spotlight"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6740412",
                        title: "NLMSF News Tracker",
                        date: "June 20, 2024",
                        description: "Clinical trials updates, cancer nutrition, psychosocial support, LMS LifeLine Buddy Program"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6739987",
                        title: "NLMSF News Tracker",
                        date: "June 2, 2024",
                        description: "Cancer Survivors Month, survivorship messages, Sarcoma Awareness Month preview"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6733166",
                        title: "NLMSF News Tracker",
                        date: "May 19, 2024",
                        description: "Caregiving resources, nutrition guidance, veterans benefits, financial assistance"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6732178",
                        title: "NLMSF News Tracker",
                        date: "May 3, 2024",
                        description: "Radiation updates, nutrition session, dental care tips, skin care during treatment"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6724753",
                        title: "NLMSF News Tracker",
                        date: "April 23, 2024",
                        description: "Cardiotoxicity research, survivorship care, supplements guidance, quality of life podcasts"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6723113",
                        title: "NLMSF News Tracker",
                        date: "April 9, 2024",
                        description: "Thoracic procedures, caregiver guidance, oral health in cancer care, financial resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6721613",
                        title: "NLMSF News Tracker",
                        date: "March 26, 2024",
                        description: "Patient-driven initiatives, Count Me In project, drug repurposing, cancer camps for families"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6719961",
                        title: "NLMSF News Tracker",
                        date: "March 12, 2024",
                        description: "Circle of Hope, clinical trials panel, Count Me In project, Rare Disease Day"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6718197",
                        title: "NLMSF News Tracker",
                        date: "February 26, 2024",
                        description: "Rare Disease Day, financial help session, nutrition guidance, integrative medicine"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6690165",
                        title: "NLMSF News Tracker",
                        date: "February 13, 2024",
                        description: "Clinical trials perspectives, survivorship tips, ASCO prior authorization updates"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6690165",
                        title: "NLMSF News Tracker",
                        date: "January 30, 2024",
                        description: "2023 Accountability Report, clinical trials, social security disability guidance"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6688469",
                        title: "NLMSF News Tracker",
                        date: "January 16, 2024",
                        description: "New Year's message, drug repurposing webinar, LMS diagnosis support, research updates"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6686981",
                        title: "NLMSF News Tracker",
                        date: "January 2, 2024",
                        description: "New Year reflections, diagnosis support clinic, legal tips, community testimonials"
                      }
                    ]}
                  />
                </div>
                
                {/* 2023 News Trackers Section */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">2023 NLMSF Newsletters</h3>
                  <NewsDropdown
                    year="2023"
                    colorClasses={{
                      base: "bg-gradient-to-br from-pink-50 to-rose-50 border-pink-100",
                      text: "text-pink-800",
                      hoverText: "text-pink-800"
                    }}
                    initialItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6683721",
                        title: "NLMSF News Tracker",
                        date: "December 19, 2023",
                        description: "Holiday message, foundation researcher updates, LMS research highlights, clinical trials"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6681829",
                        title: "NLMSF News Tracker",
                        date: "December 2, 2023",
                        description: "Year-end updates, research highlights, community support resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6673053",
                        title: "NLMSF News Tracker",
                        date: "November 19, 2023",
                        description: "Thanksgiving reflections, patient resources, research highlights"
                      }
                    ]}
                    additionalItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6672141",
                        title: "NLMSF News Tracker",
                        date: "November 7, 2023",
                        description: "Clinical trial updates, research findings, patient support resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6670417",
                        title: "NLMSF News Tracker",
                        date: "October 25, 2023",
                        description: "Fall research updates, clinical trial opportunities, community events"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6668829",
                        title: "NLMSF News Tracker",
                        date: "October 10, 2023",
                        description: "Research breakthroughs, educational resources, support initiatives"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6666141",
                        title: "NLMSF News Tracker",
                        date: "September 30, 2023",
                        description: "Monthly research highlights, patient stories, foundation updates"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6659973",
                        title: "NLMSF News Tracker",
                        date: "September 5, 2023",
                        description: "Back-to-school research roundup, clinical trial news, community resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6651337",
                        title: "NLMSF News Tracker",
                        date: "August 22, 2023",
                        description: "Summer research updates, patient education resources, community events"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6649013",
                        title: "NLMSF News Tracker",
                        date: "August 4, 2023",
                        description: "Mid-summer updates, research highlights, patient support initiatives"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6649013",
                        title: "NLMSF News Tracker",
                        date: "July 24, 2023",
                        description: "Sarcoma Awareness Month highlights, research breakthroughs, community events"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6283850",
                        title: "NLMSF News Tracker",
                        date: "July 8, 2023",
                        description: "National LMS Awareness Day information, research updates, patient resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6282966",
                        title: "NLMSF News Tracker",
                        date: "June 27, 2023",
                        description: "Mid-year foundation update, ASCO highlights, upcoming events"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc-6281814",
                        title: "NLMSF News Tracker",
                        date: "June 13, 2023",
                        description: "Summer research roundup, clinical trial opportunities, educational resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-8z011ysyoc",
                        title: "NLMSF News Tracker",
                        date: "May 30, 2023",
                        description: "Memorial Day edition, research updates, community support initiatives"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-u8udrleqqq-6279573",
                        title: "NLMSF News Tracker",
                        date: "May 16, 2023",
                        description: "Spring research highlights, patient stories, educational webinars"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-u8udrleqqq",
                        title: "NLMSF News Tracker",
                        date: "May 1, 2023",
                        description: "May edition, research breakthroughs, support resources, community events"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-newstracker-6276873",
                        title: "NLMSF News Tracker",
                        date: "April 18, 2023",
                        description: "Spring clinical trial updates, research grant announcements, patient advocacy"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-newstracker-6275741",
                        title: "NLMSF News Tracker",
                        date: "April 4, 2023",
                        description: "April edition, research highlights, patient support resources, upcoming events"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-newstracker-6274553",
                        title: "NLMSF News Tracker",
                        date: "March 21, 2023",
                        description: "Research updates, clinical trial opportunities, community resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-newstracker-6273873",
                        title: "NLMSF News Tracker",
                        date: "March 12, 2023",
                        description: "Mid-March edition, research findings, patient education initiatives"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-newstracker",
                        title: "NLMSF News Tracker",
                        date: "March 7, 2023",
                        description: "Early-March updates, research breakthroughs, support resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker",
                        title: "NLMSF News Tracker",
                        date: "February 25, 2023",
                        description: "February research roundup, clinical trial highlights, community events"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-january-17-6271521",
                        title: "NLMSF News Tracker",
                        date: "February 14, 2023",
                        description: "Valentine's Day edition, research updates, patient stories, support resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-january-17-6270305",
                        title: "NLMSF News Tracker",
                        date: "February 1, 2023",
                        description: "Early-February updates, research highlights, educational opportunities"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-january-17-2023",
                        title: "NLMSF News Tracker",
                        date: "January 17, 2023",
                        description: "Mid-January research updates, clinical trial news, community resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-jan-10-2023",
                        title: "NLMSF News Tracker",
                        date: "January 10, 2023",
                        description: "New year research roundup, patient support initiatives, upcoming events"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-january-3-2023",
                        title: "NLMSF News Tracker",
                        date: "January 3, 2023",
                        description: "New Year's edition, 2023 research outlook, foundation initiatives"
                      }
                    ]}
                  />
                </div>
                
                {/* 2022 News Trackers Section */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">2022 NLMSF Newsletters</h3>
                  <NewsDropdown
                    year="2022"
                    colorClasses={{
                      base: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-100",
                      text: "text-amber-800",
                      hoverText: "text-amber-800"
                    }}
                    initialItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/7svzznur2t",
                        title: "NLMSF News Tracker",
                        date: "December 27, 2022",
                        description: "Year-end updates, research highlights, foundation news"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-december-14-2022",
                        title: "NLMSF News Tracker",
                        date: "December 14, 2022",
                        description: "Holiday resources, clinical trial updates, patient education"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-december-6-2022",
                        title: "NLMSF News Tracker",
                        date: "December 6, 2022",
                        description: "Research highlights, community news, year-end updates"
                      }
                    ]}
                    additionalItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-november-29-2022",
                        title: "NLMSF News Tracker",
                        date: "November 29, 2022",
                        description: "CTOS conference updates, giving Tuesday announcement, patient stories"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-november-21-2022",
                        title: "NLMSF News Tracker",
                        date: "November 21, 2022",
                        description: "Thanksgiving message, research roundup, community support options"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-november-10-2022",
                        title: "NLMSF News Tracker",
                        date: "November 10, 2022",
                        description: "Monthly research updates, new educational resources, foundation news"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-october-28-2022",
                        title: "NLMSF News Tracker",
                        date: "October 28, 2022",
                        description: "Fall Denver events, research updates, patient advocacy opportunities"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-october-15-2022",
                        title: "NLMSF News Tracker",
                        date: "October 15, 2022",
                        description: "Sarcoma awareness activities, clinical trial news, community stories"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-september-30-2022",
                        title: "NLMSF News Tracker",
                        date: "September 30, 2022",
                        description: "Fall research updates, upcoming events, patient resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-september-15-2022",
                        title: "NLMSF News Tracker",
                        date: "September 15, 2022",
                        description: "Back-to-school challenges for families, research updates, community news"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-august-25-2022",
                        title: "NLMSF News Tracker",
                        date: "August 25, 2022",
                        description: "Denver community update, summer research highlights, LMS resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-august-10-2022",
                        title: "NLMSF News Tracker",
                        date: "August 10, 2022",
                        description: "Sarcoma Awareness Month recap, community stories, research advancements"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-july-25-2022",
                        title: "NLMSF News Tracker",
                        date: "July 25, 2022",
                        description: "Sarcoma Awareness Month special edition, patient advocacy updates"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-july-10-2022",
                        title: "NLMSF News Tracker",
                        date: "July 10, 2022",
                        description: "Mid-year research updates, summer community events, patient resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-june-30-2022",
                        title: "NLMSF News Tracker",
                        date: "June 30, 2022",
                        description: "ASCO highlights, research funding announcements, upcoming webinars"
                      }
                    ]}
                  />
                </div>
                
                {/* 2021 News Trackers Section */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">2021 News Trackers</h3>
                  <NewsDropdown
                    year="2021"
                    colorClasses={{
                      base: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100",
                      text: "text-blue-800",
                      hoverText: "text-blue-800"
                    }}
                    initialItems={[
                      {
                        url: "#archive-2021",
                        title: "View 2021 Archives",
                        date: "Full Year",
                        description: "Access the complete 2021 newsletter archive"
                      }
                    ]}
                    additionalItems={[
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-december-2021",
                        title: "NLMSF News Tracker",
                        date: "December 21, 2021",
                        description: "Year-end highlights, research breakthroughs, holiday support resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-november-2021",
                        title: "NLMSF News Tracker",
                        date: "November 18, 2021",
                        description: "Giving Tuesday campaign, research updates, community stories"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-october-2021",
                        title: "NLMSF News Tracker",
                        date: "October 12, 2021",
                        description: "Fall conference summaries, clinical trial listings, educational resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-september-2021",
                        title: "NLMSF News Tracker",
                        date: "September 24, 2021",
                        description: "Fall foundation updates, Denver events, research highlights"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-august-2021",
                        title: "NLMSF News Tracker",
                        date: "August 27, 2021",
                        description: "Sarcoma Awareness Month recap, patient stories, clinical trial news"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-july-2021",
                        title: "NLMSF News Tracker",
                        date: "July 15, 2021",
                        description: "Sarcoma Awareness Month special: advocacy initiatives, research updates"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-june-2021",
                        title: "NLMSF News Tracker",
                        date: "June 28, 2021",
                        description: "Summer update, ASCO highlights, upcoming virtual support groups"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-may-2021",
                        title: "NLMSF News Tracker",
                        date: "May 21, 2021",
                        description: "Spring research roundup, COVID-19 vaccine information for patients"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-april-2021",
                        title: "NLMSF News Tracker",
                        date: "April 16, 2021",
                        description: "Research grant announcements, virtual events, patient resources"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-march-2021",
                        title: "NLMSF News Tracker",
                        date: "March 24, 2021",
                        description: "Clinical trial updates, spring foundation news, community stories"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-february-2021",
                        title: "NLMSF News Tracker",
                        date: "February 15, 2021",
                        description: "Winter foundation update, virtual support resources, research news"
                      },
                      {
                        url: "https://mailchi.mp/nlmsf.org/nlmsf-news-tracker-january-2021",
                        title: "NLMSF News Tracker",
                        date: "January 18, 2021",
                        description: "New year update, research highlights, upcoming virtual events"
                      }
                    ]}
                  />
                </div>
                
              </section>
              
              {/* Research Updates Section */}
              <section id="research-updates" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">Research Updates</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Research Update Item */}
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-teal-800">New Study Identifies Potential Therapeutic Target for LMS</h3>
                      <span className="text-sm text-gray-500">April 12, 2023</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Researchers at Memorial Sloan Kettering Cancer Center have identified a potential new therapeutic target for Leiomyosarcoma. The study, published in Cancer Research, found that inhibiting a specific protein may slow tumor growth.
                    </p>
                    <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
              
              {/* Clinical Trials Section */}
              <section id="clinical-trials" className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-rose-700 bg-clip-text text-transparent">Clinical Trials</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Clinical Trial Item */}
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-pink-800">Phase II Trial of Immunotherapy Combination for Advanced LMS</h3>
                      <span className="text-sm text-gray-500">March 8, 2023</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      A new Phase II clinical trial is now recruiting patients with advanced Leiomyosarcoma to test a novel combination of immunotherapy agents. The trial is being conducted at multiple centers across the United States.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">Recruiting</span>
                      <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">Phase II</span>
                      <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">Immunotherapy</span>
                    </div>
                    <a href="#" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium">
                      Trial Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/newly-diagnosed/clinical-trials" 
                    className="inline-flex items-center bg-gradient-to-r from-pink-600 to-rose-600 text-white px-5 py-2 rounded-lg shadow-sm hover:from-pink-700 hover:to-rose-700 transition duration-200 font-medium"
                  >
                    View All Clinical Trials
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </section>
              
              {/* Denver Support Section */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 shadow-sm mb-8">
                <h3 className="flex items-center text-lg font-semibold text-amber-800 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Denver Support Resources
                </h3>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="text-gray-700 md:w-2/3">
                    Based in Denver, Colorado, the NLMSF provides local support groups, educational workshops, and resources for LMS patients and their families in the Denver metro area.
                  </p>
                  <div className="mt-4 md:mt-0 md:w-1/3 md:pl-6 text-center">
                    <a 
                      href="/denver-resources" 
                      className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-amber-700 hover:to-orange-700 transition duration-300 font-medium"
                    >
                      Denver Resources
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
