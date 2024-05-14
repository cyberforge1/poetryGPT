/* MessageList.tsx */

import React from 'react';
import Message from '../Message/Message';
import './MessageList.scss';

interface MessageProps {
    id: number;
    text: string;
    isUser: boolean;
}

interface Props {
    messages: MessageProps[];
}

const MessageList: React.FC<Props> = ({ messages }) => {
    return (
        <div className="messageList">
            {messages.map((message) => (
                <Message key={message.id} text={message.text} isUser={message.isUser} />
            ))}
        </div>
    );
};

export default MessageList;