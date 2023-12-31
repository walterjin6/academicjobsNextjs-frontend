import type { Metadata } from 'next';
import SearchResults from '@/components/SearchResults'
import JobSearchBox from '@/components/JobSearchBox'

export const metadata: Metadata = {
  // title: 'About', //Option 1 replaces the %s in layout.tsx
  title: {
    absolute: 'PHD Jobs', //Option 2 overrides the title in layout.tsx
  },
  description:
    'Discover flexible and fulfilling on-campus employment opportunities for Ph.D. candidates. Explore a myriad of PhD positions across diverse departments at your university. Take the next step in your career, apply today, and cultivate valuable work experience and skills.  ',
  keywords: 'PhD Jobs , PhD academic Jobs',
};
export default function myPage() {
  return (
    
      <main className="PHD Jobs">

<div className="bg-slate-200 full-width">
      <div className="hero-content flex-col lg:flex-row mx-auto items-start py-12">
    
              <h1 className="md:text-6xl font-bold m-0 md:text-right text-gray-500 pb-4"> Academic PHD Jobs</h1> 
              
            <div className="">
            
            <p className="px-7 mb-4 mt-1">
            Our website lists all PHD position available at the best institutions. Our academic institutions are constantly searching for the greatest PHD job seekers, therefore apply on our website for fantastic PHD opportunities globally.
            </p>
            <p className="px-7 md:flex hidden">
            PhD jobs on campus involve working part-time or casually in various roles and departments within a university or research institute setting. These jobs provide PhD graduates with the opportunity to earn income, gain valuable work experience, develop employability skills, and enhance their academic and social networks. PhD jobs on campus can cover administration, customer service, events, marketing, IT, library, research, teaching, and other roles. You can find hundreds of job postings from universities across Australia and around the world. Gain valuable work experience and skills by applying today!
            </p>
         
            </div>
          </div>
          </div>


      

              <JobSearchBox q= "phd"/>
              <SearchResults q={{ q: "phd" || 0 }} />
      </main>
   
  );
}
