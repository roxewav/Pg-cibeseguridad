// ChatbotConfig.js
import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";

const ChatbotConfig = {
  botName: "CiberBot",
  initialMessages: [
    createChatBotMessage("¡Hola! Soy CiberBot, ¿en qué puedo ayudarte?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#3182ce",
    },
    chatButton: {
      backgroundColor: "#3182ce",
    },
  },
  widgets: [], // Aquí puedes agregar widgets en el futuro
  actionProvider: ActionProvider,
};

export default ChatbotConfig;
