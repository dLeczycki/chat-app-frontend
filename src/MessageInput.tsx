import { FormEvent, useState } from "react";

const MessageInput = ({sendMessage}: {sendMessage: (message: string) => void}) => {
  const [message, setMessage] = useState<string>('');

  const handleOnMessageChange = (e: FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value)
  }


  return ( <>
    <label htmlFor="message">
      <input type="text" name="message" value={message} onChange={handleOnMessageChange}/>
    </label>
    <button onClick={() => sendMessage(message)}>Send message</button>
  </> );
}
 
export default MessageInput;