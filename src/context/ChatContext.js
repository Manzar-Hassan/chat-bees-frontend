import { createContext, useState } from "react";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatContext = createContext();

export const registerUserLink = "https://chat-bees-backend.herokuapp.com/register";
export const loginUserLink = "https://chat-bees-backend.herokuapp.com/login";
export const chatLink = "https://chat-bees-backend.herokuapp.com/chat";
export const roomIdLink = "https://chat-bees-backend.herokuapp.com/chatRoomId";
export const roomConversationsLink = "https://chat-bees-backend.herokuapp.com/roomConversations";
export const roomAddMessageLink = "https://chat-bees-backend.herokuapp.com/addMessage";

export const initialRegisterValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

export const initialLoginValues = {
  username: "",
  password: "",
};

export let initialChat = {
  roomId: "",
  sender: "",
  receiver: "",
  message: "",
  time: new Date(),
};

export const ChatContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");
  const [registerDetails, setRegisterDetails] = useState(initialRegisterValues);
  const [loginDetails, setLoginDetails] = useState(initialLoginValues);
  const [conversations, setConversations] = useState([]);
  const [roomId, setRoomId] = useState(null);
  const [users, setUsers] = useState([]);

  const errorToast = (msg) => {
    toast.error(msg, {
      transition: Flip,
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const successToast = (msg) =>
    toast.success(msg, {
      transition: Flip,
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <ChatContext.Provider
      value={{
        isLoginPage,
        setIsLoginPage,
        isloggedIn,
        setIsLoggedIn,
        errorToast,
        successToast,
        registerDetails,
        setRegisterDetails,
        loading,
        setLoading,
        loginDetails,
        setLoginDetails,
        loggedInUser,
        setLoggedInUser,
        roomId,
        setRoomId,
        users,
        setUsers,
        conversations,
        setConversations,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
