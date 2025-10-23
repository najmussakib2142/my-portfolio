import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Projects from "../pages/Projects/Projects";
import Contact from "../pages/Contact/Contact";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/Home/About";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",    
        element: <Contact />,
      },
      
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "about",
        element: <About />,
      }
      
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);