import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegisterPage";

import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Authorisation/AuthProvider";
import ProtectedRoute from "./Authorisation/ProtectedRoute";
import VideoTranscriptPlayer from "./Pages/TransCript";

import Recorder from "./Pages/Home";

import PlayVideos from "./Pages/viewvideo";

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
                <VideoTranscriptPlayer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/record"
            element={
              <ProtectedRoute>
                <Recorder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/playvideo"
            element={
              <ProtectedRoute>
                <PlayVideos />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
