import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
  const token = localStorage.getItem("UserSessionId");

  return token ? <Outlet /> : <Navigate to="/sign_in" />;
};

export default PrivateRoute;
