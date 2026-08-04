import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Quote } from "lucide-react";
import {
  interviewMeta,
  interviewSections,
  recommendations,
} from "@/content/samuel-basi-interview";
import { SubjectPortrait, TrafiguraMark } from "@/components/InterviewSubject";

export const metadata: Metadata = {
  title: `${interviewMeta.title}: ${interviewMeta.subtitle}`,
  description: interviewMeta.standfirst,
};

export default function InterviewPage() {
  return (
    <article className="bg-black text-white">
      {/* MASTHEAD */}
      <header className="relative border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative max-w-3xl mx-auto px-6 py-20">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-gray-500 hover:text-yellow-500 transition mb-10"
          >
            <ArrowLeft size={14} /> All Insights
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-yellow-500 text-yellow-500">
              {interviewMeta.category}
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-orange-400 text-orange-400">
              {interviewMeta.division}
            </span>
            <span className="font-mono text-xs text-gray-500 tracking-widest">
              {interviewMeta.readingTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-4">
            {interviewMeta.title}
          </h1>

          <p className="text-2xl md:text-3xl text-yellow-500 font-display tracking-tight mb-10">
            {interviewMeta.subtitle}
          </p>

          {/* Subject + standfirst */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
            <figure className="max-w-[200px] sm:max-w-none">
              <SubjectPortrait />
              <figcaption className="mt-3">
                <p className="font-semibold text-sm">Samuel Basi</p>
                <p className="text-gray-500 text-xs mb-3">
                  Founder, Perfectly Hedged
                </p>
                <TrafiguraMark />
              </figcaption>
            </figure>

            <p className="sm:col-span-2 text-gray-400 text-lg leading-relaxed border-l-2 border-gray-800 pl-6">
              {interviewMeta.standfirst}
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800 font-mono text-xs tracking-widest text-gray-500 uppercase">
            Interview by{" "}
            <span className="text-white">{interviewMeta.interviewer}</span>,
            Head of Commodities, UCL Trading Society
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        {interviewSections.map((section, sectionIndex) => (
          <section key={section.heading} className="mb-16 last:mb-0">
            {/* Section heading */}
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-xs text-yellow-500 tracking-widest">
                {String(sectionIndex + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                {section.heading}
              </h2>
              <div className="flex-1 h-px bg-gray-800" />
            </div>

            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-12 last:mb-0">
                {/* Question */}
                <div className="flex gap-4 mb-6">
                  <span
                    className="font-mono text-xs text-yellow-500 shrink-0 pt-1.5 tracking-widest"
                    aria-hidden="true"
                  >
                    Q
                  </span>
                  <p className="text-lg md:text-xl font-semibold leading-relaxed text-white">
                    {item.question}
                  </p>
                </div>

                {/* Answer */}
                <div className="flex gap-4">
                  <span
                    className="font-mono text-xs text-gray-600 shrink-0 pt-1.5 tracking-widest"
                    aria-hidden="true"
                  >
                    A
                  </span>
                  <div className="space-y-5">
                    {item.answer.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-gray-300 leading-[1.8]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>
        ))}

        {/* RECOMMENDATIONS */}
        <section className="mt-20 pt-12 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={20} className="text-yellow-500" />
            <h2 className="text-2xl font-bold">Recommended reading and listening</h2>
          </div>

          <div className="space-y-4">
            {recommendations.map((item) => (
              <div
                key={item.title}
                className="border border-gray-800 bg-gray-900/50 p-6 hover:border-yellow-500/60 transition"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="font-mono text-xs text-yellow-500 tracking-widest uppercase mt-1 mb-3">
                  {item.author}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* OUTRO */}
        <section className="mt-16 border border-gray-800 bg-gray-900/60 p-8 md:p-10">
          <Quote size={28} className="text-yellow-500 mb-5" />
          <p className="text-gray-300 leading-relaxed mb-6">
            Interviews like this are part of how we bring the industry to UCL.
            If you want to help land the next one, or write something for one of
            our desks, get in touch.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://studentsunionucl.org/clubs-societies/trading-society"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-mono text-xs tracking-widest uppercase hover:bg-yellow-400 transition"
            >
              Join the society
            </a>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 font-mono text-xs tracking-widest uppercase text-white hover:border-yellow-500 hover:text-yellow-500 transition"
            >
              More insights
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
