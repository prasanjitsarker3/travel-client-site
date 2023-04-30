import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import TravelBook from "../Page/Travel/TravelBook";
import BookLayout from "../Layout/BookLayout";
import Book from "../Page/Book/Book";
import Blog from "../Page/Blog/Blog";
import BlogLayOut from "../Layout/BlogLayOut";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navigate to='travels/1'></Navigate>
            },
            {
                path: '/travels/:id',
                element: <TravelBook></TravelBook>,
                loader: ({ params }) => fetch(`http://localhost:5000/travels/${params.id}`)
            },
            // {
            //     path: 'blog',
            //     element: <Blog></Blog>,
            //     // element: ({ params }) => fetch(`http://localhost:5000/travels/${params.id}`)
            // }

        ]
    },
    {
        path: '/book',
        element: <BookLayout></BookLayout>,
        children: [
            {
                path: "/book/:id",
                element: <Book></Book>,
                loader: ({ params }) => fetch(`http://localhost:5000/travels/${params.id}`)
            }
        ]

    },
    {
        path: 'blog',
        element: <BlogLayOut></BlogLayOut>,
        children: [
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: ':id',
                element: <Blog></Blog>,
                loader: ({ params }) => fetch(`http://localhost:5000/travels/${params.id}`)
            }
        ]
    }




])

export default router;