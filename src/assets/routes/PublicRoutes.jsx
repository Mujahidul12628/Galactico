import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout/MainLayout";
import ErrorPage from "../common/ErrorPage/ErrorPAge";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignUp from "../pages/Login/SignUp";


const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            // {
            //     path: "/chef/:id",
            //     element: (
            //         <PrivateRoute>
            //             <ChefRecipes></ChefRecipes>
            //         </PrivateRoute>
            //     ),
            //     loader: ({ params }) =>
            //         fetch(
            //             `http://localhost:5555/chef/${params.id}`
            //         ),
            // },
            // {
            //     path: "/recipe/:id",
            //     element: (
            //         <PrivateRoute>
            //             <RecipeDetails></RecipeDetails>
            //         </PrivateRoute>
            //     ),
            //     loader: ({ params }) =>
            //         fetch(
            //             `http://localhost:5555/recipe/${params.id}`
            //         ),
            // },
            // {
            //     path: "/blog",
            //     element: <Blog></Blog>,
            //     loader: () =>
            //         fetch("http://localhost:5555/questions"),
            // },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <SignUp></SignUp>
            },
        ],
    },
]);

export default PublicRoutes;
