import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import BottomNav from "./components/BottomNav.jsx";
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
  const hideHeaderRoutes = [
    "/",
    "/onBoarding",
    "/login",
    "/signup",
    "/chatbot",
    "/chatbot/session",
  ];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/onBoarding" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/chatbot/session" element={<ChatSession />} />
        <Route path="/home" element={<Home />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/info" element={<Infos />} />
        <Route path="/profile" element={<Profile />} />
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
