class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  updateStateCurrent(current) {
    this.setState((prevState) => ({
      ...prevState,
      current: current,
    }));
  }

   greet() {
      const greetingMessage = this.createChatBotMessage("To better serve you I need to create your account, what is your username?")
      this.updateChatbotState(greetingMessage)
      this.updateStateCurrent("greet");
    }

    handleUsername(username) {
      const message = this.createChatBotMessage(`Thanks ${username}, what is your password?`)
      this.updateChatbotState(message)
      this.updateStateCurrent("password");
    }

    handlePassword(username) {
      const message = this.createChatBotMessage(`Thanks ${username}, your account has been created! Now how can I help you?`)
      this.updateChatbotState(message)
      this.updateStateCurrent("help");
    }

    handleLoan() {
      const message = this.createChatBotMessage(
        `I can help you with that, please select one option`,
        {
          widget: "loan",
        }
      )
      this.updateChatbotState(message)
    }

    handleUnknown() {
      const message = this.createChatBotMessage(`Sorry, i can't help you with that. Please try again.`)
      this.updateChatbotState(message)
    }
 }
 
 export default ActionProvider;