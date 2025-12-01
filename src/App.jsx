import RootLayout from './RootLayout';
import Home from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from 'react-router';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      // { path: "about", Component: About }
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App