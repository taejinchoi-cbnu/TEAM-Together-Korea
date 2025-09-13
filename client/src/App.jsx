import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import BottomNav from "./components/BottomNav.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import OnBoarding from "./pages/OnBoarding.jsx";
import Login from "./pages/Login.jsx";
import ChatBot from "./pages/ChatBot.jsx";
import ChatSession from "./pages/ChatSession.jsx";
import Home from "./pages/Home.jsx";
import RoadMap from "./pages/RoadMap.jsx";
import RoadDetail from "./pages/RoadMapDetail.jsx";
import Infos from "./pages/Infos.jsx";
import Profile from "./pages/Profile.jsx";
import Video from "./pages/Video.jsx";
import Quiz from "./pages/Quiz.jsx";
import QuizComplete from "./pages/QuizComplete.jsx";

function AppContent() {
  const location = useLocation();
  const shouldShowHeader = location.pathname === "/home";
  const shouldShowNav = ["/home", "/roadmap", "/info", "/profile"].includes(
    location.pathname
  );

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/onBoarding" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <ChatBot />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot/session"
          element={
            <ProtectedRoute>
              <ChatSession />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roadmap"
          element={
            <ProtectedRoute>
              <RoadMap />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roadmap-detail"
          element={
            <ProtectedRoute>
              <RoadDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/roadmap-detail-video"
          element={
            <ProtectedRoute>
              <Video />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz-complete"
          element={
            <ProtectedRoute>
              <QuizComplete />
            </ProtectedRoute>
          }
        />
        <Route
          path="/info"
          element={
            <ProtectedRoute>
              <Infos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
      {shouldShowNav && <BottomNav />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
