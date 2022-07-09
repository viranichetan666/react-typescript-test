import { Route, Navigate, Routes } from "react-router-dom";
import MainLayout from "container/MainLayout/index";
import { getAuthUser } from 'redux/selectors/auth'
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const authUser = useSelector(getAuthUser);
  return (
    <>
      {authUser?.token ? (
        <Routes>
          {/* Dashboard Route */}
          <Route path="/dashboard" element={<MainLayout />} />
        </Routes>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
