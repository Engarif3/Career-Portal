import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// components import lists
import Layout from './components/Layout';
import Home from './components/Home';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import JobDetails from './components/JobDetails';
import Assignment from './components/Assignment';
import ErrorPage from './components/ErrorPage';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader:()=>fetch('/job_data.json')
      },
      {
        path:'/applied_jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/statistics',
        element: <Assignment></Assignment>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/jobCard/:jobCardId',
        element: <JobDetails></JobDetails>,
        loader:()=>fetch('/job_data.json')
      },
      {
        path:'/details',
        element: <JobDetails></JobDetails>
        
      },

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// FeaturedJobs = friends
// JobCard = friend
// JobDetails = FriendDetails