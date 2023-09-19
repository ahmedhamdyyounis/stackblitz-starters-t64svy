import React from 'react';
import { useRouteError } from 'react-router-dom';
import './style.css';
import MainLayout from './Components/MainLayout';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
export default function App() {
  function ErrorItem() {
    const error = useRouteError();
    return <p>Dang! there's an error</p>;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="services"
          element={<Services />}
          errorElement={<ErrorItem />}
        />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
