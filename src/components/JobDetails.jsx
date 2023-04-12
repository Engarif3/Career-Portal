import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image1 from '../assets/All Images/Vector.png'
import image2 from '../assets/All Images/Vector-1.png'

const JobDetails = () => {
  const { jobCardId } = useParams();
  const dataDetails = useLoaderData();

  const [details, setDetails] = useState({});
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const jobDetails = dataDetails.find(
      (job) => job.id === parseInt(jobCardId)
    );
    setDetails(jobDetails || {});
  }, [jobCardId, dataDetails]);

   const handleApplyNow = () => {
    const { id, companyName, jobTitle,jobLocation, img, salary, jobType } = details;
    const appliedJob = { id, companyName, jobTitle,jobLocation, img, salary, jobType };
    if (appliedJobs.some((job) => job.id === id)) {
      toast.error("You have already applied for this job");
    } else {
      setAppliedJobs([...appliedJobs, appliedJob]);
      const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
      localStorage.setItem("savedJobs", JSON.stringify([...savedJobs, appliedJob]));
      // toast.success("Job application saved");
    }
  };

  return (
    <div>
       <div  className="banner mb-40 bg-slate-500">
        <img  className="absolute top-0 right-0 transform scale-x-1" src={image2} alt="banner" />
        <img className="absolute top-24"  src={image1} alt="banner" /> 
      </div>
      <div className="flex justify-between items-center gap-10  mt-12">
        <div className="w-2/4 border rounded-lg m-auto p-8  flex flex-col gap-6">
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            <span className="text-[#757575]">
              {details.jobDes || "Category not found"}
            </span>
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span>{" "}
            <span className="text-[#757575]">
              {details.jobRes || "Availability not found"}
            </span>
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>{" "}
            <span className="text-[#757575]">
              {details.eduReq || "Availability not found"}
            </span>
          </p>
          <p>
            <span className="font-bold">Experiences:</span>{" "}
            <span className="text-[#757575]">
              {details.experience || "Availability not found"}
            </span>
          </p>
        </div>

        <div className=" p-4 m-auto w-1/4">
          <div className=" rounded-lg p-8 bg-[#EAE3FF]">
            <h2 className="text-lg font-bold">Job Details</h2>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400"></hr>
            <div className="flex flex-col gap-2 mb-4">
              <p>
                {" "}
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18"
                    fill="gray"
                    viewBox="0 0 512 512"
                  >
                    <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
                  </svg>
                  <span className="font-semibold">&nbsp;Salary:</span>{" "}
                  <span className="text-[#757575]">&nbsp;{details.salary}</span>{" "}
                </p>
              </p>
              <p className="flex gap-2">
                {" "}
                <span><svg xmlns="http://www.w3.org/2000/svg" width="18px"
                    height="18"
                    fill="gray" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"/></svg></span>
                <span className="font-semibold"> JobTitle:</span>{" "}
                <span className="text-[#757575]">{details.jobTitle}</span>
              </p>
            </div>

            <h2 className="text-lg font-bold">Contact Information</h2>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-400"></hr>

            <div className="flex flex-col gap-2 mb-4">
              <p className="flex items-center">
                {" "}
                <span><svg xmlns="http://www.w3.org/2000/svg" width="18px"
                    height="18"
                    fill="gray"  viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg></span>
                <span className="font-semibold">&nbsp;Phone: &nbsp;</span>{" "}
                <span className="text-[#757575]">{details.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                {" "}
                <span><svg xmlns="http://www.w3.org/2000/svg" width="18px"
                    height="18"
                    fill="gray" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></span>
                <span className="font-semibold">Email:</span>
                <span className="text-[#757575]">{details.email}</span>
              </p>

              <p className="flex gap-2">
                {" "}
                <span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18"
                  fill="gray"
                  viewBox="0 0 384 512"
                ><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                </span>
                <span className="font-semibold">Address:</span> {" "}
                <span className="text-[#757575]">{details.address}</span>
               
               
              </p>
            </div>
          </div>

          <div className="my-8">
            <button className="btn-primary w-full" onClick={handleApplyNow}>Apply Now</button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
