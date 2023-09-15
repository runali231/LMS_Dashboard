// import React from 'react'
// import '../Css/MentorChat.css'

// const MentorChat = () => {
//     return (
//         <>
//             <div className="background-green"></div>


//             <div className="main-container">
//                 <div className="left-container">


//                     <div className="header">
//                         <div className="user-img">
//                             <img className="dp" src="https://www.codewithfaraz.com/InstaPic.png" alt="" />
//                         </div>
//                         <div className="nav-icons">
//                             <li><i className="fa-solid fa-users"></i></li>
//                             <li><i className="fa-solid fa-message">
//                             </i></li>
//                             <li><i className="fa-solid fa-ellipsis-vertical"></i></li>
//                         </div>
//                     </div>



//                     <div className="notif-box">
//                         <i className="fa-solid fa-bell-slash"></i>
//                         <div className="notif-text">
//                             <p>Get Notified of New Messages</p>
//                             <a href="#">Turn on Desktop Notifications ›</a>
//                         </div>
//                         <i className="fa-solid fa-xmark"></i>
//                     </div>

//                     <div className="search-container">
//                         <div className="input">
//                             <i className="fa-solid fa-magnifying-glass"></i>
//                             <input type="text" placeholder="Search or start new chat   " /></div>
//                         <i className="fa-sharp fa-solid fa-bars-filter"></i>
//                     </div>


//                     <div className="chat-list">
//                         <div className="chat-box">
//                             <div className="img-box">
//                                 <img className="img-cover" src="https://lh5.googleusercontent.com/-7ssjf_mDE1Q/AAAAAAAAAAI/AAAAAAAAASo/tioYx2oklWEHoo5nAEyCT-KeLxYqE5PuQCLcDEAE/s100-c-k-no-mo/photo.jpg" alt="" />
//                             </div>
//                             <div className="chat-details">
//                                 <div className="text-head">
//                                     <h4>Nowfal</h4>
//                                     <p className="time unread">11:49</p>
//                                 </div>
//                                 <div className="text-message">
//                                     <p>“How are you?”</p>
//                                     <b>1</b>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="chat-box">
//                             <div className="img-box">
//                                 <img className="img-cover" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                             </div>
//                             <div className="chat-details">
//                                 <div className="text-head">
//                                     <h4>Rohan</h4>
//                                     <p className="time unread">10:49</p>
//                                 </div>
//                                 <div className="text-message">
//                                     <p>“I’ll be there.”</p>
//                                     <b>4</b>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="chat-box">
//                             <div className="img-box">
//                                 <img className="img-cover" src="https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                             </div>
//                             <div className="chat-details">
//                                 <div className="text-head">
//                                     <h4>Zoya</h4>
//                                     <p className="time unread">09:49</p>
//                                 </div>
//                                 <div className="text-message">
//                                     <p>“Make somebody’s day.”</p>
//                                     <b>2</b>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="chat-box">
//                             <div className="img-box">
//                                 <img className="img-cover" src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                             </div>
//                             <div className="chat-details">
//                                 <div className="text-head">
//                                     <h4>Ava</h4>
//                                     <p className="time">08:49</p>
//                                 </div>
//                                 <div className="text-message">
//                                     <p>“Dreams come true.”</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="chat-box active">
//                             <div className="img-box">
//                                 <img className="img-cover" src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                             </div>
//                             <div className="chat-details">
//                                 <div className="text-head">
//                                     <h4>Leo</h4>
//                                     <p className="time">07:49</p>
//                                 </div>
//                                 <div className="text-message">
//                                     <p>Awesome! I'll start a vid..</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="chat-box">
//                             <div className="img-box">
//                                 <img className="img-cover" src="https://images.pexels.com/photos/3564412/pexels-photo-3564412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                             </div>
//                             <div className="chat-details">
//                                 <div className="text-head">
//                                     <h4>Azariah</h4>
//                                     <p className="time">06:49</p>
//                                 </div>
//                                 <div className="text-message">
//                                     <p>“Love, light, laughter.”</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="chat-box">
//                             <div className="img-box">
//                                 <img className="img-cover" src="https://images.pexels.com/photos/2919367/pexels-photo-2919367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                             </div>
//                             <div className="chat-details">
//                                 <div className="text-head">
//                                     <h4>Oliver</h4>
//                                     <p className="time unread">Yesterday</p>
//                                 </div>
//                                 <div className="text-message">
//                                     <p>“Appreciate the mome..”</p>
//                                     <b>2</b>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="chat-box">
//                             <div className="img-box">
//                                 <img className="img-cover" src="https://images.pexels.com/photos/14526673/pexels-photo-14526673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                             </div>
//                             <div className="chat-details">
//                                 <div className="text-head">
//                                     <h4>Jeslin</h4>
//                                     <p className="time">Yesterday</p>
//                                 </div>
//                                 <div className="text-message">
//                                     <p>“Now or never.”</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>





