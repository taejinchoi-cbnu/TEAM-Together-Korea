import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/quizPageStyle.css";

function Quiz() {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = [
    {
      id: "A",
      text: "A. 매번 작업을 시작하기 직전에 한다.",
    },
    {
      id: "B",
      text: "B. 관리자가 시킬때만 한다",
    },
    {
      id: "C",
      text: "C. 다른 동료가 했다면 나는 안 해도 된다.",
    },
    {
      id: "D",
      text: "D. 시간이 있을 때만 가끔 한다.",
    },
  ];

  const handleAnswerSelect = (id) => {
    setSelectedAnswer(id);
  };

  const handleBackClick = () => {
    navigate("/roadmap");
  };

  const handleSubmitClick = () => {
    navigate("/quiz-complete");
  };
  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <img
          src="/back_icon.svg"
          alt="뒤로가기"
          onClick={handleBackClick}
          className="back-btn-icon"
        />
        <h2>Quiz</h2>
      </header>

      <div className="progress-section">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "80%" }}></div>
        </div>
      </div>

      <main className="quiz-main">
        <div className="question-section">
          <h3 className="question-title">
            5. 작업을 시작하기 전, 주변에 위험한 요소가 있는지
            <br />
            확인하는 안전 점검은 언제 해야할까요?
          </h3>
        </div>

        <div className="answer-section">
          <div className="answer-options">
            {question.map((item) => (
              <div
                key={item.id}
                className={`answer-option ${
                  selectedAnswer === item.id ? "selected" : ""
                }`}
                onClick={() => handleAnswerSelect(item.id)}
              >
                <span className="answer-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="quiz-footer">
        <div className="footer-buttons">
          <button className="footer-btn back-btn" onClick={handleBackClick}>
            이전
          </button>
          <button
            className={`footer-btn submit-btn ${
              selectedAnswer ? "enabled" : "disabled"
            }`}
            onClick={handleSubmitClick}
            disabled={!selectedAnswer}
          >
            제출
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Quiz;
