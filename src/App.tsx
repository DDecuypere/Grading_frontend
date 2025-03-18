import './css/App.css'
import Login from './pages/Login'
import HomeUser from './pages/HomeUser'
import { Routes, Route, Navigate } from 'react-router';
import { AuthProvider, useAuthContext } from './contexts/AuthContext';

function AppRoutes() {
  const {isAuthenticated} = useAuthContext();

  return (
    <Routes>
      <Route
        path="/" 
        element={<Navigate to={isAuthenticated ? "/home" : "/login"} />}
      />

      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/home" /> : <Login />} 
      />

      <Route 
        path="/home" 
        element={isAuthenticated ? <HomeUser /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App
