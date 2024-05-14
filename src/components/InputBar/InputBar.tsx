// InputBar.tsx

import React, { useState } from 'react';
import './InputBar.scss';
import SquareButton from '../SquareButton/SquareButton';  // Ensure path is correct

interface Props {
  onSendMessage: (message: string) => void;
}

const InputBar: React.FC<Props> = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);  // State to track loading

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSend = async () => {
    if (input.trim()) {
      setLoading(true);  // Start loading
      await onSendMessage(input);  // Assuming this is asynchronous
      setInput('');  // Clear input right after message is sent
      setLoading(false);  // Stop loading
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isLoading) {
      handleSend();
    }
  };

  return (
    <div className="inputBar">
      <input 
        className="inputField"
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Message PoetryGPT..."
        disabled={isLoading}
      />
      <SquareButton onClick={handleSend} isLoading={isLoading} />
    </div>
  );
};

export default InputBar;