//                 <div className="right-container">

//                     <div className="header">
//                         <div className="img-text">
//                             <div className="user-img">
//                                 <img className="dp" src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
//                             </div>
//                             <h4>Leo<br /><span>Online</span></h4>
//                         </div>
//                         <div className="nav-icons">
//                             <li><i className="fa-solid fa-magnifying-glass"></i></li>
//                             <li><i className="fa-solid fa-ellipsis-vertical"></i></li>
//                         </div>
//                     </div>


//                     <div className="chat-container">
//                         <div className="message-box my-message">
//                             <p>I've been waiting to see that show asap!<br /><span>07:43</span></p>
//                         </div>
//                         <div className="message-box friend-message">
//                             <p>Ahh, I can't believe you do too!<br /><span>07:45</span></p>
//                         </div>
//                         <div className="message-box friend-message">
//                             <p>The trailer looks good<br /><span>07:45</span></p>
//                         </div>
//                         <div className="message-box friend-message">
//                             <p>I've been waiting to watch it!!<br /><span>07:45</span></p>
//                         </div>
//                         <div className="message-box my-message">
//                             <p>😐😐😐<br /><span>07:46</span></p>
//                         </div>
//                         <div className="message-box my-message">
//                             <p>Mee too! 😊<br /><span>07:46</span></p>
//                         </div>
//                         <div className="message-box friend-message">
//                             <p>We should video chat to discuss, if you're up for it!<br /><span>07:48</span></p>
//                         </div>
//                         <div className="message-box my-message">
//                             <p>Sure<br /><span>07:48</span></p>
//                         </div>
//                         <div className="message-box my-message">
//                             <p>I'm free now!<br /><span>07:48</span></p>
//                         </div>
//                         <div className="message-box friend-message">
//                             <p>Awesome! I'll start a video chat with you in a few.<br /><span>07:49</span></p>
//                         </div>
//                     </div>


//                     <div className="chatbox-input">
//                         <i className="fa-regular fa-face-grin"></i>
//                         <i className="fa-sharp fa-solid fa-paperclip"></i>
//                         <input type="text" placeholder="Type a message" />
//                         <i className="fa-solid fa-microphone"></i>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default MentorChat
// import React, { useState } from 'react';
// import '../Css/MentorChat.css';

// const MentorChat = () => {
//   // Define initial chat data with messages
//   const initialChats = [
//     {
//       id: 1,
//       name: 'Nowfal',
//       messages: [
//         { text: 'How are you?', isMine: false },
//         // Add more messages here
//       ],
//     },
//     {
//       id: 2,
//       name: 'Rohan',
//       messages: [
//         { text: 'I’ll be there.', isMine: false },
//         // Add more messages here
//       ],
//     },
//     // Add more chats here
//   ];

//   // State to track the active chat
//   const [activeChat, setActiveChat] = useState(null);

//   // State to manage chat messages dynamically
//   const [chatMessages, setChatMessages] = useState(initialChats);

//   // State to manage the message being typed
//   const [newMessage, setNewMessage] = useState('');

//   // State to manage the new chat input
//   const [newChatName, setNewChatName] = useState('');

//   // Function to handle chat click and set the active chat
//   const handleChatClick = (chatId) => {
//     setActiveChat(chatId);
//   };

//   // Function to send a message in the active chat
//   const sendMessage = () => {
//     if (activeChat !== null && newMessage.trim() !== '') {
//       const newMessages = [...chatMessages];
//       newMessages[activeChat - 1].messages.push({
//         text: newMessage,
//         isMine: true,
//       });
//       setChatMessages(newMessages);
//       setNewMessage('');
//     }
//   };

//   // Function to create a new chat
//   const createNewChat = () => {
//     if (newChatName.trim() !== '') {
//       const newChatId = chatMessages.length + 1;
//       const newChat = {
//         id: newChatId,
//         name: newChatName,
//         messages: [],
//       };
//       const newChats = [...chatMessages, newChat];
//       setChatMessages(newChats);
//       setNewChatName('');
//     }
//   };

