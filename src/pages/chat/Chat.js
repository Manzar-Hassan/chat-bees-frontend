import React, { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import { Button, Container, TextField, Typography } from "@mui/material";

// const ENDPOINT = "http://localhost:5000";

const Chat = () => {
  const socket = socketIo();
  const [sentMsg, setSentMsg] = useState("");
  const [receivedMessages, setReceivedMessages] = useState("");

  const sendMsg = () => {
    socket.emit("sentMessage", sentMsg);
    setSentMsg("");
  };

  useEffect(() => {
    socket.on("receivedMsg", (data) => setReceivedMessages(data));
  }, [socket]);

  return (
    <>
      <Container
        sx={{
          // display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1,
          display: "none",
        }}
      >
        <TextField
          type="text"
          size="small"
          variant="outlined"
          label="message"
          value={sentMsg}
          onChange={(e) => setSentMsg(e.target.value)}
        />
        <Button variant="contained" size="small" onClick={sendMsg}>
          send
        </Button>
        <Typography mt={5}>Message: {receivedMessages}</Typography>
      </Container>
    </>
  );
};

export default Chat;
