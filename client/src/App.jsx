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
import Infos from "./pages/Infos.jsx";
import Profile from "./pages/Profile.jsx";

function AppContent() {
  const location = useLocation();
  const shouldShowHeader = location.pathname === "/home";

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
      {shouldShowHeader && <BottomNav />}
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
