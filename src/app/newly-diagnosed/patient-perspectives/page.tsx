'use client';

import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaUserCircle } from 'react-icons/fa';

interface PatientStoryProps {
  name: string;
  content: string;
}

const PatientStory: React.FC<PatientStoryProps> = ({ name, content }) => {
  const [expanded, setExpanded] = React.useState(false);
  const contentPreview = content.length > 300 && !expanded ? `${content.slice(0, 300)}...` : content;
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-purple-100 p-6 mb-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-2 mr-3">
          <FaUserCircle className="text-white text-2xl" />
        </div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-700 to-purple-700 text-transparent bg-clip-text">{name}</h3>
      </div>
      <div className="relative text-gray-700">
        <FaQuoteLeft className="text-purple-200 absolute top-0 left-0 -ml-4 -mt-2 text-lg" />
        <p className="pl-2 pr-2 leading-relaxed">{contentPreview}</p>
        <FaQuoteRight className="text-purple-200 absolute bottom-0 right-0 text-lg" />
        
        {content.length > 300 && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition-all"
          >
            {expanded ? 'Show less' : 'Read more'}
            <svg className={`ml-1 h-4 w-4 transform ${expanded ? 'rotate-180' : ''} transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default function PatientPerspectives() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState('all');
  const patientStories = [
    {
      name: 'Dan',
      content: "Hi Anne great to hear from you. You're not going to believe this or at least I'm having a hard time believing it but my last pet scan showed no signs of cancer. Praise the Lord and God bless you and Mitch for all you have done and continue to do. I certainly will tell about you and Mitch. I meet with my oncologist tomorrow to get next steps. I'll be happy to share. That was a scary time When they told me it had spread to my liver and lungs and go home and get your affairs in order but you know what it was probably the best gift I had ever been given. Then along came Mitch and told me about Lynparza and here I am today with a new lease on life. We went out the other night to celebrate and I told the waitress what I was celebrating and at the end of dinner they gave me a birthday cake, I laughed until I cried how appropriate. Love To you both Dan"
    },
    {
      name: 'Pamela Randall',
      content: "I recommend that people that are newly diagnosed with any sarcoma, but certainly LMS – seek a Sarcoma Specialist immediately. Sarcomas are difficult to diagnose in the first place, so if you have a lump or bump anywhere- make sure to advocate for yourself to your primary care physician that perhaps seeking a sarcoma specialist's opinion would be wise. It certainly would be!"
    },
    {
      name: 'Cathie Boyles',
      content: "Hi All – I shared my story during the Mayo Clinic patient program with the NLMSF and I wanted to reach out to newly diagnosed patients, and those currently in treatment. Be your own best advocate by knowing as much as you can, asking the right questions of your care team and embracing support from those that love you. Be sure to let your care team know of any problems during treatment as communicating with them is key to better outcomes and it is also key to reducing your own anxiety. Knowledge is Power = Patient Power A great line borrowed from the NLMSF! I am a survivor and thriver, and I wish you the very same outcome. Together are stronger!"
    },
    {
      name: 'Marge Rudloff',
      content: "Hi, I am a 27 year survivor of LMS – a true blessing . . . a beacon of hope for others. I want to share my hope for all – my survivorship has been an amazing journey, taking one day at a time, and making the most of it! Taking small steps each day, sometimes trying to hold down anxiety and stress when its time for a scan, doctors visit, even if I have a strange feeling somewhere in my body. It's important to try to get through it all as best as possible – to enhance positive outcomes. Staying strong and hopeful is not easy to do, but it is something to always strive for each step of this journey. I have been blessed- there is no doubt. From a fellow LMS thriver, I reach out to you with my prayers for the best outcomes for all, with great support behind you all the way . . . and to know that everyone in this sarcoma community is pulling for you as I am."
    },
    {
      name: 'Nikki Hughes',
      content: "Hi, my name is Nikky, I was diagnosed with Leiomyosarcoma (LMS) a little over a year ago. This diagnosis is incredibly overwhelming. When I was first diagnosed I thought my life was over. I wish I knew then what I know now, and that is why I am writing this letter. When you get online and look up LMS, the information can be pretty negative. Be careful what you read, a lot of information is outdated, and skewed in one direction. It is important to find a medical team that is knowledgeable in sarcoma, positive and supportive. I have found this, and with the help from my family, friends, and medical team, I have so much hope for my future. I still have cancer and I am currently undergoing treatment, but that does not mean my life has to stop. I am a wife, nurse, and mother of middle school aged twins. I live a very active life. We just went on a vacation to Seattle, and Victoria B.C., I volunteer at my kids school, do yoga, manage my Etsy craft site (Crafts4CuringCancer), and have recently returned to work one day a week. I wake up each morning thankful for every day. I thank my body for all the hard work it is doing, and I say to myself \"today is going to be a great day,\" and they almost always are. And if they are not that is ok, your entitled to feel like \"this sucks,\" because sometimes it does. But don't give up hope. There are a lot of great supports out there such as the National Leiomyosarcoma Foundation. Hang in there, I know how you feel, and you can do this!"
    },
    {
      name: 'Marlana Stoddard',
      content: "Today I am going into my fifth year with ULMS. It has not been an easy path, but I do believe it can be carried with dignity and optimism. As an artist, I do find having a passion that takes me away from identifying with the disease so helpful. Each day I continue to follow a thread that was created the day before and new lessons about life come up; many about resilience and determination. Making time to do the things you love helps with the balance of appointments and therapies that are necessary now. I am finding new friendships and partnerships each day by holding onto this practice and this is a blessing!"
    },
    {
      name: 'Andrea Brill',
      content: "Laughing All the Way. I love to \"bring the funny\" to almost every aspect of my life; whether it be a bumpy hiccup or a splendid joy. My faith in God, my devoted husband, a steadfast belief in kindness, and my giggly outlook make my earthly journey a paradise. My life with LMS took hold 6 August 2018 with a total pelvic exenteration. During my consultation about my vaginal cancer, my surgeon explained that during the 16-hour surgery, he, along with 17 additional surgeons would remove nearly every organ in my urinary, gastrointestinal, and gynecologic systems. He also explained surgery would mean, I'd have a permanent urostomy and a colostomy. My immediate response was, \"I don't care if you have to gut me like a deer. I got a lot of living left to do.\" When things go wrong, humor sets them right. God didn't promise me a life without rides on narrow, winding roads. For me, this side of eternity means a longstanding relationship with an unkind foe. LMS is my grace cloud. It's an angry storm cloud that hovers over me, yet reminds me to be graceful, thoughtful, kind, and to appreciate everything, God has given me. This includes those harrowing rides on my LMS bus to delightful adventures on fluffy white clouds. I try to bring kindness to every situation. Kindness is memorable and brings comforting blanket hugs to the giver as well as to the receiver. It is my lesson in humility. Don't let LMS steal your thunder. It will hit you with some frightening punches. But as Rocky Balboa said about life, \"… it ain't how hard you hit; it's about how hard you can get hit, and keep moving forward.\" You are so very much stronger than any punch LMS throws. Twenty-five rounds of radiation after surgery, one year and nine months later, I remain cancer-free, smiling, and being the person I was meant to be. You can too. Stay kind, resilient, and tough. Never back down. You are meant to be the hero of your life story."
    },
    {
      name: 'Anne Markam',
      content: "HI – My name is Anne – and I want you to know that you have what it takes to get through a challenging diagnosis. If you keep your courage, strength, and resilience – your strength will be your lens to staying focused through important collaborative decision-making for selecting your sarcoma specialist, the best treatment protocol plan and maintaining quality of life in the treatment journey and after treatment is over. Stay strong!"
    },
    {
      name: 'Vani Way',
      content: "I am writing this to encourage newly diagnosed cancer patients that there is still life with this rare disease. I would encourage everyone to join a support group, like NLMSF because it's difficult to go through this journey alone. I was so lost when I was newly diagnosed with uterine LMS stage 1a and 4 months later stage 4. With 2 rounds of chemo and now 18 months from diagnosis, I do my best to lead a normal life. Stay positive and seek out positive people. I am lucky to have found this group NLMS. I benefitted from the webinars and a wealth of unbiased trust worthy information from professional and members of this group. Annie and her husband have organized these zoom calls. Both of them have been very approachable and helpful. This is my new extended family now. I welcome you all to this new family."
    },
    {
      name: 'Bobby Whitfield',
      content: "Dad was diagnosed with a Rhabdomyosarcoma when I was just 12 years old. I remember at the time it was the scariest thing that could happen to our family. My father was admitted to NIH in Bethesda MD for a clinical trial. During the same time another family from our hometown was getting the same scary diagnosis. He too as well attended NIH on the same protocol. NIH started both patients at the same time with 2 different treatment plans. My dad always had a deep dislike of doctors, he always told me, \"They call it practicing medicine for a reason.\" A few months later the other gentleman was beaten by Rhabdomyosarcoma. Dad's treatment by no means was easy. He was administered chemotherapy and radiation. Being raised Jehovah's Witness he also tried many herbal remedies, and teas. I do not recall how long my father was treated; I do remember the day he celebrated the word remission. May 1989, I graduated high school and was set for college. Our family doctor who had previously diagnosed my dad had scheduled a hernia operation for myself. I lifted a lot of weights during football practice and apparently pushed it. June 19th, I awoke after surgery, all I remember is a couple of doctors looking for moles on my body and discussing my surgery with concern. Due to my father being an NIH patient I was put on a plane within a few days where I was given my LMS diagnosis. I was also informed that it had spread to my lungs, and I had 24 tumors in them. At that time due to my age, I was allowed to stay on the 13th floor pediatrics. There's a whole new level of scared when being told you have possibly 3 months left of your life. I recall sitting in a conference room with several doctors and this was the best outcome! How? Unless I wanted to start an intense treatment of chemotherapy. I knew at this time everything I had watched my father endure was now my only hope."
    }
  ];

  const caregiverTypes = [
    { title: 'CAREGIVER to CAREGIVER', subtitle: 'Peer to Peer Support' },
    { title: 'CAREGIVERS SHARE THEIR THOUGHTS AND PERSPECTIVES', subtitle: 'IN SUPPORT . . .' }
  ];

  // Filter stories based on search term
  const filteredStories = patientStories.filter(story => {
    return story.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           story.content.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-indigo-100">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl shadow-md p-8 mb-12 text-center border border-purple-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-transparent rounded-full opacity-50 transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-indigo-200 to-transparent rounded-full opacity-50 transform -translate-x-20 translate-y-20"></div>
          
          <h1 className="text-4xl font-bold text-indigo-800 mb-4 relative z-10">Patient & Caregiver Perspectives</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto relative z-10">
            Click on the links to view the full articles or videos our members have provided to offer a patient or caregiver perspective and insight on how to live with LMS.
          </p>
        </div>

        {/* Caregiver Types Section */}
        <div className="mb-12">
          {caregiverTypes.map((type, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg shadow-sm border border-purple-200 mb-4">
              <h2 className="text-2xl font-bold text-purple-800">{type.title}</h2>
              <p className="text-gray-700">{type.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-lg">
              <input
                type="text"
                placeholder="Search by name or content..."
                className="w-full px-4 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setActiveFilter('all')} 
                className={`px-4 py-2 rounded-md transition-all ${activeFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                All Stories
              </button>
              <button 
                onClick={() => setActiveFilter('recent')} 
                className={`px-4 py-2 rounded-md transition-all ${activeFilter === 'recent' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Recent Stories
              </button>
            </div>
          </div>
        </div>

        {/* Patient Stories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-800 to-purple-700 text-transparent bg-clip-text">Patients</h2>
          
          {filteredStories.length === 0 ? (
            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-600">No stories found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredStories.map((story, index) => (
                <PatientStory key={index} name={story.name} content={story.content} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}