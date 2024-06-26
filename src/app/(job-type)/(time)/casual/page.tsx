import Link from 'next/link';
import type { Metadata } from 'next';
import SearchResults1 from '@/components/SearchResults1';
import JobSearchBox from '@/components/JobSearchBox';
import JobFilter from '@/components/JobFilter';
import SearchResults3 from '@/components/SearchResults3';
import AdvancedSearchBar from '@/components/AdvancedSearchBar';
export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: ' Academic Casual Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'If you are searching online for academic employment, you may uncover the most recent openings in this adaptable and fulfilling industry by browsing through our job board.',
};
export default function myPage() {
  return (
    <main className="content-grid">
      <div className="bg-slate-200 full-width">
        <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4">
            Academic Casual Jobs
          </h1>

          <div className="px-7">
            <p>
              Seek all casual uni jobs through Australia’s best job board.
              Whether you're a student or a seasoned professional, discover
              flexible gigs tailored to your skills and schedule. Dive into a
              new job adventure with our casual job search platform!
            </p>
            <p>
              The No. 1 job board for part-time jobs in Australia. Join our
              community and connect with employers who value your unique
              talents. Simplify your job search, take control of your work-life
              balance, and find your dream gig in just a few clicks. Your next
              exciting opportunity awaits – let's make it happen together!
            </p>
            <Link
              href={'/academic-talent-pool'}
              className="btn btn-aj btn-sm w-2/3 md:w-1/4 mx-auto my-2"
            >
              Join Our Talent Pool
            </Link>
          </div>
        </div>
      </div>

      <AdvancedSearchBar
        p={{
          filter1: [
            {
              category: 'job_type',
              filter: 'Contractor',
            },
          ],
        }}
      />
      <section className="jobs_grid job_post_search_container">
        <div className="filters_panel">
          <div className="filters_content">
            <JobFilter />
          </div>
        </div>
        <div className="listings_panel">
          <div className="listings_content">
            <SearchResults3 />
          </div>
        </div>
      </section>
    </main>
  );
}
