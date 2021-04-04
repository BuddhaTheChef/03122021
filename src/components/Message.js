import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import '../App.css';

function Message({message, username}) {
    const isUser = username === message.username;
    return (
        <div className={`message ${isUser && 'message-user'}`}>
        <Card className={isUser ? "message-userCard" : "message-guestCard"}>
            <CardContent>
                <Typography style={{fontSize: '17px'}} color="whitesmoke" variant="h5" component="h2">
                    {message.username}:{message.text}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default Message
