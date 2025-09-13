import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRoadmapProgress, getItemState, isAllItemsCompleted } from "../utils/roadmapProgress";
import "../styles/pages/roadMapPageStyle.css";

function RoadMap() {
  const [activeTab, setActiveTab] = useState("기초");
  const [allCompleted, setAllCompleted] = useState(false);
  const navigate = useNavigate();

  const tabs = ["기초", "정기", "특별교육"];

  // 기본 로드맵 데이터 (텍스트는 고정)
  const baseEduItems = [
    {
      roadmapText: "작업장별\n위험요소 식별\n및 안전수칙",
    },
    {
      roadmapText: "개인보호구\n착용법 및 관리\n방법",
    },
    {
      roadmapText: "기계·장비\n안전 조작법",
    },
    {
      roadmapText: "화학물질 취급시\n주의사항",
    },
    {
      roadmapText: "응급처치 및\n사고 대응요령",
    },
    {
      roadmapText: "Quiz",
    },
  ];

  // localStorage에서 진행도를 로드하여 초기상태 설정
  const [eduItems, setEduItems] = useState(() => {
    const progress = getRoadmapProgress();
    return baseEduItems.map((item, index) => {
      const itemState = getItemState(index, progress.completedItems);
      return {
        ...item,
        ...itemState
      };
    });
  });

  // 초기 완료 상태 설정
  useEffect(() => {
    setAllCompleted(isAllItemsCompleted());
  }, []);

  // 페이지 재진입 시 진행도 업데이트
  useEffect(() => {
    const updateProgress = () => {
      const progress = getRoadmapProgress();
      const updatedItems = baseEduItems.map((item, index) => {
        const itemState = getItemState(index, progress.completedItems);
        return {
          ...item,
          ...itemState
        };
      });
      setEduItems(updatedItems);
      setAllCompleted(isAllItemsCompleted());
    };

    // 페이지 포커스 시 상태 업데이트 (다른 페이지에서 돌아오는 경우)
    window.addEventListener('focus', updateProgress);

    return () => {
      window.removeEventListener('focus', updateProgress);
    };
  }, [baseEduItems]);

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log("Tab clicked:", tab);
  };

  const handleItemClick = (item, index) => {
    if (item.roadmapText === "Quiz") {
      navigate("/quiz");
    }
    if (item.roadmapText === "응급처치 및\n사고 대응요령") {
      navigate("/roadmap-detail");
    }
  };

  return (
    <div className="roadmap-container">
      <header className="roadmap-header">
        <h2>로드맵</h2>
        <button className="menu-button" onClick={handleMenuClick}>
          <img src="/menu_icon.svg" alt="메뉴" />
        </button>
      </header>

      {/* Tabs */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Points Section */}
      <div className="points-section">
        <h2>내 포인트</h2>
        <button className="points-button">
          <span>1000P</span>
          <img src="/front_icon.svg" alt="화살표" />
        </button>
      </div>
      {/* Content Card Section */}
      <div className="content-card">
        <div className="card-title">
          <span className={`status-badge ${allCompleted ? 'completed' : ''}`}>
            {allCompleted ? '이수 완료' : '진행중'}
          </span>
          <h2>기초 산업안전 보건교육</h2>
        </div>
        <div className="card-text">
          <p>
            작업 전 반드시 알아야 할 기본 안전수칙과 산업재해
            <br />
            예방 방법을 배우는 법정 필수 입문 교육.
          </p>
        </div>
        <div className="card-footer">
          <div className="footer-item">
            <img src="/calendar_icon.svg" alt="날짜" />
            <span>2025. 09. 13</span>
          </div>
          <div className="footer-item points">
            <img src="/point_icon.svg" alt="포인트" />
            <span>200</span>
          </div>
        </div>
      </div>

      {/* Roadmap Items */}
      <div className="roadmap-items-container">
        <img
          className="roadmap-bg"
          src="/roadmap_bg_icon.svg"
          alt="roadmap_bg"
        />
        <div className="roadmap-items">
          {/* 시계방향 순서: 1,2,3,6,5,4 */}
          {[0, 1, 2, 5, 4, 3].map((originalIndex, displayIndex) => {
            const item = eduItems[originalIndex];
            return (
              <div
                key={originalIndex}
                className="roadmap-item"
                onClick={() => handleItemClick(item, originalIndex)}
              >
                <div className="item-row">
                  <div className={`circle-container ${item.state}`}>
                    {item.isComplete ? (
                      <>
                        <img
                          src="/complete_icon.svg"
                          alt="완료"
                          className="complete-icon"
                        />
                        <p>완료</p>
                      </>
                    ) : (
                      <span
                        className={`item-number ${item.state === "highlight" ? "highlight" : ""}`}
                      >
                        {originalIndex + 1}
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className={`item-text ${item.state === "disabled" ? "disabled" : ""}`}
                >
                  <p>{item.roadmapText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
