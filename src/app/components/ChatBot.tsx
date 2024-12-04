"use client";

import React, { useState, useEffect, useRef } from 'react';

// Define types for messages and responses
interface Message {
  text: string;
  sender: 'user' | 'bot';
  quickReplies?: string[];
}

interface AgricultureResponses {
  [key: string]: string;
}

const agricultureResponses: AgricultureResponses = {
  "plagas": "Para controlar plagas, combina técnicas como el manejo integrado de plagas (MIP), trampas biológicas, uso de insectos benéficos y pesticidas naturales como el aceite de neem.",
  "innovacion agricola": "Adopta innovaciones como sensores de humedad, inteligencia artificial para el análisis de datos de cultivo y maquinaria autónoma para mejorar la productividad."
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [isNameAsked, setIsNameAsked] = useState<boolean>(false);
  const [isChatbotVisible, setIsChatbotVisible] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  // Function to get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Buenos días";
    } else if (hour >= 12 && hour < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  };

  useEffect(() => {
    const greeting = getGreeting();
    const botMessage: Message = {
      text: `${greeting}, antes de empezar, ¿cómo te llamas?`, 
      sender: 'bot'
    };
    setMessages([botMessage]);
    setIsNameAsked(true);
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = { text: inputMessage, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const getBotResponse = (input: string): Message => {
    if (!userName) {
      setUserName(input.trim());
      return { 
        text: `¡Encantado de conocerte, ${input.trim()}! ¿En qué puedo ayudarte hoy?`,
        sender: 'bot',
        quickReplies: ['Plagas', 'Suelo', 'Agua']
      };
    }

    const lowercaseInput = input.toLowerCase();

    if (lowercaseInput === 'adios') {
      return { 
        text: `Hasta luego, ${userName}. ¡Que tengas un buen día!`,
        sender: 'bot',
        quickReplies: [] // No quick replies
      };
    }
    
    // Keyword recognition
    for (const key in agricultureResponses) {
      if (lowercaseInput.includes(key)) {
        // Filter quick replies to exclude the current keyword
        const remainingResponses = Object.keys(agricultureResponses).filter(
          k => k !== key && k !== 'gracias' && k !== 'adios'
        );

        // Select 3 random quick replies
        const newQuickReplies = remainingResponses
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        return { 
          text: `${userName}, ${agricultureResponses[key]}`,
          sender: 'bot',
          quickReplies: newQuickReplies
        };
      }
    }

    // Random responses when input is not understood
    const randomResponses = [
      "Interesante pregunta. ¿Podrías reformularla?",
      "No estoy seguro de entender. ¿Puedes ser más específico?",
      "Hmm, eso es nuevo para mí. ¿Quieres que hablemos de otro tema agrícola?",
      "Parece que nos hemos salido un poco del tema. ¿Qué tal si hablamos de plagas o riego?",
      "Esa es una perspectiva interesante. ¿Puedes explicarme más?"
    ];

    const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];

    const remainingResponses = Object.keys(agricultureResponses).filter(
      k => k !== 'gracias' && k !== 'adios'
    );
    const newQuickReplies = remainingResponses
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    newQuickReplies.push('adios');

    return { 
      text: `${userName}, ${randomResponse}`,
      sender: 'bot',
      quickReplies: newQuickReplies
    };
  };

  const handleQuickReply = (reply: string) => {
    const userMessage: Message = { text: reply, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
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
          <div className="chatbot-header bg-[#1f3adb] text-white p-3 flex items-center justify-between">
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
                    ? 'bg-[#1f3adb] text-white' 
                    : 'bg-[#e3f5f9] text-black'  
                  }`}
                >
                  {message.text}
                </div>
                {message.quickReplies && (
                  <div className="quick-replies mt-2 flex flex-wrap justify-center">
                    {message.quickReplies.map((reply, replyIndex) => (
                      <button
                        key={replyIndex}
                        onClick={() => handleQuickReply(reply)}
                        className="bg-blue-700 text-white px-2 py-1 rounded mr-2 mb-2 text-sm"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
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
              className="bg-[#1f3adb] text-white p-3 rounded-br-xl hover:bg-blue-700 focus:outline-none"
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