import { useNavigate } from "react-router-dom";
import { markItemCompleted } from "../utils/roadmapProgress";
import "../styles/pages/videoStyle.css";

function Video() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    // 5번 아이템(인덱스 4) 완료 처리
    markItemCompleted(4);
    navigate("/roadmap");
  };

  return (
    <div className="video-container">
      <div className="video-content">
        <img
          src="/demo_video.svg"
          alt="videos"
          className="rotated-video"
        />
      </div>

      <div className="video-footer">
        <button
          className="complete-button"
          onClick={handleBtnClick}
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default Video;
