import ReactMarkdown from 'react-markdown';

function ChatMessage({ message, isUser }) {
  const renderMessage = () => {
    if (isUser) {
      // 사용자 메시지: 줄바꿈(\n)을 <br/>로 변환
      return message.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < message.split('\n').length - 1 && <br />}
        </span>
      ));
    } else {
      // 봇 메시지: 마크다운 렌더링
      return <ReactMarkdown>{message}</ReactMarkdown>;
    }
  };

  return (
    <div className={isUser ? "message-user" : "message-bot"}>
      {renderMessage()}
    </div>
  );
}

export default ChatMessage;