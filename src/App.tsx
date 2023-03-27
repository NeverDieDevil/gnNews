import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { useEffect } from "react";
import "./App.scss";
import { useAppSelector } from "./store/hooks";
import { fetchNews } from "./store/news-actions";
import { useAppDispatch } from "./store/hooks";
import NewsList from "./components/Main/NewsList";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/country/pl" />,
  },
  {
    path: "/country",
    element: <Root />,
    // errorElement: <Error />,
    children: [{ path: ":countryId", element: <NewsList /> }],
  },
]);

let isInitial = true;
function App() {
  const selectedCountry = useAppSelector((state) => state.selectedCountry);
  console.log(selectedCountry);
  const dispatch = useAppDispatch();

  // const isList = useAppSelector(state=>state.isList);

  return <RouterProvider router={router} />;
}

export default App;
