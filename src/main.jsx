import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import { ThemeProvider } from './providder/ThemeContext.jsx'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // Animation duration in ms
  once: true, // Animate only once
  easing: "ease-in-out",
});
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-roboto'>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </ThemeProvider>
    </div>
  </StrictMode>,
)
