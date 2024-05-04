import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import CustomLoader from "../../components/CustomLoader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const prevPage = useLocation();
  if (loading) {
    return <CustomLoader></CustomLoader>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/user-login"} state={{ from: prevPage }} replace></Navigate>
  );
};

export default PrivateRoute;
