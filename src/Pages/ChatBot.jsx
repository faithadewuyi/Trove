
import  { useState } from 'react';
import { RiSendPlane2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";


const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [Chat, setChat] = useState(true);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'Hello! How can I assist you today?' },
        ]);
      }, 1000);
    }
  };

  const CloseChatBot = () => {
    setChat(false);
  };

  return (
    <div className={`fixed bottom-4 right-4 bg-gray-100  border-b-8 border-black shadow-lg w-80 ${Chat ? 'block' : 'hidden'}`}>
      <div className="mt- p-6 border-b rounded-b-lg border-gray-200 bg-btn flex flex-wrap relative">

      <div className='absolute top-1 right-1' onClick={CloseChatBot}>
          <AiOutlineClose size={20}/>
        </div>

        <h2 className="text-lg font-semibold ml-16">Hi There!</h2>

        <div className='ml-3'>
          <img src='waving.png' alt=''></img>
        </div>

        <div className='text-sm mt-2'>
          <p>We usually respond within 24 hours</p>
        </div>

      </div>

      <div className=''>
        <div className="flex">
          <input 
            type="text"
            placeholder=''
            className="py-6 border rounded-xl mt-4 ml-4"
          
          />
        </div>

        <div className='absolute top-50 left-0 float-end'>
          <IoPersonCircleOutline size={25}/>
        </div>
      </div>

      <div className="py-4 px-4 h-52 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg overflow-x-auto ${
              message.sender === 'user' ? 'bg-gray-300 text-right mt-2' : 'bg-white text-left mt-2'
            }`}
          >
            {message.text}
          </div>
            
        ))}
      </div>
      
      <div className="flex">
        <input
          type="text"
          placeholder='Write your message......'
          className="flex-grow border rounded-lg p-2 static"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <div className='mt-3 absolute right-3' onClick={handleSend}>
          <RiSendPlane2Fill />
        </div>
        
        <button
          className="bg-btn text-white p-2 rounded-lg"
          
        >
          Send
        </button>
      
      </div>
    </div>
  );
};

export default ChatBot; 
