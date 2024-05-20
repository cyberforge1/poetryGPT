// MessageInput.tsx

import React, { useState } from 'react';
import InputBar from '../InputBar/InputBar';
import SquareButton from '../SquareButton/SquareButton';
import './MessageInput.scss'; // Link to the stylesheet

interface Props {
  onSendMessage: (message: string) => void;
  isAnimating: boolean; // New prop to indicate if animation is in progress
}

const MessageInput: React.FC<Props> = ({ onSendMessage, isAnimating }) => {
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
    if (event.key === 'Enter' && !isLoading && !isAnimating) { // Check both loading and animating state
      handleSend();
    }
  };

  return (
    <div className="messageInput">
      <InputBar 
        input={input}
        onInputChange={handleInputChange}
        onKeyPress={handleKeyPress}
        isLoading={isLoading || isAnimating} // Disable input bar while animating
      />
      <SquareButton onClick={handleSend} isLoading={isLoading || isAnimating} /> {/* Disable button while animating */}
    </div>
  );
};

export default MessageInput;
