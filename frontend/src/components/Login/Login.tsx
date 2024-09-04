import { useState } from "react";
import { useChat } from "../../hooks/useChat";
import { LoginBox } from "./Login.styled";

function Login() {
  const [name, setName] = useState('');
  const { handleLogin } = useChat();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(name);
  }

  return (
    <LoginBox>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
          <button>Entrar</button>
        </form>
      </div>
    </LoginBox>
  );
}

export default Login;