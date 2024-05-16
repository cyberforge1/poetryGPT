// MessageInput.tsx

import React, { useState } from 'react';
import InputBar from '../InputBar/InputBar';
import SquareButton from '../SquareButton/SquareButton';
import './MessageInput.scss'; // Link to the stylesheet

interface Props {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<Props> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSend = async () => {
    if (input.trim()) {
      setLoading(true);
      const messageToSend = input;
      setInput(''); // Reset the input field before sending the message
      await onSendMessage(messageToSend);
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  return (
    <div className="messageInput">
      <InputBar 
        input={input}
        onInputChange={handleInputChange}
        onKeyPress={handleKeyPress}
        isLoading={isLoading}
      />
      <SquareButton onClick={handleSend} isLoading={isLoading} />
    </div>
  );
};

export default MessageInput;