import React, { useEffect, useState } from "react";
import Lists from "./Lists";

const JobLists = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("category_data.json")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl mb-4">Job Category List</h1>
        <p className="text-base text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="md:flex justify-center items-center gap-8 my-12">
        {lists.map((list) => (
          <Lists key={list.id} list={list}></Lists>
        ))}
      </div>
    </div>
  );
};

export default JobLists;
