import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// Pages
import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

// Components
import Navbar from "./components/Navbar";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path='/login'
              element={user ? <Navigate to='/' /> : <Login />}
            />
            <Route
              path='/signup'
              element={user ? <Navigate to='/' /> : <Signup />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
