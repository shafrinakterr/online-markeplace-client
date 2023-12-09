import { createBrowserRouter } from "react-router-dom";
import AddJob from "../src/page/AddJob";
import PostJob from "../src/page/PostJob";
import MainLayout from "../src/coponent/mainlayOut/MainLayout";
import MyBids from "../src/page/myBids";
import Home from "../src/page/Home";
import ErrorPage from "../src/page/ErrorPage";
import Login from "../src/page/Login";
import Register from "../src/page/Register";
import Bidrequests from "../src/page/Bidrequests";
import Details from "../src/page/Details";
import PrivaterRouter from "../privaterouter/PrivaterRouter";
import UapdatedJobPost from "../src/coponent/upadetedJobPost/UapdatedJobPost";

const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://online-marketplace-server-site.vercel.app/job')
            },
            {
                path:'addjob',
                element:<PrivaterRouter><AddJob></AddJob></PrivaterRouter>
            },
            {
                path:'updated/:id',
                element:<UapdatedJobPost></UapdatedJobPost>,
                loader:({params})=>fetch(`https://online-marketplace-server-site.vercel.app/jobPost/${params.id}`)
            },
            {
                path:'mypostedjobs',
                element:<PrivaterRouter><PostJob></PostJob></PrivaterRouter>,
                loader:()=>fetch('https://online-marketplace-server-site.vercel.app/jobPost')
            },
            {
                path:'/details/:id',
                element:<PrivaterRouter><Details></Details></PrivaterRouter>,
                loader: ({params})=>fetch(`https://online-marketplace-server-site.vercel.app/jobPost/${params.id}`)
            },
            {
                path:'myBids',
                element:<PrivaterRouter><MyBids></MyBids></PrivaterRouter>,
                
            },
            {
                path:'bidrequests',
                element:<PrivaterRouter><Bidrequests></Bidrequests></PrivaterRouter>,
                loader:()=>fetch('https://online-marketplace-server-site.vercel.app/jobPost')
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'singUp',
                element:<Register></Register>
            }
         ]
    }
   
])

export default router;