import { useNavigate } from "react-router-dom";
import "../styles/components/chatBotBtnStyle.css";

function ChatBotBtn() {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate("/chatbot");
  };

  return (
    <>
      <img
        src="/button_chatbot_icon.svg"
        alt="chatbot"
        className="chatbotIcon"
        onClick={handleChatbotClick}
      />
    </>
  );
}

export default ChatBotBtn;
