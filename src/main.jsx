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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
