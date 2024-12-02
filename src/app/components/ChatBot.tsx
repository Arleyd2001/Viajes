"use client";

import React, { useState, useEffect, useRef } from 'react';

// Define type for messages
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

// Define type for agriculture responses
interface AgricultureResponses {
  [key: string]: string;
}

// Agriculture responses object
const agricultureResponses: AgricultureResponses = {
  "hola": "¡Hola! Soy Don Toño, tu asistente virtual en temas agrícolas. ¿En qué puedo ayudarte hoy?",
  "plagas": "Para controlar plagas, combina técnicas como el manejo integrado de plagas (MIP), trampas biológicas, uso de insectos benéficos y pesticidas naturales como el aceite de neem.",
  // ... (rest of the responses remain the same)
  "innovacion agricola": "Adopta innovaciones como sensores de humedad, inteligencia artificial para el análisis de datos de cultivo y maquinaria autónoma para mejorar la productividad."
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isChatbotVisible, setIsChatbotVisible] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = { text: inputMessage, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    setTimeout(() => {
      const botResponse: Message = { text: getBotResponse(inputMessage), sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const getBotResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    for (const key in agricultureResponses) {
      if (lowercaseInput.includes(key)) {
        return agricultureResponses[key];
      }
    }
    return "Interesante pregunta. Como asistente en temas agrícolas, puedo ayudarte con información sobre gestión de plagas, conservación del agua, y técnicas de cultivo sostenible. ¿Podrías reformular tu pregunta o especificar más sobre qué área de la agricultura te interesa?";
  };

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <>
      <div 
        onClick={toggleChatbot} 
        className="chatbot-toggle fixed bottom-5 right-5 bg-gray-700 text-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer shadow-lg z-50"
      >
        <span className="text-2xl">💬</span>
      </div>
      
      {isChatbotVisible && (
        <div className="chatbot-container fixed bottom-24 right-5 w-96 h-[500px] bg-[#f7f9f1] rounded-xl shadow-xl overflow-hidden flex flex-col z-50">
          <div className="chatbot-header bg-[#4a773c] text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/dontoño.png" 
                alt="Don Toño" 
                className="w-8 h-8 mr-2" 
              />
              <h2 className="text-xl font-bold">Don Toño</h2>
            </div>
            <button 
              onClick={toggleChatbot} 
              className="text-2xl hover:text-gray-200"
            >
              &times;
            </button>
          </div>
          
          <div className="chatbot-messages flex-1 p-3 overflow-y-auto">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block p-3 rounded-xl ${
                    message.sender === 'user' 
                      ? 'bg-[#4a773c] text-white' 
                      : 'bg-[#e3f9e5] text-black'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input border-t border-gray-200 flex">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu mensaje..."
              className="flex-1 p-3 border-none rounded-bl-xl focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#4a773c] text-white p-3 rounded-br-xl hover:bg-green-700 focus:outline-none"
            >
              <span className="text-xl">➤</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;