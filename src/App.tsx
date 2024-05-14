/* App.tsx */

import React from 'react';
import './App.scss'; // Main styles, if needed
import ChatWindow from './components/ChatWindow/ChatWindow';

const App: React.FC = () => {
    return (
        <div className="app">
            <ChatWindow />
        </div>
    );
};

export default App;