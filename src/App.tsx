import { useEffect, useState } from 'react';
import io, {Socket} from 'socket.io-client';

import './App.css';
import MessageInput from './MessageInput';
import Messages from './Messages';
import UsersInfo from './UsersInfo';

function App() {
  const [socket, setSocket] = useState<Socket>()
  const [messages, setMessages] = useState<string[]>([]);
  const [usersCount, setUsersCount] = useState<number>(0);

  const sendMessage = (message: string) => {
    socket?.emit('message', message);
  }

  useEffect(() => {
    const newSocket = io('http://localhost:3002');
    setSocket(newSocket);
  }, []);

  const messageListener = (message: string) => {
    setMessages([...messages, message]);
  }

  useEffect(() => {
    socket?.on('message', messageListener);

    return () => {
      socket?.off('message', messageListener);
    }
  }, [messageListener]);

  const usersListener = (users: number) => {
    setUsersCount(users);
  }

  useEffect(() => {
    socket?.on('users', usersListener);

    return () => {
      socket?.off('message', usersListener);
    }
  }, [usersListener])

  return (
    <main className="App">
      <UsersInfo users={usersCount} />
      <MessageInput sendMessage={sendMessage}/>
      <Messages messages={messages}/>
    </main>
  );
}

export default App;
