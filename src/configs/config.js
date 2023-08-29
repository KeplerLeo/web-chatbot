import { createChatBotMessage } from "react-chatbot-kit";
import LoanOptions from "../components/LoanOptions";

const config = {
  initialMessages: [createChatBotMessage(`Hello`)],
  botName: "ChatBot",
  widgets: [
    {
      widgetName: "loan",
      widgetFunc: (props) => LoanOptions(props),
    }
  ],
}

export default config