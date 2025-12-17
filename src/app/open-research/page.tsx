import React from 'react';
import './styles.css';

const OpenResearchPage = () => {
  return (
    <div className="open-research-page">
      {/* Hero Section */}
      <div dangerouslySetInnerHTML={{__html: require('./hero.html').default}} />
      
      {/* Main Content Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div dangerouslySetInnerHTML={{__html: require('./content.html').default}} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div dangerouslySetInnerHTML={{__html: require('./sidebar.html').default}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenResearchPage;
