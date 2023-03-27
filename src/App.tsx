import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import { useAppSelector } from "./store/hooks";
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

let isInitial = true;
function App() {
  const selectedCountry = useAppSelector((state) => state.selectedCountry);

  // const isList = useAppSelector(state=>state.isList);

  return <RouterProvider router={router} />;
}

export default App;
