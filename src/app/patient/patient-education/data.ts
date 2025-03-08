export interface Video {
  presenter?: string;
  title?: string;
  topic: string;
  date?: string;
  description?: string;
  url?: string;
}

export interface VideoSection {
  id: string;
  title: string;
  videos: Video[];
}

export const videoSections: VideoSection[] = [
  {
    id: "abc-new-diagnosis",
    title: "ABC's of a New Diagnosis",
    videos: [
      {
        topic: "The ABC's of a New Diagnosis",
        date: "May 22, 2023",
        description: "Presented by the NLMSF",
        url: "https://youtu.be/9pnKTkzqOw0"
      },
      {
        topic: "Introduction to the ABC's of a New Diagnosis",
        date: "January 16, 2022",
        description: "Presented by the NLMSF",
        url: "https://youtu.be/BJBK8bJOOaw"
      }
    ]
  },
  {
    id: "basic-research",
    title: "Basic Research",
    videos: [
      {
        presenter: "Dr. Priya Chudasama",
        title: "Heibelberg University, Germany",
        topic: "The Importance of Telemeres in Leiomyosarcoma",
        date: "July 19, 2022",
        url: "https://www.youtube.com/watch?v=s5xJqpD0oMA"
      },
      {
        presenter: "Dr. Jonathan Trent",
        title: "Sylvester Comprehensive Cancer Center, Miami University",
        topic: "LMS Connect Live",
        date: "March 18, 2022",
        description: "Program featuring Dr. Matthew Hemming and Dr. Nicolas Llosa discussing laboratory models and immune microenvironment of LMS",
        url: "https://youtu.be/lgXPwxdB8pM"
      }
    ]
  },
  // Add more sections here...
];
