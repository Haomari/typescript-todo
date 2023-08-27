// react router component layout

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "layouts/Layout";

import Home from "./pages/Home";

import Page404 from "./pages/Page404";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} /* errorElement={<Error />} */>
      <Route index element={<Home />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
}

export default App;