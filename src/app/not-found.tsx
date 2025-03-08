import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-nlmsf-purple text-white rounded-md hover:bg-purple-700 transition-colors font-medium"
        >
          Return to Home
        </Link>
        <Link
          href="/resources"
          className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors font-medium"
        >
          Browse Resources
        </Link>
      </div>
    </div>
  );
}
