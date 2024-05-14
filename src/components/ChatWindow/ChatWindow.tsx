/* ChatWindow.tsx */

import React, { useState } from 'react';
import MessageList from '../MessageList/MessageList';
import InputBar from '../InputBar/InputBar';
import FooterMessage from '../FooterMessage/FooterMessage'; // Import the new component
import './ChatWindow.scss';
import { generateCompletion } from '../../services/openaiService';
const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<{ id: number; text: string; isUser: boolean }[]>([]);

    const handleSendMessage = (newMessage: string, isUser: boolean) => {
        const newId = messages.length + 1; // Simple incrementing ID
        setMessages(messages => [...messages, { id: newId, text: newMessage, isUser }]);
    };

    const handleUserMessage = async (newMessage: string) => {
        handleSendMessage(newMessage, true); // Send user message

        try {
            const aiResponse = await generateCompletion(newMessage); // Get AI response
            console.log('AI response:', aiResponse)
            animateAiResponse(aiResponse); // Animate AI response letter by letter
        } catch (error) {
            console.error('Failed to fetch AI response:', error);
            handleSendMessage('Failed to fetch response from AI.', false);
        }
    };

    const animateAiResponse = (response: string) => {
    const totalLength = response.length;
    let currentLength = 0;

    // Add an initial empty message for the AI response
    setMessages(messages => [...messages, { id: messages.length + 1, text: '', isUser: false }]);

    const intervalId = setInterval(() => {
        if (currentLength < totalLength) {
            const nextChar = response[currentLength];
            currentLength++;
            setMessages(messages => {
                const lastMessage = messages[messages.length - 1];
                if (lastMessage && !lastMessage.isUser) {
                    const updatedMessages = messages.slice(0, -1);
                    updatedMessages.push({ ...lastMessage, text: lastMessage.text + nextChar });
                    return updatedMessages;
                }
                return messages;
            });
        } else {
            clearInterval(intervalId);
        }
    }, 50); // Adjust typing speed by changing delay here
};

    const clearMessages = () => {
        setMessages([]); // Clear all messages
    };

    return (
        <div className="chatWindow">
            <div className="controlPanel">
            <button className="clearMessagesButton" onClick={clearMessages}>
                    <i className="fa-solid fa-pen-to-square fa-lg"></i>
                </button>
                <span className="poetryGPTLabel">PoetryGPT</span>
            </div>
            <MessageList messages={messages} />
            <InputBar onSendMessage={handleUserMessage} />
            <FooterMessage /> {/* Place the FooterMessage component here */}
        </div>
    );
};

export default ChatWindow;