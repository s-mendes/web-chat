import Chat from "../../components/Chat/Chat";
import Login from "../../components/Login/Login";
import { useChat } from "../../hooks/useChat";
import { HomeBox } from "./HomePage.styled";

function HomePage() {
  const { myUser } = useChat();
  return (
    <HomeBox>
      {!myUser && (<Login />)}
      {myUser && (<Chat />)}
    </HomeBox>
  );
}

export default HomePage;