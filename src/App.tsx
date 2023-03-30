import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
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
    children: [{ path: ":countryId", element: <NewsList /> }],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
