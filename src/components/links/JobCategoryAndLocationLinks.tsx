import JobCategoryLinks from '@/components/links/JobCategoryLinks';
import JobLocationTypeLinks from '@/components/links/JobLocationTypeLinks';

const JobCategoryAndLocationLinks = () => {
  return (
    <>
      {/* <h2 className="underline-full mb-4">Done</h2> */}
      <JobCategoryLinks />
      <JobLocationTypeLinks />
    </>
  );
};

export default JobCategoryAndLocationLinks;
