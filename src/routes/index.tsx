import  { FunctionComponent } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "container/LoginPage";
import Register from "container/RegisterPage";
import ProtectedRoutes from "./Dashboard";

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
  const location = useLocation();
  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />
        {/* Register Route */}
        <Route path="/register" element={<Register />} />
        {/* Protected Routes */}
        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
      {location.pathname === "/" && <Navigate to="/login" />}
    </>
  );
};

export default AppRoutes;
