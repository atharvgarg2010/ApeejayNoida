import './App.css';
import './style.css';

import { createBrowserRouter, RouterProvider } from 'react-router';

import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Vision from './Pages/Vision';
import Animation from './Pages/Animation';
import ExtraCurriculars from './Pages/ExtraCurriculars';
import Banner from './Pages/Banner';
import Aluminai from './Pages/Aluminai';
import AdmissionAppointmentForm from './Pages/Form';
import Footer from './Pages/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Animation />
        <Home />
        <Vision/>
        <ExtraCurriculars />
        <Banner />
        <Aluminai />
        <AdmissionAppointmentForm />
        <Footer />
      </>
    ),
  },
  {
    path: '/vision',
    element: (
      <>
        <Navbar />
        <Animation />
        <Vision />
        <Footer />
      </>
    ),
  },
  {
    path: '/activites',
    element: (
      <>
        <Navbar />
        <Animation />
        <ExtraCurriculars />
        <Footer />
      </>
    ),
  },
  {
    path: '/banner',
    element: (
      <>
        <Navbar />
        <Animation />
        <Banner />
        <Footer />
      </>
    ),
  },
  {
    path: '/alumini',
    element: (
      <>
        <Navbar />
        <Animation />
        <Aluminai />
        <Footer />
      </>
    ),
  },
  {
    path: '/form',
    element: (
      <>
        <Navbar />
        <Animation />
        <AdmissionAppointmentForm />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
