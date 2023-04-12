
import image from "../assets/All Images/P3OLGJ1 copy 1.png";
import JobLists from "./JobLists";
import FeaturedJobs from "./FeaturedJobs";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();
 

  return (
    <div>
      <div className="bg-slate-50 mb-24">
        <div className=" m-auto px-4 w-4/5 md:flex md:justify-between md:items-center">
          <div className="ml-12">
            <h1 className="text-7xl w-4/5 mb-4">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-[#7E90FE]">Dream Job</span>{" "}
            </h1>
            <p className="w-3/5 mb-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <img className="w-2/4" src={image} alt="" />
        </div>
      </div>
      <div>
        <JobLists></JobLists>
      </div>
      <div>
        <FeaturedJobs jobs={jobs}></FeaturedJobs>
      </div>
      
    </div>
  );
};

export default Home;
