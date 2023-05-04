import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
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
import MenuCard from "../Pages/Menu/MenuCard";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";

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
                element: <Menu></Menu>
            },
            {
                path: '/menucard',
                element: <MenuCard></MenuCard>
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
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/allBlog',
                element: <AllBolg></AllBolg>
            },
            {
                path: '/dashboard/allPizza',
                element: <AllPizza></AllPizza>
            },
            {
                path: '/dashboard/addBlog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/dashboard/addPizza',
                element: <AddPizza></AddPizza>
            },
            {
                path: '/dashboard/allorders',
                element: <AllOrders></AllOrders>
            },
        ]
    }
])