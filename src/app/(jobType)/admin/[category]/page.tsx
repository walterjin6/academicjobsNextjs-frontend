import Link from 'next/link';
import adminData from '@/data/admin.json';
import SearchResults from '@/components/SearchResults';
import JobSearchBox from '@/components/JobSearchBox';
import type { Metadata } from 'next';

type MetadataTypes = {
  Name?: string | undefined;
  Title?: string | undefined;
  Description?: string | undefined;
  Keyword?: string | undefined;
  content?: any | undefined;
};
const myMeta: MetadataTypes = {
  Title: '',
  Description: '',
  Keyword: '',
};

export const metadata: Metadata = {
  title: myMeta.Title, //Option 1 replaces the %s in layout.tsx
  // title: {
  //   absolute: 'Academic Admin and Support Jobs', //Option 2 overrides the title in layout.tsx
  // },
  description: myMeta.Description,
  keywords: myMeta.Keyword,
};
//const Lecturer = () => {
export default function Page({ params, searchParams }: any) {
  // console.log("````````````````````params````````````````````")
  // console.log(params)
  let { category } = params;
  // console.log(adminData)
  // console.log(category);
  category = category?.replace(/-/g, ' ');
  // console.log(category);

  const {
    Name = '',
    Title = '',
    Description = '',
    Keyword = '',
    content: content1 = '',
  } = adminData.find((item) => item.Name === category) || {};

  myMeta.Title = Title;
  myMeta.Description = Description;
  myMeta.Keyword = Keyword;

  let content;
  //console.log(Name);
  //const { logo, company_name, website, company_description, location } = data
  //console.log(company_description)
  content = (
    <div className="content-grid flex-col gap-2">
      {/* <Link className="text-[#f4a10c] " href="/admin/">
        View all Lecturer Jobs →
      </Link> */}

      <div className="bg-slate-200 full-width">
        <div className="  hero-content flex-col lg:flex-row mx-auto items-start py-12">
          <h1 className="md:text-6xl font-bold  md:text-right text-gray-500 pb-4 capitalize m-0">
            {Name}
          </h1>
          <p className="px-7 mb-4 mt-1">{content1}</p>
        </div>
      </div>

      <JobSearchBox q={Name} />
      <SearchResults q={{ q: 'admin' || 0 }} />
    </div>
  );
  return <div className="overflow-y w-full">{content}</div>;
}
