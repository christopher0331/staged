import { Metadata } from "next";
import { readFileSync } from 'fs';
import { join } from 'path';
import './styles.css'; // Direct import of CSS

export const metadata: Metadata = {
  title: "Care Team Questions | NLMSF",
  description: "Important questions to ask your care team throughout your LMS treatment journey",
};

// Helper function to read HTML files
function getHtmlContent(filename: string) {
  const filePath = join(process.cwd(), 'src/app/newly-diagnosed/care-team-questions', filename);
  return readFileSync(filePath, 'utf8');
}

export default function CareTeamQuestionsPage() {
  // Load HTML content from files
  const heroHtml = getHtmlContent('hero.html');
  const contentHtml = getHtmlContent('content.html');
  const sidebarHtml = getHtmlContent('sidebar.html');

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <div dangerouslySetInnerHTML={{ __html: heroHtml }} />
      
      {/* Main Content Container */}
      <div className="page-container">
        {/* Left Column: Sidebar */}
        <div className="sidebar" dangerouslySetInnerHTML={{ __html: sidebarHtml }} />
        
        {/* Right Column: Main Content */}
        <div className="main-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}
