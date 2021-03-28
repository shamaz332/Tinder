import React from 'react'
import Chat from "./Chat"
import "./Chat.css"
const ChatView = () => {
    return (
        <div className="chats">
            <Chat 
            name = "Shamaz"
            message="How are you"
            timestamp = "35 minutes ago"
            profilePic = ""
            />
        </div>
    )
}

export default ChatView
