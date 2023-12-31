import React, { useState } from 'react';
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    e.preventDefault();

    // メッセージが空の場合、送信しない
    if (message.trim() === "") return;

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMessage("");
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            type="text"
            placeholder="メッセージを入力してください"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button type="submit"><SendIcon /></Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
