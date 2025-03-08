import React from 'react';

export function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
      <svg
        className="w-12 h-12 text-gray-400"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v8l4-2 4 4 4-4 4 2V6H4zm0 12h16v-2l-4-2-4 4-4-4-4 2v2z" />
      </svg>
    </div>
  );
}
