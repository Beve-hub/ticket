import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  //return children;
}

export default ProtectedRoute;