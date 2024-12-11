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

import VideoRecorder from "./Pages/Videorecorder";

import PlayVideos from "./Pages/viewvideo";

import VideoGallery from "./Pages/VideoGallery";

import SpeechAnalysisDashboard from "./Pages/Analysis";

import SpeechAnalysisDashboardtwo from "./Pages/Analysis2";

import VideoRecordertwo from "./Pages/NewVR";

import Hometwo from "./Pages/Hometwo";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          {/* <Route
            path="/"
            element={
              <ProtectedRoute>
                <VideoTranscriptPlayer />
              </ProtectedRoute>
            }
          /> */}


          {/* <Route
            path="/record"
            element={
              <ProtectedRoute>
                <Recorder />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/playvideo"
            element={
              <ProtectedRoute>
                <PlayVideos />
              </ProtectedRoute>
            }
          />
<<<<<<< HEAD
          {/* <Route
            path="/recordvideoold"
            element={
              
                <VideoRecorder/>
             
            }
          /> */}


=======
          <Route path="/recordvideo" element={<VideoRecorder />} />
>>>>>>> 47f66a45489c8b7054d67b181a768da4aa009cb3

          <Route path="/gallery" element={<VideoGallery />} />

<<<<<<< HEAD
          <Route
            path="/analysis"
            element={
              
                <SpeechAnalysisDashboard/>
             
            }
          />

          <Route
            path="/analysistwo"
            element={
              
                <SpeechAnalysisDashboardtwo/>
             
            }
          />

          <Route
            path="/record"
            element={
              
                <VideoRecordertwo/>
             
            }
          />
=======
          <Route path="/analysis" element={<SpeechAnalysisDashboard />} />
>>>>>>> 47f66a45489c8b7054d67b181a768da4aa009cb3

          <Route path="/analysistwo" element={<SpeechAnalysisDashboardtwo />} />

<<<<<<< HEAD
          <Route
            path="/"
            element={
              
                <Hometwo/>
             
            }
          />

          <Route
            path="/transcript"
            element={
              
                <VideoTranscriptPlayer/>
             
            }
          />

=======
          <Route path="/new" element={<VideoRecordertwo />} />
>>>>>>> 47f66a45489c8b7054d67b181a768da4aa009cb3
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
