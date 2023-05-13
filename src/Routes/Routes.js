import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import BlogDetails from "../Pages/BlogPage/BlogDetails";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Contact from "../Pages/ContactUS/Contact";
import AddBlog from "../Pages/Dashboad/AddBlog/AddBlog";
import AddPizza from "../Pages/Dashboad/AddPizza/AddPizza";
import AllBolg from "../Pages/Dashboad/AllBlog/AllBolg";
import AllOrders from "../Pages/Dashboad/AllOrders/AllOrders";
import AllPizza from "../Pages/Dashboad/AllPizza/AllPizza";
import AllUser from "../Pages/Dashboad/AllUser/AllUser";
import MyOrders from "../Pages/Dashboad/MyOrders/Myorders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Menu from "../Pages/Menu/Menu";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import AdminRoute from "./AdminRoute";
import PrivateRoutes from "./PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
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
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/menu',
                element: <PrivateRoutes> <Menu></Menu></PrivateRoutes>
            },
            {
                path: '/services',
                element: <ServicesPage></ServicesPage>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: "/blog/:id",
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/blog/${params.id}`)
                },
                element: <BlogDetails></BlogDetails>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/',
                element: <PrivateRoutes><MyOrders></MyOrders></PrivateRoutes>
            },
            {
                path: '/dashboard/allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/allBlog',
                element: <AdminRoute><AllBolg></AllBolg></AdminRoute>
            },
            {
                path: '/dashboard/allPizza',
                element: <AllPizza></AllPizza>
            },
            {
                path: '/dashboard/addBlog',
                element: <AdminRoute><AddBlog></AddBlog></AdminRoute>
            },
            {
                path: '/dashboard/addPizza',
                element: <AdminRoute><AddPizza></AddPizza></AdminRoute>
            },
            {
                path: '/dashboard/allorders',
                element: <AdminRoute><AllOrders></AllOrders></AdminRoute>
            },
        ]
    }
])