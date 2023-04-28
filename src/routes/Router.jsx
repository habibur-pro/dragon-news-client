import { createBrowserRouter } from "react-router-dom"
import Main from "../layoutes/Main"
import Home from "../pages/Home/Home"
import Category from "../shared/Category/Category"
import NewsLayout from "../layoutes/NewsLayout"
import News from "../pages/Home/News/News"




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: 'categories/:id',
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
                element: <News />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }
])

export default router