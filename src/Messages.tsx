const Messages = ({messages}: {messages: string[]}) => {
  
  return ( <div>
    <h1>Messages</h1>
    <ul>
      {messages.map((message, index) => <li key={index}>{message}</li>)}
    </ul>
  </div> );
}
 
export default Messages;