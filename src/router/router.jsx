import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import TravelBook from "../Page/Travel/TravelBook";
import BookLayout from "../Layout/BookLayout";
import Book from "../Page/Book/Book";
import Blog from "../Page/Blog/Blog";
import BlogLayOut from "../Layout/BlogLayOut";
import Login from "../Page/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../Page/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Destination from "../Page/Destination/Destination";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='travels/1'></Navigate>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path:"destination",
                element:<Destination></Destination>
            }

        ]
    },
    {
        path: 'travels',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <TravelBook></TravelBook>,
                loader: ({ params }) => fetch(`https://travel-server-sites-prasanjitsarker3.vercel.app/travels/${params.id}`)
            }
        ]
    },
    {
        path: 'book',
        element: <BookLayout></BookLayout>,
        children: [
            {
                path: ":id",
                element: <Book></Book>,
                loader: ({ params }) => fetch(`https://travel-server-sites-prasanjitsarker3.vercel.app/travels/${params.id}`)
            }

        ]

    },
    {
        path: 'blog',
        element: <BlogLayOut></BlogLayOut>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute> <Blog></Blog></PrivateRoute>,
                loader: ({ params }) => fetch(`https://travel-server-sites-prasanjitsarker3.vercel.app/travels/${params.id}`)
            }
            // ,
            // {
            //     path: 'blog/login',
            //     element: <Login></Login>
            // }
        ]
    }




])

export default router;