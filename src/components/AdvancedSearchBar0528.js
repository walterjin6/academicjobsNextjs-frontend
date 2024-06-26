'use client';
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import { filterType } from "@/utils/data";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BaseApi } from '@/lib/store/Base';
import JobSearchBox6 from '@/components/JobSearchBox6';
import { useStore } from '@/lib/store/store';
import { regionData } from "@/data/africaPositions";
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete';
export default function Page({
  p,
  forceClass='',
}) {
  const { region,setQ, setL, setLon, setLat, q, l, lon, lat, category, country, currentMiddleCategory, filter1, setRegion, setFilter1, setCategory, setCountry, setCurrentMiddleCategory } = useStore();
  const keyWordRef = useRef(null);
  const [page, setPage] = useState(0);
  useEffect(() => {
    if (p?.filter1) {
      setFilter1(p.filter1)
    }
  }, []);
  const searchParams = useSearchParams();
  const filterType = {
    Country: false,
    State: true,
    InstitutionName: true,
    JobType: true,
    ExecutiveJobs: false,
    AdministrationSupportJobs: false,
    HRJobs: false,
    FacultyDepartmentJobs: false,
    AcademicPositionType: false,
    thirdcategory: false,
    EmploymentType: true,
    PositionType: false,
    SalaryRange: true,
    OnsiteRemote: true,
  };
  const [filterTypes, setfilterTypes] = useState(filterType);
  // const [category, setCategory] = useState('');
  // const [currentMiddleCategory, setCurrentMiddleCategory] = useState('');
  // const [filter1, setfilter] = useState([{ category:'country', filter: region}]);
  const [filter2, setfilter2] = useState([]);
  useEffect(() => {
    //alert(category)
    //setCurrentMiddleCategory('')
    //setSearchJobQuery({ filter1 })
    console.log("filter1", filter1)
    setfilterTypes((p) => ({ ...p, ExecutiveJobs: false }));
    setfilterTypes((p) => ({ ...p, HRJobs: false }));
    setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: false }));
    setfilterTypes((p) => ({ ...p, FacultyDepartmentJobs: false }));
    setfilterTypes((p) => ({ ...p, AcademicPositionType: false }));
    setfilterTypes((p) => ({ ...p, thirdcategory: false }));
    if (category == "AcademicPositionType") setfilterTypes((p) => ({ ...p, thirdcategory: true }));
    switch (true) {
      case filter1.some((obj) => obj.filter.includes('Executive ')):
        setfilterTypes((p) => ({ ...p, ExecutiveJobs: true }));
        break;
      case filter1.some((obj) => obj.filter.includes('Human Resources')):
        setfilterTypes((p) => ({ ...p, HRJobs: true }));
        break;
      case filter1.some((obj) =>
        obj.filter.includes('Support /Administration')
      ):
        setfilterTypes((p) => ({ ...p, AdministrationSupportJobs: true }));
        break;
      case filter1.some((obj) => obj.filter.includes('Academic / Faculty')):
        setfilterTypes((p) => ({ ...p, AcademicPositionType: true }));
        setfilterTypes((p) => ({ ...p, PositionType: true }));
        break;
      default:
        break;
    }
  }, [filter1]);
  useEffect(() => {
    console.log("category", category)
    setfilter2(filter1)
  }, [category, currentMiddleCategory]);
  useEffect(() => {
    if (region=='Global')    setfilterTypes((p) => ({ ...p, Country: true }));
  }, []);
  //alert()
  const {
    isPending: isPendingQty,
    isError: isErrorQty,
    isSuccess: isSuccessQty,
    error: errorQty,
    data: filters,
    isFetching: isFetchingQty,
    isPlaceholderData: isPlaceholderDataQty,
  } = useQuery({
    queryKey: ['filter', { currentMiddleCategory, category, filter2, q, l, lon, lat }],
    queryFn: async () => {
      const response = await BaseApi.post('/filters', {
        currentMiddleCategory,
        category,
        filter1, q, l, lon, lat
      });
      return response.data.data;
    },
    enabled: category !== '',
  });
  const filterValues9 = {
    Country: 'Country',
    State: 'State',
    City: 'City',
    JobType: 'Job Type',
    PositionType: 'Position Type',
    ExecutiveJobs: 'Executive Jobs',
    AdministrationSupportJobs: 'Administration Support Jobs',
    HRJobs: 'HR Specialty',
    FacultyDepartmentJobs: 'Faculty/Department',
    AcademicPositionType: 'Faculty/Department',
    EmploymentType: 'Employment Type',
    InstitutionName: 'Institution Name',
    SalaryRange: 'Salary Range',
    OnsiteRemote: 'Onsite/Remote',
    thirdcategory: 'thirdcategory',
  };
  const [isShowFilter, setIsShowFilter] = useState(false);
  return (
    <>
      <main>
        <div className="w-full bg-gray-100 pt-2 ">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto ">
              <div className={` py-4 `}>
                <div className=" lg:max-w-screen-lg mx-auto ">
                  <div className="join mx-auto w-full border border-gray-200 shadow-md flex flex-col md:flex-row">
                    <Autocomplete
                      className="input input-bordered join-item w-full md:text-left text-center rounded-xl"
                      style={{ width: '100%' }}
                      apiKey="AIzaSyCKEfoOIPz8l_6A8BByD3b3-ncwza8TNiA"
                      onPlaceSelected={(place) => {
                        console.log('Selected Place:', place);
                        const lat = place.geometry.location.lat();
                        const lon = place.geometry.location.lng();
                        console.log('lat:', lat);
                        console.log('lon:', lon);
                        setLon(lon)
                        setLat(lat)
                      }}
                      options={{
                        types: ['geocode', 'establishment'],
                      }}
                    />
                    {/* <button
                      type="submit"
                      className="indicator md:w-fit w-full bg-amber-500 md:bg-0 justify-center items-center animate-pulse"
                      onClick={() => {
                        // const inputValue = keyWordRef.current.value.trim();
                        // alert(inputValue);
                        console.log(keyWordRef.current?.value.trim())
                        console.log(keyWordRef.current)
                        setQ(keyWordRef.current?.value.trim() || '')
                      }}
                    >
                      <div className="btn join-item bg-amber-500 md:border md:border-gray-300 md:shadow-md border-0 text-white animate-pulse ">
                        Search
                      </div>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto max-w-5xl  flex flex-col  ">
          {  // 顶层已选X  top
            filter1.length > 0 && (
              <div className="md:flex md:gap-4 md:flex-wrap pb-2 p-2">
                {filter1.map(({ category1, filter }, i) => (
                  <button
                    key={i}
                    className="btn  btn-xs bg-blue-900 text-white "
                    onClick={() => {
                      const updatedFilter = filter1.filter(
                        (_, index) => index !== i
                      );
                      setPage(0);
                      setFilter1(updatedFilter);
                      setCategory("")
                      setCurrentMiddleCategory("")
                    }}
                  >
                    {`${filter} X`}
                  </button>
                ))}
              </div>
            )
          }
          <div className="flex gap-4 flex-wrap p-2 ">
            {Object.entries(filterTypes).map(([filterType, showYN], i) => (// 中层大目录m
              <button
                key={i}
                className={`px-2 py-1 text-gray-500  border  rounded-md text-sm font-bold ${category === filterType
                  ? 'bg-orange-500 text-white border-orange-500'
                  : 'bg-white border-gray-500'
                  }
                  ${showYN ? 'block' : 'hidden'} `}
                onClick={() => {
                  if (category === filterType) {
                    setIsShowFilter((prev) => !prev);
                  } else {
                    setIsShowFilter(true);
                  }
                  setCategory(filterType);
                }}
              >
                {filterValues9[filterType] == 'thirdcategory' ? currentMiddleCategory : filterValues9[filterType]}
              </button>
            )
            )}
            {/* <input
              type="text"
              className="input input-sm input-bordered  w-[200px] md:text-left text-center"
              placeholder="Keywords"
              ref={keyWordRef}
            /> */}
          </div>
          {isShowFilter && (
            <><div className="p-2 w-full">
              <select
                className="md:hidden block text-left text-gray-500 text-sm rounded-xl p-2 w-full mb-4"
                onChange={(e) => {
                  const selectedFilter = filters.find(f => f.filter === e.target.value);
                  setPage(0);
                  setFilter1([...filter1, { category, filter: selectedFilter.filter }]);
                  setCurrentMiddleCategory(selectedFilter.filter);
                } }
              >
                {filters?.length > 0 &&
                  filters.map(({ filter, job_count }, i) => (
                    <option
                      key={i}
                      value={filter}
                    >
                      {`${filter ? filter : 'Others'} (${job_count})`}
                    </option>
                  ))}
              </select>
            </div>
            <div className="hidden md:grid md:grid-cols-4 gap-1 grid-cols-2 pl-6 py-2">
                {filters?.length > 0 && // 低层小目录b
                  filters.map(({ filter, job_count }, i) => (
                    <button
                      key={i}
                      className="text-left text-gray-500 text-sm truncate"
                      onClick={() => {
                        setPage(0);
                        setFilter1([...filter1, { category, filter }]);
                        //setIsShowFilter(false);
                        setCurrentMiddleCategory(filter);
                      } }
                    >{`${filter ? filter : 'Others'} (${job_count})`}</button>
                  ))}
              </div></>
          )}

        </div>
      </main>
    </>
  );
}
