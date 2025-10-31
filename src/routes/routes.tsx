import { Navigate, RouteObject } from "react-router-dom";
import DashboardLayout from "presentation/layout/dashboard";
import Login from "presentation/pages/login";
import Dashboard from "presentation/pages/dashboard/index.page";
import MyPokemon, {
  mpRouteName,
} from "presentation/pages/my-pokemon/index.pages";

const protectedRoutes: RouteObject[] = [
  { path: "", element: <Navigate to="/pokemon-list" /> },
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      { path: "not-found", element: <>Page Not Found</> },
      { path: "pokemon-list", element: <Dashboard /> },
      { path: mpRouteName, element: <MyPokemon /> },
    ],
  },
  { path: "*", element: <Navigate to="/not-found" /> },
];

const publicRoutes: RouteObject[] = [
  { path: "", element: <Login /> },
  { path: "404", element: <div>Not Found</div> },
  { path: "*", element: <Navigate to="/" /> },
];

export { publicRoutes, protectedRoutes };
