import { useNavigate } from "react-router-dom";

function ChatSession() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="chat-session">
      <div className="chat-session-header">
        <button onClick={handleBack}>
          <img src="/back_icon.svg" />
        </button>
        <h2>챗봇 대화</h2>
      </div>

      <div className="chat-session-content">
        <p>채팅 세션 구현 예정</p>
      </div>
    </div>
  );
}

export default ChatSession;
