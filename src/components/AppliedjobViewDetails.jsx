import React from "react";
import { Link } from "react-router-dom";

const AppliedjobViewDetails = ({ job }) => {
  return (
    <div>
    <div className="flex justify-between items-center border rounded-lg w-4/5  my-container mb-4">
      <div  >
        <div className="flex items-center gap-4">
          <div>
            <div className="bg-slate-300 inline-block h-40 w-40 rounded-lg">
              <img className="cover p-4" src={job.img} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <h2 className="font-semibold">{job.jobTitle}</h2>
            <p className="text-[#757575]">{job.companyName}</p>
            <div>

            <button className="btn-secondary mr-4">{job.jobType}</button>
            <button className="btn-secondary">Full Time</button>
            </div>
            <div>
              <div className="flex gap-4">

              <div className="flex items-center gap-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18"
                  fill="gray"
                  viewBox="0 0 384 512"
                ><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <span className="text-[#757575]">{job.jobLocation}</span>
              </div>
            <div className="flex items-center gap-2">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18"
                    fill="gray"
                    viewBox="0 0 512 512"
                  >
                    <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
                  </svg>
              
            <span className="text-[#757575]">{job.salary}</span>
            </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <button className="btn-primary w-fit">View Details</button>
    </div>
    </div>
  );
};

export default AppliedjobViewDetails;
