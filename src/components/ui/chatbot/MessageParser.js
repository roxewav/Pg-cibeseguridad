class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hola") || lowerCaseMessage.includes("buenos días")) {
      this.actionProvider.handleWelcome();
    } else if (
      lowerCaseMessage.includes("ciberacoso") ||
      lowerCaseMessage.includes("ciberbullying")
    ) {
      this.actionProvider.handleCiberacoso();
    } else if (
      lowerCaseMessage.includes("denuncia") ||
      lowerCaseMessage.includes("denunciar")
    ) {
      this.actionProvider.handleDenuncia();
    } else if (
      lowerCaseMessage.includes("ayuda emocional") ||
      lowerCaseMessage.includes("apoyo")
    ) {
      this.actionProvider.handleEmotionalSupport();
    } else if (lowerCaseMessage.includes("consejo") || lowerCaseMessage.includes("protegerme")) {
      this.actionProvider.handleConsejos();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
