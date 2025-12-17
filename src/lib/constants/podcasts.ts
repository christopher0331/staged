export type Podcast = {
  id: string;
  title: string;
  speaker?: string;
  description?: string;
  url: string; // YouTube URL
};

export const podcasts: Podcast[] = [
  {
    id: 'anxiety-coping',
    title: 'NLMSF Anxiety and Coping Podcast',
    description:
      'Strategies for managing anxiety and building coping skills throughout the LMS journey.',
    url: 'https://youtu.be/XhLg-x1dBAM',
  },
  {
    id: 'dimensions-resilience',
    title: 'Dimensions in Resilience',
    description:
      'Exploring resilience: practical tools and perspectives for patients and caregivers.',
    url: 'https://www.youtube.com/watch?v=W8KbRJpOOXI',
  },
  {
    id: 'caring-caregiver',
    title: 'Caring for the Caregiver',
    description:
      'Support and self-care guidance for caregivers—because caring for yourself is caring for your loved one.',
    url: 'https://youtu.be/n4OOczeh1LQ',
  },
  {
    id: 'morning-pages-cst',
    title: 'Morning Pages - Cognitive Support Therapy',
    description:
      'An introduction to Morning Pages as a cognitive support therapy practice.',
    url: 'https://youtu.be/0fv3DoEWFtQ',
  },
];
