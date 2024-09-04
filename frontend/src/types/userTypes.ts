export interface User {
  id: string;
  name: string;
  color: string;
}

export interface Message {
  user: User;
  message: string;
}