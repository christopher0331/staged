import React from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  gradient?: string
}

export function PageHeader({ title, description, gradient = "from-blue-600 to-indigo-600" }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-gray-600 max-w-3xl">
          {description}
        </p>
      )}
    </div>
  )
}
