import "./style.scss";
import { useContext } from "react";
import { AuthContext } from './context/AuthContext';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from './page/Login';
import Register from './page/Register';
import Home from './page/Home';

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children; // Render children if currentUser exists
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          } />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
