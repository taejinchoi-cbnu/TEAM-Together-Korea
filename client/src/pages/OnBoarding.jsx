function OnBoarding() {
  const handleStart = () => {
    navigator("/login");
  };
  return (
    <>
      <p>onBoarding</p>
      <button onClick={handleStart}>시작하기</button>
    </>
  );
}

export default OnBoarding;
