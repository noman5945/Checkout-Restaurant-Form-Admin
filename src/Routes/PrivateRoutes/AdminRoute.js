import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import CustomLoader from "../../components/CustomLoader";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, adminLoader] = useAdmin(user?.email);
  const prevPage = useLocation();

  if (loading || adminLoader) {
    return <CustomLoader></CustomLoader>;
  }
  if (user?.email && isAdmin) {
    return children;
  }
  return <Navigate to={"/user-login"} state={{ from: prevPage }} replace />;
};

export default AdminRoute;
