import { createChatBotMessage } from "react-chatbot-kit";
import LoanOptions from "../components/LoanOptions";
import LoanLink from "../components/LoanLink";
import ExportMessages from "../components/ExportMessages";

const config = {
  initialMessages: [createChatBotMessage(`Hello`)],
  botName: "ChatBot",
  
  widgets: [
    {
      widgetName: "loan",
      widgetFunc: (props) => LoanOptions(props),
    },
    {
      widgetName: "loanLink",
      widgetFunc: (props) => LoanLink(props),
    },
    {
      widgetName: "goodbye",
      widgetFunc: (props) => ExportMessages(props),
    }
  ],
}

export default config