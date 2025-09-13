import "../styles/pages/roadMapPageStyle.css";

function RoadMap() {
  const handleMenuClick = () => {
    // 메뉴 기능은 나중에 구현
    console.log("Menu clicked");
  };

  return (
    <div className="roadmap-container">
      <header className="roadmap-header">
        <h2>로드맵</h2>
        <button className="menu-button" onClick={handleMenuClick}>
          <img src="/menu_icon.svg" alt="메뉴" />
        </button>
      </header>

      <div>tabs</div>
      <div>points</div>
      <div>main card</div>
      <p>RoadMap</p>
    </div>
  );
}

export default RoadMap;
