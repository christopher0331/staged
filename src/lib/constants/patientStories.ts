export type PatientStory = {
  id: string;
  name: string;
  role: 'Patient' | 'Caregiver' | 'Advocate' | 'Family';
  title?: string;
  excerpt: string;
  fullText?: string;
  date?: string;
  imageUrl?: string;
};

// Placeholder stories. Replace or append with real stories as you gather them.
export const patientStories: PatientStory[] = [
  {
    id: 'story-anna',
    name: 'Anna M.',
    role: 'Patient',
    title: 'Finding Strength in Community',
    excerpt:
      'When I was diagnosed with LMS, I felt alone. Connecting with others changed everything—community became my lifeline.',
    fullText:
      'When I was diagnosed with LMS, I felt alone and overwhelmed by decisions. Finding the NLMSF community gave me practical guidance and real hope. The stories I read helped me prepare questions for my care team and advocate for clinical trials. I want others to know: you are not alone, and your voice matters in your care journey.',
    date: '2024-11-12',
    imageUrl: '/image1.png',
  },
  {
    id: 'story-daniel',
    name: 'Daniel R.',
    role: 'Caregiver',
    title: 'Caregiving With Confidence',
    excerpt:
      'As a caregiver, I struggled to know what to ask. The caregiver guides helped me become a stronger advocate for my wife.',
    fullText:
      'Caregiving is a balancing act between logistics and love. The NLMSF caregiver resources gave me checklists and talking points for appointments. Most importantly, hearing from other caregivers helped me normalize what we were feeling and focus our energy where it mattered most.',
    date: '2025-01-05',
    imageUrl: '/image2.png',
  },
  {
    id: 'story-sofia',
    name: 'Sofia L.',
    role: 'Patient',
    title: 'Asking About Clinical Trials',
    excerpt:
      'I hesitated to ask about trials. Learning the language of research made it easier to start the conversation.',
    fullText:
      'For a long time I felt intimidated by the idea of clinical trials. The Foundation’s content broke down terms like “eligibility” and “protocol”, which helped me talk to my oncologist. Even when a trial wasn’t the right fit, the discussion broadened my options and planning.',
    date: '2024-09-08',
    imageUrl: '/hero-image-nlmsf.jpg',
  },
];
