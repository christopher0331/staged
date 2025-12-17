export interface BoardMember {
  id: string;
  name: string;
  title: string;
  bio: string[];
  memberType: 'leadership' | 'medical' | 'outreach' | 'support';
  imageUrl?: string;
  organizations?: string[];
  links?: {
    text: string;
    url: string;
  }[];
}

export const boardMembers: BoardMember[] = [
  {
    id: 'annie-achee',
    name: 'Annie Achee',
    title: 'President and Community Education / Research Liaison',
    bio: [
      'I am devoted to the mission and goals of the Foundation, since its inception in 1999 – through the vision of Mr. Edmund Hoag.',
      'My aim is to preserve his legacy – preserve the Foundation as he wanted it to be, by continuing all the focus that he had from the beginning – patient-centric programs and initiatives to promote support and advocacy within the LMS Community.',
      'My dedication and commitment to this is unwavering – to faithfully serve the Champions of Hope – the patients; and promote collaborative relationships and partnerships with the Research Community – the Heroes Among us.'
    ],
    memberType: 'leadership',
    organizations: [
      'Connective Tissue Oncology Society (CTOS)',
      'American Society of Clinical Oncologists (ASCO)',
      'European Society of Medical Oncologists (ESMO)',
      'American Association of Cancer Research (AACR)',
      'ECOG-ACIN'
    ],
    links: [
      {
        text: 'Interview from Global Genes with the President of the National LMS Foundation',
        url: 'https://globalgenes.org/raredaily/rare-leader-annie-achee-president-of-the-national-leiomyosarcoma-foundation/'
      }
    ]
  },
  {
    id: 'lynne-greco-forges',
    name: 'Lynne Greco Forges, M.B.A., C.P.M.',
    title: 'NLMSF Treasurer',
    bio: [
      'I was diagnosed with uterine leiomyosarcoma in 2015. I have undergone numerous surgeries and chemotherapies. Throughout this time, I have done all I can to maintain a positive attitude. This, along with my strong faith and an excellent team of doctors, has carried me through.',
      'I enjoyed a 32-year career in Purchasing for various steel companies in Pittsburgh, PA. I love spending time with family and friends, cooking, reading, working on my house, spending time outdoors, yoga, walking and biking. I do a lot of volunteer work and do as much as possible to help others.',
      'The NLMSF has been such a great resource for me, being Treasurer is the least I can do to show my appreciation.'
    ],
    memberType: 'leadership'
  },
  {
    id: 'mitchell-achee',
    name: 'Mitchell (Mitch) D. Achee, M.D.',
    title: 'Medical Director/Assistant Treasurer/ International LMS Research Roundtable Executive Committee',
    bio: [
      'An LMS survivor, diagnosed in 2011. A retired Board Certified Diagnostic Radiologist in practice for 40 years. I wish to "pay it forward" to the LMS Community through assisting in answering general questions about the disease and explaining the results of a patient\'s imaging studies to help the patient and their family have a better understanding of their disease, and thereby be able to ask the right questions of their sarcoma care team.'
    ],
    memberType: 'medical',
    organizations: [
      'Connective Tissue Oncology Society (CTOS)',
      'American Society of Clinical Oncologists (ASCO)',
      'European Society of Medical Oncologists (ESMO)',
      'American Association of Cancer Research (AACR)',
      'ECOG-ACIN'
    ]
  },
  {
    id: 'dale-ayscue',
    name: 'Dale Ayscue',
    title: 'NLMSF Community Outreach',
    bio: [
      'I am a survivor of sarcoma for the past 13 years. I also have a FB group – Sarcoma (Cancer) Awareness to help others and "pay it forward" and now as a Board Member of the NLMSF, I feel even more empowered to be able to support patients and their families.',
      'I have appreciated the NLMSF\'s approach and professional integrity in the work being done for support, education, and research on behalf of the sarcoma community and I am happy to be a part.',
      'I am still employed, and I am a grandfather of 2 granddaughters. I am also an amputee of my left leg because of sarcoma cancer.',
      '"Hope is the only thing stronger than fear." is my message to all.'
    ],
    memberType: 'outreach'
  },
  {
    id: 'david-boles',
    name: 'David Boles',
    title: 'NLMSF Community Outreach',
    bio: [
      'As the husband of a recently deceased ULMS patient, I can think of no better way to honor my wife than to support the work of NLMSF. After receiving a diagnosis with LMS, you are literally in for the fight of your life. Most of us do not have a medical background, but need to get up-to-speed quickly to make good choices for treatments that will increase chances for survival. That is where this group can help.',
      'Then, there is the emotional side to treatments. Side effects, reactions and appointments place an enormous amount of stress on the patient and caregiver. Reading the medical disclosure for treatments can be overwhelming. You need someone who hears your concerns and provides some first-hand experience.',
      'You will be told everyone is different. That is true, but you still need a sense for what lies ahead, what to look for and where to turn for help. I have joined the NLMSF to support their mission and purpose – i believe in their genuine efforts to help others through comprehensive websites, newsletters, patient programs and more.'
    ],
    memberType: 'outreach'
  },
  {
    id: 'christopher-hancock',
    name: 'Christopher Hancock',
    title: 'NLMSLF Webmaster/Consultant',
    bio: [
      'Owner of Corvus SEO',
      'I am a former Machine Gunner in the Marine Corps and proud to have had the privilege to honorably serve the country I love.',
      'I have been working with the NLMSF for the last 2 years, ever since my mother Shannen Shapiro met Annie Achee at a convention, as she is a survivor of LMS since 2018.',
      'I am very pleased to serve as a Board Member for the NLMSF in her honor. My values and work ethic aligns with the mission and success of the NLMSF in assisting the LMS community. Their dedication, tenacity and can-do spirit is inspirational to me and I\'m honored to be a part of it.'
    ],
    memberType: 'support'
  },
  {
    id: 'greg-lee',
    name: 'Greg Lee',
    title: 'NLMSF Community Outreach',
    bio: [
      'I was diagnosed with LMS in 2020 and with metastatic LMS in 2021. I have an assistant professor of Computer Science in the Jodrey School of Computer Science at Acadia University in Nova Scotia, Canada. I am now applying machine learning techniques to search for patient features (e.g., biomarkers) that help predict which treatments are best, to be applied on an individual level. My past research involved predicting who was most likely to give a charitable gift to a given organization. I worked with smaller data sets (which we often run into with LMS) but still produced accurate models. I\'m hoping to produce similar LMS prediction models.',
      'I am a Cancer Immunotherapy Coordinator for patients interested in going to Germany for Dendritic Cell Therapy treatment.',
      'I am happy to be a part of the NLMSF Foundation, as I feel they are a special group to advocate for the LMS Community.',
      'I am married to my wonderful wife Melissa and we have 3 children and it\'s for them that I\'m doing this research.'
    ],
    memberType: 'outreach'
  },
  {
    id: 'jim-matthews',
    name: 'Jim Matthews',
    title: 'Community Awareness Outreach Coordinator',
    bio: [
      'I hail from New Jersey, and am a graduate in Economics from Seton Hall University. I am long time survivor, having been diagnosed in 1996 and treated at Memorial Sloan Kettering in NY. I was one of the original members of the National Leiomyosarcoma Foundation, having attend their first HugFest in Lancaster, PA.',
      'I am blessed with a loving family and blessed to be affiliated with the NLMSF.',
      'I believe in the goodness of my fellow board members and want to help the LMS Community through collaborative Foundation support and advocacy in to honor the legacy of Mr. Edmund Hoag and his board members – carrying on their original mission of supporting the LMS patients and their families.'
    ],
    memberType: 'outreach'
  },
  {
    id: 'jacqueline-sebany',
    name: 'Jacqueline (Jacque) Sebany',
    title: 'NLMSF Marketing Consultant',
    bio: [
      'Jacqueline (Jacque) Sebany is the Chief Experience Officer for Shift\'d – a marketing and payments consulting brand.',
      'Prior to becoming a marketing consultant, she was the Chief Marketing & Digital Officer at the American Diabetes Association (ADA). She was responsible for optimizing the marketing infrastructure to create efficient and effective campaigns, elevate the brand presence and bring fresh innovative ways to grow revenue and emotional connections between the ADA brand and the diabetes community.',
      'Jacque has also served as Vice President of Digital Content at the American Heart Association (AHA).',
      'Jacque has over 25 years\' experience across the entire spectrum of Marketing and Digital: front-end development, brand/marketing strategy, direct response marketing (including mail, email, mobile, social), project management (waterfall & agile), UX/UI and content strategy. She has worked across a broad spectrum of organizations in addition to AHA, including FedEx, The US Department of Treasury, Bahamas Ministry of Tourism, Golds Gym, Hyatt Hotels and multiple Consumer Package Good Brands.',
      'Jacque holds a degree in Fashion and Interior Design and is a passionate creative who uses her design talents to transform organizations and brand experiences. She is very enthused and inspired to work with the National Leiomyosarcoma Foundation – as a Community Awareness Ambassador to advance the mission, vision, and purpose of the NLMSF.'
    ],
    memberType: 'support'
  },
  {
    id: 'chandalyn-williams',
    name: 'Chandalyn Williams',
    title: 'NLMSF Community Outreach',
    bio: [
      'Chandalyn Williams is a highly motivated and experienced executive professional, regarded for her ability to deliver outstanding results with the highest degree of expertise and professionalism. She holds a Bachelor of Arts degree in Business Administration and Communication Management from Jones International University, graduating Cum Laude; a Master of Business Administration from Texas Woman\'s University and; is currently within one year of completing her Doctorate of Business Administration at Trident International University. Chandalyn has served as an inpatient volunteer with M. D. Anderson Cancer Center, advocated on public platforms, such as Rare Disease Day at the Texas State Capitol and led annual 5K Run/Walks for over nine years in support of Leiomyosarcoma (LMS) Cancer research.',
      '"When my mother, Cynthia Solomon Holmes, was diagnosed on April 8, 2010 with Leiomyosarcoma (LMS) after visiting her doctor for a persistent cough, I was not prepared for how my world as I knew it would be turned upside down. Watching my mother fight this disease with the strength and vigor I knew to be her was an overwhelmingly painful experience. I felt physically helpless – but I knew how to pray. For her, my family and me. Following only a three-month battle with this dragon, my mother succumbed to the disease, passing away at the age of 52. I vowed to turn my personal tragedy into something that could be triumph for others who are faced with this disease through the creation of The Cynthia Solomon Holmes Foundation. I pray that through my efforts, individuals are inspired to support those battling this disease and in the daily fight for their right to live!" ~ Chandalyn Williams'
    ],
    memberType: 'outreach'
  }
];
