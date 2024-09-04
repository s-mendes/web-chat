import { ChatProvider } from "./hooks/useChat";
import HomePage from "./pages/HomePage/HomePage";
import GlobalStyles from "./theme/GlobalStyles";

function App() {

  return (
    <>
      <ChatProvider>
        <GlobalStyles />
        <HomePage />
      </ChatProvider>
    </>
  )
}

export default App
