import { useNavigate, useLocation } from "react-router-dom";
import "../styles/components/bottomNavStyle.css";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: "/home",
      icon: "/home.svg",
      label: "홈",
    },
    {
      path: "/roadmap",
      icon: "/flag_2.svg",
      label: "로드맵",
    },
    {
      path: "/info",
      icon: "/assignment.svg",
      label: "정보모음",
    },
    {
      path: "/profile",
      icon: "/account_circle.svg",
      label: "MY",
    },
  ];

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="bottomNav">
      {navItems.map((item) => (
        <button
          key={item.path}
          className={`navItem ${location.pathname === item.path ? "active" : ""}`}
          onClick={() => handleNavClick(item.path)}
        >
          <img src={item.icon} alt={item.label} className="navIcon" />
          <span className="navLabel">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
