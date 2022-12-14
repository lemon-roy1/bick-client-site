import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
// import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ReviewUpdate from './../../Pages/Review/ReviewUpdate';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login', 
          element: <Login></Login>
        },
        {
          path: '/signup', 
          element: <SignUp></SignUp>
        },
        {
          path: '/Blog',
         element:<Blog/>
        },
        {
          path:'/services',
          element: <Services></Services>
        },
        {
          path: 'addServices',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/Details/:id',
          element:  <Details></Details>,
          loader: ({params})=> fetch(`https://modul-67-assignment-server-sit.vercel.app/services/${params.id}`)
        },
        {
          path: '/review',
          element: <PrivateRoute><Review></Review></PrivateRoute>  
        },
        {
          path: '/update/:id',
          loader: ({params})=> fetch(`https://modul-67-assignment-server-sit.vercel.app/reviews/${params.id}`) ,
          element:<ReviewUpdate></ReviewUpdate>
        },
        
        {
          path: "*",
          element: <ErrorPage />,
        },
      ]
    }
  ]);

  export default router;