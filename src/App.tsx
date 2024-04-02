import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './pages/Error'; 
import { useEffect, useState, ReactElement } from 'react';
import Home from './pages/Home';

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname !== "/register") {
      navigate("/login");
    }
  }, [location.pathname, navigate]); 

  interface ProjectedRouteProps {
    children: ReactElement;
    redirectTo?: string;
    isAuthentication: boolean;
  }

  function ProjectedRoute({ children, redirectTo = "/login", isAuthentication }: ProjectedRouteProps) {
    if (!isAuthentication) {
      navigate(redirectTo);
      return null; 
    }
    return children;
  }

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}></Route> {}
        <Route path='/register' element={<Register />}></Route>

        <Route path='/' element={
          <ProjectedRoute isAuthentication={token ? true : false}>
            <Home />
          </ProjectedRoute>
        }>
        </Route>

        <Route path='/error' element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