//   return (
//     <>
//       <div className="background-green"></div>
//       <div className="main-container">
//         <div className="left-container">
//           <div className="header">
//             <div className="user-img">
//               <img
//                 className="dp"
//                 src="https://www.codewithfaraz.com/InstaPic.png"
//                 alt=""
//               />
//             </div>
//             <div className="nav-icons">
//               <li>
//                 <i className="fa-solid fa-users"></i>
//               </li>
//               <li>
//                 <i className="fa-solid fa-message"></i>
//               </li>
//               <li>
//                 <i className="fa-solid fa-ellipsis-vertical"></i>
//               </li>
//             </div>
//           </div>

//           <div className="notif-box">
//             <i className="fa-solid fa-bell-slash"></i>
//             <div className="notif-text">
//               <p>Get Notified of New Messages</p>
//               <a href="#">Turn on Desktop Notifications ›</a>
//             </div>
//             <i className="fa-solid fa-xmark"></i>
//           </div>

//           <div className="search-container">
//             <div className="input">
//               <i className="fa-solid fa-magnifying-glass"></i>
//               <input
//                 type="text"
//                 placeholder="Search or start new chat   "
//               />
//             </div>
//             <i className="fa-sharp fa-solid fa-bars-filter"></i>
//           </div>

//           <div className="chat-list">
//             {chatMessages.map((chat) => (
//               <div
//                 key={chat.id}
//                 className={`chat-box ${
//                   activeChat === chat.id ? 'active' : ''
//                 }`}
//                 onClick={() => handleChatClick(chat.id)}
//               >
//                 <div className="img-box">
//                   <img
//                     className="img-cover"
//                     src="https://www.codewithfaraz.com/InstaPic.png"
//                     alt=""
//                   />
//                 </div>
//                 <div className="chat-details">
//                   <div className="text-head">
//                     <h4>{chat.name}</h4>
//                     {/* Add last message timestamp */}
//                   </div>
//                   <div className="text-message">
//                     {/* Add last message text */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="new-chat">
//             <input
//               type="text"
//               placeholder="Enter a name for a new chat"
//               value={newChatName}
//               onChange={(e) => setNewChatName(e.target.value)}
//             />
//             <button onClick={createNewChat}>Create New Chat</button>
//           </div>
//         </div>

//         <div className="right-container">
//           <div className="header">
//             <div className="img-text">
//               <div className="user-img">
//                 <img
//                   className="dp"
//                   src="https://www.codewithfaraz.com/InstaPic.png"
//                   alt=""
//                 />
//               </div>
//               <h4>
//                 {/* Add user name */}
//                 <br />
//                 <span>Online</span>
//               </h4>
//             </div>
//             <div className="nav-icons">
//               <li>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//               </li>
//               <li>
//                 <i className="fa-solid fa-ellipsis-vertical"></i>
//               </li>
//             </div>
//           </div>

//           <div className="chat-container">
//             {activeChat !== null && (
//               <div>
//                 <h3>{chatMessages[activeChat - 1].name}</h3>
//                 {chatMessages[activeChat - 1].messages.map((message, index) => (
//                   <div
//                     key={index}
//                     className={`message-box ${
//                       message.isMine ? 'my-message' : 'friend-message'
//                     }`}
//                   >
//                     <p>{message.text}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="chatbox-input">
//             <i className="fa-regular fa-face-grin"></i>
//             <i className="fa-sharp fa-solid fa-paperclip"></i>
//             <input
//               type="text"
//               placeholder="Type a message"
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   sendMessage();
//                 }
//               }}
//             />
//             <i className="fa-solid fa-microphone"></i>
//             <button onClick={sendMessage}>Send</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MentorChat;


import React, { useState } from 'react';
import '../Css/MentorChat.css';
import { Add, Message, VerifiedUser } from '@material-ui/icons';
import { Send, SendCheckFill } from 'react-bootstrap-icons';

