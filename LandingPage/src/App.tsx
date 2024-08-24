import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About-Us";
import { Services } from "./Pages/Services";
import { Faqs } from "./Pages/Faqs";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about-us",
      element: <About />,
    },
    {
      path: "services",
      element: <Services />,
    },
    {
      path: "faqs",
      element: <Faqs />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
