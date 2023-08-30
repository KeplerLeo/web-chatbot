import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import './App.css';
import config from "./configs/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;