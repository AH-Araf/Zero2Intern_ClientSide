import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import GetAllIntern from "../Pages/GetAllIntern/GetAllIntern";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AdminHome from "../Pages/AdminDashboard/AdminHome/AdminHome";
import AddAnIntern from "../Pages/AdminDashboard/AddAnIntern/AddAnIntern";
import AddedInterns from "../Pages/AdminDashboard/AddedInterns/AddedInterns";
import AllApplicant from "../Pages/AdminDashboard/AllApplicant/AllApplicant";
import SingleIntern from "../Pages/GetAllIntern/SingleIntern";
import HomeIntern from "../Pages/Home/HomeIntern/HomeIntern";
import Apply from "../Pages/Apply/Apply";
import UserProfile from "../Pages/UserDashboard/UserProfile/UserProfile";
import AppliedInterns from "../Pages/UserDashboard/AppliedInterns/AppliedInterns";
import FinalApply from "../Pages/Apply/FinalApply";
import ApplyMore from "../Pages/UserDashboard/ApplyMore/ApplyMore";
import ManageApplicant from "../Pages/AdminDashboard/ManageApplicant/ManageApplicant";
import ViewApplicant from "../Pages/AdminDashboard/ManageApplicant/ViewApplicant";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/getAllIntern",
        element: <GetAllIntern></GetAllIntern>,
        loader: () => fetch('https://zero2intern.onrender.com/interns'),
      },
      {
        path: "/HomeIntern",
        element: <HomeIntern></HomeIntern>,
        loader: () => fetch('https://zero2intern.onrender.com/internLimit'),
      },
      {
        path: "/Interns/:id",
        element: <PrivateRoute><SingleIntern></SingleIntern></PrivateRoute>,
        loader: async ({ params }) => fetch(`https://zero2intern.onrender.com/interns/${params.id}`),
      },
      {
        path: '/apply/:id',
        element: <PrivateRoute><Apply></Apply></PrivateRoute>,
        loader: async ({ params }) => fetch(`https://zero2intern.onrender.com/apply/${params.id}`)
      },
      {
        element: <FinalApply></FinalApply>,
        loader: async ({ params }) => fetch(`https://zero2intern.onrender.com/apply/${params.id}`)
      },
      {
        path: '/applicant/:id',
        element: <ViewApplicant></ViewApplicant>,
        loader: async ({ params }) => fetch(`https://zero2intern.onrender.com/applicant/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },

  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      
      //admin
      {
        path: 'adminhome', //Common dashboard
        element: <AdminHome></AdminHome> //Common dashboard
      },
      {
        path: 'AddAnIntern',
        element: <AddAnIntern></AddAnIntern>
      },
      {
        path: 'AddedInterns',
        element: <AddedInterns></AddedInterns>
      },
      {
        path: 'AllApplicant',
        element: <AllApplicant></AllApplicant>
      },
      {
        path: 'ManageApplicant',
        element: <ManageApplicant></ManageApplicant>
      },

      //user
      {
        path: 'UserProfile',
        element: <UserProfile></UserProfile>,
      },
      {
        path: 'AppliedInterns',
        element: <AppliedInterns></AppliedInterns>
      },
      {
        path: 'ApplyMore',
        element: <ApplyMore/>
      }
    ]
  }

]);
