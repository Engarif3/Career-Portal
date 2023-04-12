import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-50">

    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <nav className="flex md:flex-row lg:flex-row sm:flex-col justify-around items-center ">
        <h1 className="text-2xl font-extrabold">JobHunter</h1>
        <div className="flex md:flex-row lg:flex-row sm:flex-col md:gap-10 lg:gap-10 sm:gap-4 sm:mb-4 md:mb-0 lg:mb-0 sm:items-center">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied_jobs">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <button className="btn-primary">Start Applying</button>
      </nav>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200"></hr>
    </div>
    </div>
  );
};

export default Navbar;
