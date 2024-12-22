import React, { useState } from "react";
import { FaComments } from "react-icons/fa";
import "react-chatbot-kit/build/main.css";
import { Chatbot } from "react-chatbot-kit";
import ChatbotConfig from "./chatbot/ChatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function Chatbott() {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div>
      {/* Botón para abrir/cerrar el chatbot */}
      {!chatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          <FaComments size={24} />
        </button>
      )}

      {/* Ventana del Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 bg-white w-80 max-h-[500px] flex flex-col border border-gray-200 rounded-lg shadow-lg">
          <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-2">
            <h3 className="text-lg font-bold">ChatBot</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-300 transition-all"
            >
              ✖
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <Chatbot
              config={ChatbotConfig}       // Usar el nombre correcto aquí
              messageParser={MessageParser} // Usar el parser correcto
              actionProvider={ActionProvider} // Usar el proveedor correcto
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbott;
