/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Show a loading spinner or some loading component while checking auth status
    return <div>Loading...</div>;
  }

  // If no user is authenticated, redirect to login page
  if (!user) {
    return <Navigate to="/signin" />;
  }

  // If user is authenticated, render the children (protected component)
  return children;
};

export default ProtectedRoute;
