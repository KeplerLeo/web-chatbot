import { creatingPassword, creatingUser } from "../utils/localStorageUtil";


class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      this.creatingUser = creatingUser;
      this.creatingPassword = creatingPassword;
    }
  
    parse(message) {
      const initialKeywords = ["hello", "good", "i want"];
      const lowerCase = message.toLowerCase();

      if (initialKeywords.some((keyword) => lowerCase.includes(keyword))) {
        this.actionProvider.greet();
      }
      
      if (this.state.current === "greet") {
        this.creatingUser(lowerCase);
        this.actionProvider.handleUsername(message);
      }

      if (this.state.current === "password") {
        const username = this.creatingPassword(message);
        this.actionProvider.handlePassword(username);
      }
      
    }


  }
  
  export default MessageParser;