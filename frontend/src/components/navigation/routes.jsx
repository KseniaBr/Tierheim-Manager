import { useContext } from "react";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";
import NotFound from "../../pages/NotFound";
import Organisationen from "../../pages/Organisationen";
import Dashboard from "../dashboard/Dashboard";

const routes = [
  { path: "/", element: <Login />, id: 1 },
  { path: "/organisationen", element: <Organisationen />, id: 2 },
  { path: "/organisationen/:id", element: <Dashboard />, id: 3 },
  { path: "/logout", element: <Logout />, id: 4 },
  { path: "*", element: <NotFound />, id: 5 },
];

export default routes;
