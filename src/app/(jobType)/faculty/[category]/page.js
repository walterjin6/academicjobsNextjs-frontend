import Link from 'next/link';
import categoryData from "@/data/category.json";
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
//const Lecturer = () => {
export default function Page({ params, searchParams }) {
  console.log("````````````````````params````````````````````")
  console.log(params)
  let { category } = params
  console.log(categoryData)
  console.log(category);
  category = category?.replace(/-/g, " ");
  console.log(category);

  const {
    Name,
    Title,
    Description,
    Keyword,
    content: content1,
  } = categoryData.find((item) => item.Name === category);
  let content;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className="content-grid flex-col gap-2">
    
      {/* <Link className="text-[#f4a10c] " href="/faculty/">
        View all Lecturer Jobs →
      </Link> */}
    

      <div className="bg-slate-200 full-width">
      <div className="  hero-content flex-col lg:flex-row mx-auto items-start py-12">
                 <h1 className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 capitalize m-0">{Name}</h1> 
                            <p className="px-7 mb-4 mt-1">{content1}</p>
                 </div>
          </div>

      <JobSearchBox q={Name} />
      <SearchResults q={{ q: 'faculty' || 0 }} />
    </div>
  );
  return <div className="overflow-y w-full">{content}</div>;
};
