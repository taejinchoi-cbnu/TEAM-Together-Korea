import { useNavigate } from "react-router-dom";

function OnBoarding() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <>
      <p>onBoarding</p>
      <button onClick={handleStart}>시작하기</button>
    </>
  );
}

export default OnBoarding;
