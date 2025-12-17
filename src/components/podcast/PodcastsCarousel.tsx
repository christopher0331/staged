"use client";

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { podcasts as defaultPodcasts, type Podcast } from '@/lib/constants/podcasts';

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1) || null;
    if (u.hostname.includes('youtube.com')) return u.searchParams.get('v');
    return null;
  } catch {
    return null;
  }
}

export default function PodcastsCarousel({ items = defaultPodcasts }: { items?: Podcast[] }) {
  const [index, setIndex] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const carouselId = useId();

  const safeItems = useMemo(() => items ?? [], [items]);
  const count = safeItems.length;

  useEffect(() => {
    setIndex((prev) => clamp(prev, 0, Math.max(0, count - 1)));
  }, [count]);

  const goTo = (i: number) => setIndex(clamp(i, 0, count - 1));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const current = safeItems[index];
  const ytId = current ? getYouTubeId(current.url) : null;

  return (
    <section aria-labelledby={`${carouselId}-heading`} className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2
            id={`${carouselId}-heading`}
            className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(99,102,241,1) 0%, rgba(168,85,247,1) 50%, rgba(236,72,153,1) 100%)',
            }}
          >
            Podcasts
          </h2>

          <div className="hidden sm:flex items-center gap-2" role="group" aria-label="Carousel navigation">
            <button
              onClick={prev}
              aria-label="Previous podcast"
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40"
              disabled={index === 0}
            >
              Prev
            </button>
            <button
              onClick={next}
              aria-label="Next podcast"
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40"
              disabled={index >= count - 1}
            >
              Next
            </button>
          </div>
        </div>

        {/* Main card */}
        {current && (
          <article
            className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Video */}
              <div className="md:col-span-3 p-4">
                <div className="relative w-full overflow-hidden rounded-lg bg-black" style={{ aspectRatio: '16 / 9' }}>
                  {ytId ? (
                    <iframe
                      title={current.title}
                      src={`https://www.youtube.com/embed/${ytId}`}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                      Invalid video URL
                    </div>
                  )}
                </div>
              </div>
              {/* Meta */}
              <div className="md:col-span-2 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-gray-900">{current.title}</h3>
                {current.speaker && (
                  <p className="mt-1 text-sm text-gray-500">{current.speaker}</p>
                )}
                {current.description && (
                  <p className="mt-4 text-gray-700 leading-relaxed">{current.description}</p>
                )}
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-rose-300 bg-white px-3 py-1.5 text-sm font-medium text-rose-600 shadow-sm transition hover:bg-rose-50"
                >
                  Open on YouTube
                </a>
              </div>
            </div>
          </article>
        )}

        {/* Dots + strip */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex justify-center gap-2" role="tablist" aria-label="Podcast slides">
            {safeItems.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === index}
                aria-controls={`${carouselId}-panel-${i}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-indigo-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>

          {/* Horizontal scroll list names */}
          <div
            ref={listRef}
            className="no-scrollbar -mx-4 overflow-x-auto px-4"
            aria-label="Select a podcast"
          >
            <div className="flex gap-3">
              {safeItems.map((s, i) => (
                <button
                  id={`${carouselId}-panel-${i}`}
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`min-w-[240px] flex-1 rounded-lg border px-4 py-3 text-left transition ${
                    i === index
                      ? 'border-indigo-400 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                  aria-current={i === index ? 'true' : undefined}
                >
                  <div className="text-sm font-semibold">{s.title}</div>
                  <div className="text-xs text-gray-500">YouTube</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="mt-4 flex items-center justify-between sm:hidden" role="group" aria-label="Carousel navigation mobile">
          <button
            onClick={prev}
            aria-label="Previous podcast"
            className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40"
            disabled={index === 0}
          >
            Prev
          </button>
          <div className="text-xs text-gray-500">{index + 1} / {count}</div>
          <button
            onClick={next}
            aria-label="Next podcast"
            className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40"
            disabled={index >= count - 1}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
