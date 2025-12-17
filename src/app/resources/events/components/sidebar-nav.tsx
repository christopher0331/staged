import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface SidebarNavProps {
  items: {
    href: string;
    label: string;
    color: 'purple' | 'blue' | 'teal' | 'green' | 'orange' | 'red' | 'indigo';
    isSubItem?: boolean;
  }[];
  backLink: {
    href: string;
    label: string;
  };
}

export function SidebarNav({ items, backLink }: SidebarNavProps) {
  return (
    <div className="sidebar">
      <div className="sidebar-container border-b border-gray-200 pb-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">On This Page</h3>
        
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="nav-item">
              <a 
                href={item.href} 
                className={`flex items-center p-3 rounded-lg text-gray-700 hover:text-purple-800 hover:bg-gray-100 transition-all duration-200 hover:translate-x-1 ${
                  item.isSubItem ? 'pl-6 text-sm border-l-2 border-teal-500 bg-gray-50' : 'bg-gray-50'
                }`}
              >
                <span className={`inline-block w-2 h-2 rounded-full mr-3 bg-${item.color}-500 ${
                  item.isSubItem ? 'w-1.5 h-1.5' : ''
                }`}></span>
                <span>{item.label}</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <Link 
            href={backLink.href}
            className="flex items-center p-3 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-all duration-200 hover:-translate-x-1"
          >
            <ArrowLeft className="h-4 w-4 mr-2 text-purple-600" />
            <span>{backLink.label}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
