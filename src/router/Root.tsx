import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import {App} from "../App";
import Cart from "../Components/Cart/CartContainer";
import {Error} from '../Components/Error/Error'
import Products from "../Components/Product/ProductList";
import Shipping from "../Components/Shipping/ShippingContainer";
import ProductsContainer from "../Components/Product/ProductList";

export default createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Products />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "shipping",
                element: <Shipping />,
            },
            {
                path: "leads",
                element: <div>leads</div>,
            },
        ]
    },
]);
