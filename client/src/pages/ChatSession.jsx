import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessage from "../components/ChatMessage.jsx";
import "../styles/sessions/chatbotSessionStyle.css";

function ChatSession() {
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "안녕하세요. KORI입니다!\n어떤 걸 도와드릴까요?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 메시지 추가 시 자동 스크롤
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleBack = () => {
    navigate("/home");
  };

  const sendMessageToAPI = async (message) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("API 호출 오류:", error);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isLoading) return;

    const userMessage = inputValue.trim();
    const newMessage = {
      id: Date.now(),
      content: userMessage,
      isUser: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const botResponse = await sendMessageToAPI(userMessage);

      const botMessage = {
        id: Date.now() + 1,
        content: botResponse,
        isUser: false,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        content:
          "죄송합니다. 서버에 연결할 수 없습니다. 잠시 후 다시 시도해주세요.",
        isUser: false,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chat-session">
      <div className="chat-session-header">
        <button onClick={handleBack}>
          <img src="/back_icon.svg" alt="뒤로가기" />
        </button>
        <h2>대화</h2>
      </div>

      <div className="chat-session-content">
        <img src="/logo_header.svg" alt="KORI" className="chat-logo" />

        <div className="messages-container">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.content}
              isUser={message.isUser}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          placeholder="내용을 입력해주세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button
          className="chat-send-button"
          onClick={handleSendMessage}
          disabled={isLoading || inputValue.trim() === ""}
        >
          {isLoading ? (
            <div className="loading-spinner"></div>
          ) : (
            <img src="/button_send_icon.svg" alt="전송" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ChatSession;
