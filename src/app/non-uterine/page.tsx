import React from 'react';
import './wordpress/styles.css';

const NonUterinePage = () => {
  return (
    <div className="non-uterine-page">
      {/* Hero Section */}
      <div dangerouslySetInnerHTML={{ __html: require('./wordpress/hero.html').default }} />

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div dangerouslySetInnerHTML={{ __html: require('./wordpress/content.html').default }} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div dangerouslySetInnerHTML={{ __html: require('./wordpress/sidebar.html').default }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonUterinePage;
