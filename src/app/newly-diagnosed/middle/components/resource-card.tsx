import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ResourceCard({ id, title, description, image, link }: ResourceCardProps) {
  // Determine gradient based on card ID
  const getGradient = (id: string) => {
    const gradients = {
      'what-is-lms': 'from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200',
      'new-diagnosis': 'from-indigo-50 to-indigo-100 border-indigo-200 hover:from-indigo-100 hover:to-indigo-200',
      'nlmsf-spaen': 'from-purple-50 to-purple-100 border-purple-200 hover:from-purple-100 hover:to-purple-200',
      'sarcoma-center': 'from-emerald-50 to-emerald-100 border-emerald-200 hover:from-emerald-100 hover:to-emerald-200',
      'tumor-assessment': 'from-violet-50 to-violet-100 border-violet-200 hover:from-violet-100 hover:to-violet-200',
      'molecular-testing': 'from-teal-50 to-teal-100 border-teal-200 hover:from-teal-100 hover:to-teal-200',
    };
    
    return gradients[id as keyof typeof gradients] || 'from-gray-50 to-gray-100 border-gray-200 hover:from-gray-100 hover:to-gray-200';
  };

  const cardGradient = getGradient(id);
  const textColor = id.includes('spaen') ? 'text-purple-800' : 'text-indigo-800';

  return (
    <Link href={link}>
      <div className={`bg-gradient-to-br ${cardGradient} rounded-xl overflow-hidden shadow-md border transition-all hover:shadow-lg h-full flex flex-col`}>
        <div className="relative h-40 w-full">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className={`font-bold text-lg mb-1 ${textColor}`}>{title}</h3>
          <p className="text-gray-700 text-sm flex-grow">{description}</p>
          <div className="mt-3 flex items-center text-sm font-medium text-indigo-600">
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
