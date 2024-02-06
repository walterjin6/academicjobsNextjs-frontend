'use client';
import { useEffect, useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import JobList from '@/components/JobList';
import BaseApi from '@/lib/store/Base';
import { BsHandbag } from 'react-icons/bs';
import Link from 'next/link';
import JobFilter from '@/components/JobFilter';
import SearchLightbulbIcon from '@/components/icons/SearchLightbulbIcon';

interface SearchResultsProps {
  q: {
    q?: string | 0;
    l?: string | 0;
  };
  filterOff?: boolean;
}
export default function SearchResults({
  q,
  filterOff = false,
  searchMessage = 'Jobs Found',
}: SearchResultsProps) {
  console.log('==============SearchResults==================');
  const [page, setPage] = useState(0);
  console.log('q1', q, page);
  //useGetQtyQuery({ q: q, l: l || '', filter1 });
  const {
    isPending,
    isError,
    isSuccess,
    error,
    data,
    isFetching,
    isPlaceholderData,
  } = useQuery({
    queryKey: ['jobs', q, page],
    queryFn: async () => {
      const response = await BaseApi.post('/jobs', { ...q, page });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    // enabled: q && Object.keys(q).length > 0,
    placeholderData: keepPreviousData,
  });
  console.log('data', data);
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: dataQty,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['qty', q],
    queryFn: async () => {
      const response = await BaseApi.post('/jobQty', { ...q, page });
      console.log(response.data);
      console.log('response.data.data', response.data.data);
      return response.data.data;
    },
    enabled: data?.jobs?.length > 0,
  });
  let content;
  const handlePageChange = (direction: any) => {
    if (direction === 'prev') {
      setPage((prevPage) => Math.max(prevPage - 1, 0));
    } else if (direction === 'next') {
      setPage((prevPage) => prevPage + 1);
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  if (isFetching) {
    content = (
      <div className="container mx-auto flex w-full h-screen justify-between">
        <div
          role="status"
          className="w-[40%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div
          role="status"
          className="w-[60%] h-screen p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else if (isSuccess && data.jobs.length > 0) {
    if (data.jobs.length > 0) {
      console.log('data', data);
      content = (
        <>
          {/* mobile filter dropdown */}
          {/* <div className="flex justify-center items-center gap-2 my-4 text-md font-bold text-gray-500  p-1 pb-4 mb-8 md:hidden">
            <SearchLightbulbIcon dimensions={22} />
            {dataQty && <span>{`${dataQty} Jobs Found`}</span>}
          </div> */}

<div className="max-w-screen-md mx-auto">
          <div className="flex justify-center items-center gap-2 my-4 text-sm font-bold text-gray-500 border-2 p-2 rounded-xl mb-8 ">
            <SearchLightbulbIcon dimensions={22} />
            {dataQty && <span>{`${dataQty} ${searchMessage}`}</span>}
          </div>

          <JobList
            data={data}
            handlePageChange={handlePageChange}
            page={page}
            isPlaceholderData={isPlaceholderData}
          />
          </div>
        </>
        
      );
    } else {
      content = (
        <p className="text-center text-2xl font-bold py-10">
          Found No Job, Pls use other keywords.
        </p>
      );
    }
  } else {
    content = (
      <div className="container mx-auto">
        <p className="text-center text-xl font-bold mt-12 px-8">
          Sorry! We couldn't find any jobs matching&nbsp;your&nbsp;request.
        </p>
        <p className="text-center text-md py-10 px-8">
          Please consider expanding your search and joining our Talent&nbsp;Pool
          to get notified of jobs matching your&nbsp;unique&nbsp;skills.
        </p>
        <p className="text-center">{/* <JoinTalentPoolButton /> */}</p>
      </div>
      
    );
  }
  return <>{content}</>;
}
