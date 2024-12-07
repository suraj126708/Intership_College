import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegisterPage";

import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Authorisation/AuthProvider";
import ProtectedRoute from "./Authorisation/ProtectedRoute";
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
