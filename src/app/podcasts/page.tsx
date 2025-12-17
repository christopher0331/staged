import PodcastsCarousel from '@/components/podcast/PodcastsCarousel';

export const metadata = {
  title: 'Podcasts | NLMSF',
  description:
    'Curated NLMSF podcasts covering anxiety & coping, resilience, caregiver support, and cognitive support therapy. Watch and learn from trusted voices.',
};

export default function PodcastsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        <header className="mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <span>Podcasts</span>
          </div>
          <h1
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(168,85,247,1) 50%, rgba(236,72,153,1) 100%)',
            }}
          >
            NLMSF Podcasts
          </h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            Explore conversations on resilience, caregiver support, anxiety and coping, and cognitive support therapy—curated for the LMS community.
          </p>
        </header>

        <PodcastsCarousel />
      </div>
    </main>
  );
}
