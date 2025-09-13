import { useNavigate } from "react-router-dom";
import "../styles/pages/roadMapDetailStyle.css";

function RoadMapDetail() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/home");
  };

  const handlePlayBtnClick = () => {
    navigate("/roadmap-detail-video");
  };

  const detailContents = [
    {
      icons: "/calendar_icon.svg",
      text: "2025. 09. 13 수강 시작",
    },
    {
      icons: "/clock_icon.svg",
      text: "총 1분",
    },
    {
      icons: "/global_icon.svg",
      text: "한국어 음성",
    },
    {
      icons: "/caption_icon.svg",
      text: "한국어・영어・베트남어・중국어",
    },
  ];
  return (
    <div className="roadmap-detail-container">
      <header className="detail-header">
        <img src="/back_icon.svg" alt="back" onClick={handleBtnClick} />
        <h2>응급처치 및 사고 대응요령</h2>
      </header>
      <div className="detail-video">
        <img src="/demo_video.svg" alt="video" />
        <div className="play-button" onClick={handlePlayBtnClick}>
          <div className="play-icon">▶</div>
        </div>
      </div>
      <div className="detail-content">
        <h2>응급처치 및 사고 대응요령</h2>
        <p>
          응급처치·사고 대응 기본을 현장 안전확보 → <br /> 119 신고 → CPR·AED →
          출혈·골절·화상·질식 처치 → <br /> 보고/기록까지, 실제 상황에서 바로 쓸
          수 있는 순서를 익힙니다.
        </p>
        <div className="detail-content-infos">
          {detailContents.map((item, index) => (
            <div key={index} className="info-item">
              <img src={item.icons} alt="icon" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadMapDetail;
