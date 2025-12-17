"use client";

import Image from 'next/image';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { patientStories, type PatientStory } from '@/lib/constants/patientStories';

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function PatientStoriesCarousel({
  stories = patientStories,
}: {
  stories?: PatientStory[];
}) {
  const [index, setIndex] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);
  const carouselId = useId();

  const safeStories = useMemo(() => stories ?? [], [stories]);
  const count = safeStories.length;

  useEffect(() => {
    setIndex((prev) => clamp(prev, 0, Math.max(0, count - 1)));
  }, [count]);

  const goTo = (i: number) => setIndex(clamp(i, 0, count - 1));
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const current = safeStories[index];

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
            Patient Perspectives
          </h2>

          <div className="hidden sm:flex items-center gap-2" role="group" aria-label="Carousel navigation">
            <button
              onClick={prev}
              aria-label="Previous story"
              className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40"
              disabled={index === 0}
            >
              Prev
            </button>
            <button
              onClick={next}
              aria-label="Next story"
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
              <div className="relative md:col-span-2 h-56 md:h-full">
                <Image
                  src={current.imageUrl || '/hero-image-nlmsf.jpg'}
                  alt={current.title || current.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: current.role === 'Patient' ? '#14b8a6' : current.role === 'Caregiver' ? '#8b5cf6' : '#f43f5e' }}
                  />
                  {current.role}
                </span>
              </div>
              <div className="md:col-span-3 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-gray-900">{current.title || current.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{current.name}{current.date ? ` • ${new Date(current.date).toLocaleDateString()}` : ''}</p>
                <p className="mt-4 text-gray-700 leading-relaxed">{current.excerpt}</p>
                {current.fullText && (
                  <details className="mt-4 group">
                    <summary className="cursor-pointer select-none text-sm font-medium text-indigo-600 hover:text-indigo-700">Read full story</summary>
                    <div className="mt-2 text-gray-700 leading-relaxed">{current.fullText}</div>
                  </details>
                )}
              </div>
            </div>
          </article>
        )}

        {/* Dots + strip */}
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex justify-center gap-2" role="tablist" aria-label="Story slides">
            {safeStories.map((s, i) => (
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
            aria-label="Select a story"
          >
            <div className="flex gap-3">
              {safeStories.map((s, i) => (
                <button
                  id={`${carouselId}-panel-${i}`}
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`min-w-[220px] flex-1 rounded-lg border px-4 py-3 text-left transition ${
                    i === index
                      ? 'border-indigo-400 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                  aria-current={i === index ? 'true' : undefined}
                >
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="text-xs text-gray-500">{s.title || s.role}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="mt-4 flex items-center justify-between sm:hidden" role="group" aria-label="Carousel navigation mobile">
          <button
            onClick={prev}
            aria-label="Previous story"
            className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-40"
            disabled={index === 0}
          >
            Prev
          </button>
          <div className="text-xs text-gray-500">{index + 1} / {count}</div>
          <button
            onClick={next}
            aria-label="Next story"
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
