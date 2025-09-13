import { useNavigate } from "react-router-dom";
import "../styles/components/headerStyle.css";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };

  const handleNotiClick = () => {
    console.log("알림 기능 구현 예정");
  };

  return (
    <header className="header">
      <img
        src="/logo_header.svg"
        alt="Kori"
        className="headerLogo"
        onClick={handleLogoClick}
      />

      <img
        src="/notifications.svg"
        alt="notifications"
        className="headerNoti"
        onClick={handleNotiClick}
      />
    </header>
  );
}

export default Header;
