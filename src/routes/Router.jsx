import { Navigate, createBrowserRouter } from "react-router-dom"
import Main from "../layoutes/Main"
import Home from "../pages/Home/Home"
import Category from "../shared/Category/Category"
import NewsLayout from "../layoutes/NewsLayout"
import News from "../pages/Home/News/News"
import LoginLayout from "../layoutes/LoginLayout"
import Login from "../pages/Login/Login/Login"
import Register from "../pages/Login/Register/Register"
import PrivetRoute from "./PrivetRoute"




const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }

        ]
    },
    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivetRoute><News /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
])

export default router