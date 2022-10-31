import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./components/loaders/productsAndCatLoader";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/shop',
          loader:()=> fetch('products.json'),
          element:<Shop></Shop>
        },
        {
          path:'orders',
          loader:productsAndCartLoader,
          element:<Orders/>
        },
        {
          path:'inventory',
          element:<Inventory/>
        }
      ]
    },
    {
      path:'about',
      element:<AboutUs></AboutUs>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