const MentorChat = () => {
  // State to manage the active chat
  const [activeChat, setActiveChat] = useState(null);

  // State to manage chat messages dynamically
  const [chatMessages, setChatMessages] = useState([
    // Define initial chat data with messages
    {
      id: 1,
      name: 'Nowfal',
      messages: [
        { text: 'How are you?', isMine: false },
        // Add more messages here
      ],
    },
    {
      id: 2,
      name: 'Rohan',
      messages: [
        { text: 'I’ll be there.', isMine: false },
        // Add more messages here
      ],
    },
    // Add more chats here
  ]);

  // State to manage the message being typed
  const [newMessage, setNewMessage] = useState('');

  // State to manage the new chat input
  const [newChatName, setNewChatName] = useState('');

  // Function to handle chat click and set the active chat
  const handleChatClick = (chatId) => {
    setActiveChat(chatId);
  };

  // Function to send a message in the active chat
  const sendMessage = () => {
    if (activeChat !== null && newMessage.trim() !== '') {
      const newMessages = [...chatMessages];
      newMessages[activeChat - 1].messages.push({
        text: newMessage,
        isMine: true,
      });
      setChatMessages(newMessages);
      setNewMessage('');
    }
  };

  // Function to create a new chat
  const createNewChat = () => {
    if (newChatName.trim() !== '') {
      const newChatId = chatMessages.length + 1;
      const newChat = {
        id: newChatId,
        name: newChatName,
        messages: [],
      };
      const newChats = [...chatMessages, newChat];
      setChatMessages(newChats);
      setNewChatName('');
    }
  };

  return (
    <>
    
      <div className="main-container">
        <div className="left-container">
          <div className="header">
            <div className="user-img">
              <img
                className="dp"
                src="https://www.codewithfaraz.com/InstaPic.png"
                alt=""
              />
            </div>
            <div className="nav-icons">
              <li>
                {/* <i className="fa-solid fa-users"></i> */}
                <VerifiedUser/>
              </li>
              <li>
                {/* <i className="fa-solid fa-message"></i> */}
                <Message/>
              </li>
              <li>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </li>
            </div>
          </div>

          {/* <div className="notif-box">
            <i className="fa-solid fa-bell-slash"></i>
            <div className="notif-text">
              <p>Get Notified of New Messages</p>
              <a href="#">Turn on Desktop Notifications ›</a>
            </div>
            <i className="fa-solid fa-xmark"></i>
          </div> */}
<div className='row'>
    <div className="col-lg-12">
    <div className="search-container">
            <div className="input">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search or start new chat   "
                value={newChatName}
                onChange={(e) => setNewChatName(e.target.value)}
              />
            </div>
            <Add onClick={createNewChat}/>
            {/* <i className="fa-sharp fa-solid fa-bars-filter" onClick={createNewChat}></i> */}
          </div>
    </div>
    </div>
         

          <div className="chat-list">
            {chatMessages.map((chat) => (
              <div
                key={chat.id}
                className={`chat-box ${
                  activeChat === chat.id ? 'active' : ''
                }`}
                onClick={() => handleChatClick(chat.id)}
              >
                <div className="img-box">
                  {/* Add profile image */}
                  <img  src="https://www.codewithfaraz.com/InstaPic.png"/>
                </div>
                <div className="chat-details">
                  <div className="text-head">
                    <h4>{chat.name}</h4>
                    {/* Add last message timestamp */}
                  </div>
                  <div className="text-message">
                    {/* Add last message text */}
                  </div>
                </div>
              </div>
            ))}
          </div>
{/* 
          <div className="new-chat">
            <input
              type="text"
              placeholder="Enter a name for a new chat"
              value={newChatName}
              onChange={(e) => setNewChatName(e.target.value)}
            />
            <button onClick={createNewChat}>Create New Chat</button>
          </div> */}
        </div> 

        <div className="right-container">
          <div className="header">
            <div className="img-text">
              <div className="user-img">
                <img
                  className="dp"
                  src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <h5>
                {/* Add user name */}
                {/* {chatMessages[activeChat - 1].name} */}

                <br />
                <span>Online</span>
              </h5>
            </div>
            <div className="nav-icons">
              <li>
                <i className="fa-solid fa-magnifying-glass"></i>
              </li>
              <li>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </li>
            </div>
          </div>

          <div className="chat-container">
            {activeChat !== null && (
              <div>
                {/* <h3>{chatMessages[activeChat - 1].name}</h3> */}
                {chatMessages[activeChat - 1].messages.map((message, index) => (
                  <div
                    key={index}
                    className={`message-box ${
                      message.isMine ? 'my-message' : 'friend-message'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="chatbox-input">
            {/* <i className="fa-regular fa-face-grin"></i> */}
            <Add style={{"marginLeft":"10px"}}/>
            {/* <i className="fa-sharp fa-solid fa-paperclip"></i> */}
            <input
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendMessage();
                }
              }}
            />
            {/* <i className="fa-solid fa-microphone"></i> */}
           <Send onClick={sendMessage} style={{"color":"green","cursor":"pointer"}}/>
            {/* <button onClick={sendMessage}>Send</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorChat;


