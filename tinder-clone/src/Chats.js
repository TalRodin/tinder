import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Mark Rodin"
            message='Hello'
            timestamp="40 seconds ago"
            profilePic="..."
            />
            <Chat
            name="Alyona Rodin"
            message='Hello'
            timestamp="40 seconds ago"
            profilePic="..."
            />
            <Chat
            name="Zach Rodin"
            message='Hello'
            timestamp="40 seconds ago"
            profilePic="..."
            />
            <Chat
            name="Joshua Rodin"
            message='Hello'
            timestamp="40 seconds ago"
            profilePic="..."
            />
        </div>
    )
}

export default Chats
