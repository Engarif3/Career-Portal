import React from "react";
import image1 from '../assets/All Images/Vector.png'
import image2 from '../assets/All Images/Vector-1.png'

import AppliedjobViewDetails from "./AppliedjobViewDetails";

const AppliedJobs = () => {
  const appliedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

  if (appliedJobs.length === 0) {
    return <div className="text-center text-3xl mt-24">No jobs have been applied for yet.</div>;
  }

  return (
    
    <div>
        
        <div>

        <img  className="absolute top-0 right-0 transform scale-x-1" src={image2} alt="banner" />
        <div className="flex justify-center items-center">
          <h2 className="text-5xl font-bold">Applied Jobs</h2>
        </div>
        <img className="absolute top-24"  src={image1} alt="banner" /> 
        </div>
        <div className="mt-56">

        {appliedJobs.map((job) => <AppliedjobViewDetails key={job.id} job={job}></AppliedjobViewDetails> )}
        </div>
      
    </div>
  );
};

export default AppliedJobs;
