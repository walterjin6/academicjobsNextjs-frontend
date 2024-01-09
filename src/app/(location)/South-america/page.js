//import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import JobSearchBox from '@/components/JobSearchBox';
//import { useParams } from 'next/navigation'
export const metadata = {
  title: {
    absolute: 'Academic Jobs South America',
  },
  description:
    'Find your dream academic job in South America and join the leading universities at South America university jobs with professor, researcher or manager roles. ',
  keywords: 'Academic Jobs South America. academic job in  South America ,  South America  university jobs',
};
 export default function Page() {
  return (
    <div>
     
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-sa-min.png"

          alt="AcademicJobs South America"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <JobSearchBox l="South America"/>

      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link href="/South-America/lecturer/" >	Lecturer</Link></li>
            <li><Link href="/South-America/research/" >	Research </Link></li>
            <li><Link href="/South-America/professor/" >	Professor</Link></li>
          </ul>
          <li><Link href="/South-America/executive/" >	Executive</Link></li>
          <li><Link href="/South-America/admin/" >Admin</Link></li>
          <li><Link href="/South-America/hr-jobs/" >	HR</Link></li>
          <li><Link href="/South-America/student/" >	Student</Link></li>

        </ul>
      </div>


      <div className=" mt-4 " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">

          <li><Link href="/online/" >	Online </Link></li>
          <li><Link href="/jobs/remote/" >	Remote</Link></li>

          <li><Link href="/jobs/full-time/" >Full-Time</Link></li>
          <li><Link href="/jobs/part-time/" >	Part-Time</Link></li>
          <li><Link href="/jobs/casual/" >	Casual</Link></li>
        </ul>
      </div>




      <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div>
      <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]">
        <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 pt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs South America</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">If you are interested in finding your dream job in South America, you can browse through our listings of teaching and education jobs1, science jobs, and university and academic jobs. You can also filter by location, discipline, and salary to narrow down your search. Don’t miss this chance to explore the academic opportunities in South America!</p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#f4a10c] border-2  text-[#f4a10c] rounded-3xl shadow-md ">AcademicJobs South America: All University Jobs by Country </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 '><Link href="/jobs/brazil/" className='text-[#f4a10c] font-bold'>Brazil</Link></li>
                    <li><Link href="/employers/university-of-sao-paulo/11463/">University of São Paulo</Link>
                    </li>
                    <li><Link href="/employers/university-of-campinas/11490/">University of Campinas</Link>
                    </li>

                    <li><Link href="/employers/universidade-federal-do-rio-grande-do-sul/11544/">Universidade Federal do Rio Grande do Sul</Link>
                    </li>

                    <li><Link href="/employers/universidade-federal-de-são-paulo/11526/">Universidade Federal de São Paulo (UNIFESP)</Link>
                    </li>



                  </ul>
                  <ul>
                    <li className='mb-1 '><Link href="/jobs/argentina/" className='text-[#f4a10c] font-bold'>Argentina</Link></li>
                    <li><Link href="/employers/universidad-de-buenos-aires/11196/">Universidad de Buenos
                      Aires</Link>
                    </li>

                    <li className='mb-1 '><Link href="/jobs/colombia/" className='text-[#f4a10c] font-bold'>Colombia</Link></li>
                    <li><Link href="/employers/universidad-de-los-andes/11308/">Universidad de los
                      Andes</Link></li>

                    <li><Link href="/employers/icesi-university/11648/">Icesi University</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link href="/jobs/chile/" className='text-[#f4a10c] font-bold'>Chile</Link></li>
                    <li><Link href="/employers/pontificia-universidad-catolica-de-chile/9739/">Pontificia Universidad
                      Catolica de Chile</Link></li>
                    <li><Link href="/employers/universidad-alberto-hurtado/11012/">Universidad Alberto
                      Hurtado</Link>
                    </li>
                    <li><Link href="/employers/universidad-de-santiago-de-chile/11384/">Universidad de
                      Santiago de Chile</Link></li>
                    <li><Link href="/employers/university-of-antofagasta/11189/">University of Antofagasta</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link href="/jobs/peru/" className='text-[#f4a10c] font-bold'>Peru</Link></li>
                    <li><Link href="/employers/universidad-alas-peruanas/11010/">Universidad Alas
                      Peruanas</Link>
                    </li>
                    <li><Link href="/employers/universidad-peruana-cayetano-heredia/11856/">Universidad Peruana Cayetano Heredia</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
