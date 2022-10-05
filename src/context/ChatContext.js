import { createContext, useState } from "react";
import { toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChatContext = createContext();

export const registerUserLink = "http://localhost:5000/register";
export const loginUserLink = "http://localhost:5000/login";
export const chatLink = "http://localhost:5000/chat";
export const roomIdLink = "http://localhost:5000/chatRoomId";
export const roomConversationsLink = "http://localhost:5000/roomConversations";
export const roomAddMessageLink = "http://localhost:5000/addMessage";

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
