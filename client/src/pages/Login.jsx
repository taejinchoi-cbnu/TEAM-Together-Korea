import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Login() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/home`,
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });

      if (error) {
        console.error("Error during Google login:", error.message);
        alert("로그인 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("예상치 못한 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>로그인</h1>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="google-login-btn"
        >
          {loading ? "로그인 중..." : "Google로 로그인"}
        </button>
      </div>
    </div>
  );
}

export default Login;
