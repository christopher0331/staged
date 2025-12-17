import PatientStoriesCarousel from '@/components/patient/PatientStoriesCarousel';

export const metadata = {
  title: 'Patient Perspectives | NLMSF',
  description:
    'Personal stories from patients, caregivers, and families in the NLMSF community. Read and share experiences to support others on their journey.',
};

export default function PatientPerspectivesPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <header className="mb-8 sm:mb-10">
              <h1
                className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(168,85,247,1) 50%, rgba(236,72,153,1) 100%)',
                }}
              >
                Patient Perspectives
              </h1>
              <p className="mt-3 max-w-3xl text-gray-600">
                Real experiences from our community. Explore the carousel to read highlights,
                then expand each story to learn more. Placeholder images are used for now; we’ll
                replace them as media becomes available.
              </p>
            </header>

            <PatientStoriesCarousel />

            <div className="mt-10">
              <a
                href="#share-your-story"
                className="inline-flex items-center gap-2 rounded-lg border border-rose-300 bg-white px-4 py-2 text-sm font-medium text-rose-600 shadow-sm transition hover:bg-rose-50"
              >
                Share Your Story
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
              <img
                src="https://nlmsf.org/wp-content/uploads/2025/09/windows-of-hope.png"
                alt="Windows of Hope"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
