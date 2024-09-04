import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Message, User } from "../types/userTypes";

interface ChatContextData {
  myUser: User | null;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  handleLogin: (name: string) => void;
  sendMessage: (message: string) => void;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

interface ChatProviderProps {
  children: ReactNode;
}

const colors = [
  'red', 'blue', 'green', 'purple', 'orange', 'pink', 'brown', 'yellow', 'cyan',
  'magenta', 'lime', 'teal', 'indigo', 'violet', 'gold', 'silver', 'maroon', 'navy', 'olive',
  'coral', 'salmon', 'khaki', 'plum', 'orchid', 'turquoise', 'tan', 'lavender', 'peach', 'mint'
];

export function ChatProvider({ children }: ChatProviderProps) {
  const [myUser, setMyUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    if (ws) {
      ws.onmessage = processMessage;
    }
  }, [ws])

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const handleLogin = (name: string) => {
    const user = {
      id: crypto.randomUUID(),
      name,
      color: getRandomColor(),
    }
    setMyUser(user);
    const socket = new WebSocket('wss://web-chat-euiq.onrender.com');
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'login', user }));
    }
    setWs(socket);
  };

  const processMessage = ({ data }: MessageEvent) => {
    const dataObj = JSON.parse(data);
    if (dataObj.type === 'message') {
      setMessages((prev) => [...prev, dataObj.message]);
    }
  };

  const sendMessage = (message: string) => {
    const newMessage: Message = {
      user: myUser!,
      message,
    }
    ws?.send(JSON.stringify({ type: 'message', message: newMessage }));
  }

  return (
    <ChatContext.Provider value={{
      myUser,
      messages,
      setMessages,
      handleLogin,
      sendMessage,
    }}>
      {children}
    </ChatContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useChat() {
  return useContext(ChatContext);
}

