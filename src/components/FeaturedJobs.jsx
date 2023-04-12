import React, { useState } from "react";
import JobCard from "./JobCard";

const FeaturedJobs = ({ jobs }) => {
  const [displayCount, setDisplayCount] = useState(4);
  const displayedItems = jobs.slice(0, displayCount);
  const handleShowAllClick = () => {
    setDisplayCount(jobs.length);
  };

  return (
    <div className="m-auto w-9/12">
      <div className="text-center">
        <h1 className="text-5xl mb-4">Featured Jobs</h1>
        <p className="text-base text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:grid grid-cols-2 justify-center items-center gap-4 my-12">
        {displayedItems.map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>
      <div className="mb-10 flex justify-center">
        {displayCount < jobs.length && (
          <button className="btn-primary" onClick={handleShowAllClick}>
            See All Jobs
          </button>
        )}
        {displayCount >= jobs.length && <div>No more jobs to display</div>}
      </div>
    </div>
  );
};

export default FeaturedJobs;
