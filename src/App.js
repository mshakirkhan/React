import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
// import Body from './components/Body';
import CartBody from './components/CartBody';
// import About from './About';
import Contact from './Contact';
import Error from './Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import ViewCart from './ViewCart';

// Lazy Loading
const About = lazy(() => import("./About"))

const AppLayout = () => {
   return (
      <Provider store={appStore}>
         <div className='container'>
            <Header/>
            <Outlet/>
         </div>
      </Provider>
   )
}

const appRoutes = createBrowserRouter([
   {
      path:'/',
      element: <AppLayout/>,
      children:[
         {
            path:'/',
            element: <CartBody/>
         },
         {
            path:'/about',
            element: <Suspense fallback={<h1>Loading.....</h1>}><About/></Suspense>
         },
         {
            path:'/contact',
            element: <Contact/>
         },
         {
            path:'/view-cart',
            element: <ViewCart/>
         }
      ],
      errorElement: <Error />
   },
   // {
   //    path:'/about',
   //    element: <About/>
   // },
   // {
   //    path:'/contact',
   //    element: <Contact/>
   // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);