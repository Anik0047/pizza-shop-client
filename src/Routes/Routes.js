import Main from "../Layouts/Main";
import AddBlog from "../Pages/Dashboad/AddBlog/AddBlog";
import AddPizza from "../Pages/Dashboad/AddPizza/AddPizza";
import AllBolg from "../Pages/Dashboad/AllBlog/AllBolg";
import AllPizza from "../Pages/Dashboad/AllPizza/AllPizza";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

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
        ]
    }
])