import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import BlogPage from "../Pages/BlogPage/BlogPage";
import Contact from "../Pages/ContactUS/Contact";
import AddBlog from "../Pages/Dashboad/AddBlog/AddBlog";
import AddPizza from "../Pages/Dashboad/AddPizza/AddPizza";
import AllBolg from "../Pages/Dashboad/AllBlog/AllBolg";
import AllPizza from "../Pages/Dashboad/AllPizza/AllPizza";
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
                path: '/addPizza',
                element: <AddPizza></AddPizza>
            },
            {
                path: '/allPizza',
                element: <AllPizza></AllPizza>
            },
            {
                path: '/addBlog',
                element: <AddBlog></AddBlog>
            },
            {
                path: '/allBlog',
                element: <AllBolg></AllBolg>
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
    }
])