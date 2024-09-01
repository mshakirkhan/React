import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
// import Body from './components/Body';
import CartBody from './components/CartBody';
// import About from './About';
import Contact from './Contact';
import Error from './Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Lazy Loading
const About = lazy(() => import("./About"))

const AppLayout = () => {
   return (
      <div className='container'>
         <Header/>
         <Outlet/>
      </div>
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