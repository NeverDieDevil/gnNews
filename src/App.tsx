import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import "./App.scss";
import { useAppSelector } from "./store/hooks";
import { fetchNews } from "./store/news-actions";
import { useAppDispatch } from "./store/hooks";
import NewsList from "./components/Main/NewsList";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/country",
    element: <Root />,
    // errorElement: <Error />,
    children: [{ path: ":countryId", element: <NewsList /> }],
  },
]);

let isInitial = true;
function App() {
  const dispatch = useAppDispatch();
  // const isList = useAppSelector(state=>state.isList);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchNews("pl"));
    }
  });

  return <RouterProvider router={router} />;
}

export default App;
