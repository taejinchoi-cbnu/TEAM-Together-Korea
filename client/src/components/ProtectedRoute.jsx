import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 현재 세션 확인
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error("Auth check error:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    // 인증 상태 변경 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsAuthenticated(!!session);
        setLoading(false);
      }
    );

    checkAuth();

    // 컴포넌트 언마운트 시 구독 해제
    return () => subscription.unsubscribe();
  }, []);

  // 로딩 중일 때 표시할 컴포넌트
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '16px'
      }}>
        로딩 중...
      </div>
    );
  }

  // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 로그인된 경우 자식 컴포넌트 렌더링
  return children;
}

export default ProtectedRoute;