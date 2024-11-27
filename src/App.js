import Home from './components/Home/Home.jsx'
import Customer from './pages/customers/Customer.jsx'
import Product from './pages/product/Product.jsx';
import New from './pages/new/New.jsx'
import Single from './pages/single/Single.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/customers/',
    element: <Customer />,
  },
  {
    path: '/products/',
    element: <Product />,
  },
  {
    path: '/products/:productid/new',
    element: <New />,
  },
  {
    path: '/customers/:cutomerid/single',
    element: <New />,
  },
  {
    path: '/products/:productid/new',
    element: <Single />,
  },
  {
    path: '/customers/:cutomerid/single',
    element: <Single />,
  }
])
function App() {
  return (
    <>
    <RouterProvider router = {router} />
      
    </>
  );
}

export default App;
