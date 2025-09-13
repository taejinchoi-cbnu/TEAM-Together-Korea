import { useNavigate } from "react-router-dom";
import "../styles/pages/chatbotPageStyle.css";

function ChatBot() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/home");
  };

  const handleQuestionClick = () => {
    navigate("/chatbot/session");
  };

  const exampleQuestions = [
    "로드맵은 무엇인가요?",
    "지금 어떤 혜택을 받을 수 있는 지 궁금해요!",
    "어떤 서류가 필요한가요?",
  ];

  return (
    <div className="chatbot-page">
      <div className="chatbot-header">
        <img src="/logo_header.svg" alt="KORI" className="chatbot-logo" />
        <button className="chatbot-close-btn" onClick={handleClose}>
          <img src="/button_close_icon.svg" alt="닫기" />
        </button>
      </div>

      <div className="chatbot-content">
        <div className="greeting-section">
          <h2 className="greeting-title">
            안녕하세요.
            <br />
            KORI입니다!
            <br />
            어떤 걸 도와드릴까요?
          </h2>
        </div>

        <div className="example-questions-section">
          <h3 className="section-title">예시 질문</h3>
          <div className="questions-list">
            {exampleQuestions.map((question, index) => (
              <div key={index} className="question-item">
                <img src="/help_icon.svg" />
                <span className="question-text">{question}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chatbot-footer">
        <button className="question-btn" onClick={handleQuestionClick}>
          질문하기
        </button>
      </div>
    </div>
  );
}

export default ChatBot;
