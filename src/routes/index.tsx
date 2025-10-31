import { useAppSelector } from "infrastructure/store";
import "react-toastify/dist/ReactToastify.css";
import { protectedRoutes, publicRoutes } from "./routes";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const { data } = useAppSelector((state) => state.auth);

  const permittedRoutes = data?.data.token ? protectedRoutes : publicRoutes;
  const element = useRoutes(permittedRoutes);

  return <div>{element}</div>;
};

export default AppRoutes;
