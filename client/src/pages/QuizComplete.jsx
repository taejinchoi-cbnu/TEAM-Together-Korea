import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { markItemCompleted } from "../utils/roadmapProgress";
import "../styles/pages/quizCompletePageStyle.css";

function QuizComplete() {
  const navigate = useNavigate();

  // 컴포넌트 마운트 시 Quiz 아이템 완료 처리
  useEffect(() => {
    // 6번 아이템(인덱스 5) 완료 처리
    markItemCompleted(5);
  }, []);

  const handleBackClick = () => {
    navigate("/roadmap");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleCertificateClick = () => {
    // 이수증 저장 로직
    console.log("이수증 저장");
  };

  return (
    <div className="quiz-complete-container">
      <header className="complete-header">
        <img
          src="/back_icon.svg"
          alt="뒤로가기"
          onClick={handleBackClick}
          className="back-btn-icon"
        />
        <h2>기초 산업안전 보건 교육</h2>
      </header>

      <main className="complete-main">
        <div className="congratulation-section">
          <h1 className="complete-title">이수완료</h1>
          <div className="points-message">
            <span className="points-text">포인트</span>
            <div className="points-badge">
              <img src="/point_icon.svg" alt="포인트" />
              <span className="points-number">200</span>
            </div>
            <span className="points-text">을 얻었어요!</span>
          </div>
        </div>

        <div className="illustration-section">
          <img
            src="/quiz_complete_character.svg"
            alt="이수완료 캐릭터"
            className="complete-character"
          />
        </div>

        <div className="recommendation-section">
          <div className="recommendation-card">
            <div className="recommendation-badge">추천</div>
            <h3 className="recommendation-title">제조업 근로자 정기 교육</h3>
          </div>
        </div>
      </main>

      <footer className="complete-footer">
        <div className="footer-buttons">
          <button className="footer-btn home-btn" onClick={handleHomeClick}>
            홈으로
          </button>
          <button className="footer-btn certificate-btn" onClick={handleCertificateClick}>
            이수증 저장
          </button>
        </div>
      </footer>
    </div>
  );
}

export default QuizComplete;
