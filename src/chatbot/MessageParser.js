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

      if (lowerCase === "goodbye") {
        this.actionProvider.handleGoodbye();
        return;
      }

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

      if (this.state.current === "help" && lowerCase === "loan") {
        this.actionProvider.handleLoan();
      } else if (this.state.current === "help") {
        this.actionProvider.handleUnknown();
      }

      if (this.state.current === "loanOption") {
        this.actionProvider.handleLoanOption(lowerCase);
      }
      
    }


  }
  
  export default MessageParser;