import React from 'react';

const Sidebar = () => {
  const navigationItems = [
    { id: 'compassion', title: 'Compassion', color: 'text-blue-700', hoverBg: 'hover:bg-blue-50', hoverText: 'hover:text-blue-700' },
    { id: 'patience', title: 'Patience', color: 'text-teal-700', hoverBg: 'hover:bg-teal-50', hoverText: 'hover:text-teal-700' },
    { id: 'dependability', title: 'Dependability', color: 'text-purple-700', hoverBg: 'hover:bg-purple-50', hoverText: 'hover:text-purple-700' },
    { id: 'flexibility', title: 'Flexibility', color: 'text-pink-700', hoverBg: 'hover:bg-pink-50', hoverText: 'hover:text-pink-700' },
  ];

  return (
    <div className="sidebar-container bg-white rounded-lg shadow-sm p-5">
      <div className="sidebar-header mb-4 pb-2 border-b-2 border-sky-200">
        <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">Care Team Resources</h3>
      </div>
      <ul className="sidebar-navigation">
        {navigationItems.map((item) => (
          <li key={item.id} className="mb-2">
            <a 
              href={`#${item.id}`}
              className={`block py-2 px-3 ${item.color} ${item.hoverBg} ${item.hoverText} rounded transition-colors duration-200`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      
      <div className="denver-support mt-8 pt-4 border-t-2 border-amber-200">
        <h4 className="text-lg font-bold text-amber-600 mb-3">Denver Support</h4>
        <p className="text-gray-700 mb-3">Need local support in Denver? Our team is here to help.</p>
        <a 
          href="/contact" 
          className="inline-block px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors duration-200"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
