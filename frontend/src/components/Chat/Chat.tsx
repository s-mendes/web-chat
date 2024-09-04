import { useState } from "react";
import { useChat } from "../../hooks/useChat";
import { ChatBox } from "./Chat.styled";

function Chat() {
  const [message, setMessage] = useState('');
  const { sendMessage, myUser, messages } = useChat();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSendMessage();
  }

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <>
      <ChatBox>
        <div className="messages">
          {messages.map((msg, index) => {
            return (
              <div key={index} className={msg.user.id === myUser?.id ? 'outgoing' : 'incoming'}>
                <span style={{color: msg.user.color }}>{msg.user.name}</span>
                {msg.message}
              </div>
            )
          })}
        </div>
        <form onSubmit={handleSubmit} >
          <input type="text" placeholder="Digite sua mensagem..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown} />
          <button>
            <svg height='1em' width='1em' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M57.6 35.8C23.1 20.6-11.3 57.4 6.1 90.9l63 121.2c4.4 8.4 12.6 14.1 22 15.3c0 0 0 0 0 0L266 249.3c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7L91.1 284.6s0 0 0 0c-9.4 1.2-17.6 6.9-22 15.3L6.1 421.1c-17.4 33.5 17 70.2 51.6 55.1L492.9 285.3c25.5-11.2 25.5-47.4 0-58.6L57.6 35.8z" /></svg>
          </button>
        </form>
      </ChatBox>
    </>
  );
}

export default Chat;