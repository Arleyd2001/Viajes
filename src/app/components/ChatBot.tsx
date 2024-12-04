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
  "actividades recomendadas": "Te recomendamos actividades como Paddle Surf, snorkel en la Playa de Ses Salines y visitar los mercados hippies de Punta Arabí y Las Dalias. Para quienes buscan adrenalina, actividades como paracaidismo y bungee jumping son imperdibles.",
  
  "costos estimados": "Nuestros paquetes comienzan desde 8,995,290 COP por persona, incluyendo vuelo ida y vuelta desde Medellín, alojamiento y actividades básicas. Los costos varían según el tamaño del grupo y las actividades seleccionadas. ¿Quieres un desglose detallado?",
  
  "opciones de transporte": "Ofrecemos transporte cómodo y seguro hacia destinos clave como Dalt Vila, playas, y parques naturales. Para grupos pequeños (3 personas), el costo promedio es de 133,710 COP por trayecto.",
  
  "alojamiento": "Contamos con opciones en hoteles de 3 estrellas para grupos de 3, 6 o 10 personas. Los costos varían desde 236,221 COP por persona por noche en un grupo grande. ¿Te interesa conocer opciones específicas?",
  
  "viajar con niños": "Si viajas con niños, te recomendamos actividades familiares como el tour a Formentera con alquiler de bicicletas o visitas al Parque Natural de las Salinas. También podemos adaptar cenas en restaurantes locales y actividades culturales.",
  
  "emergencia médica": "En caso de emergencia médica, contamos con un servicio de asesoría 24/7. Además, podemos conectarte con hospitales y clínicas en la isla. ¿Prefieres que te enviemos una lista de contactos locales de salud?",
  
  "fiestas y vida nocturna": "Ibiza es famosa por su vida nocturna. Te recomendamos cenas y fiestas en Pacha Ibiza o Ushuaïa Ibiza Beach Hotel. Las entradas cuestan desde 178,280 COP por persona. ¡Podemos asegurarte acceso VIP si lo deseas!",
  
  "relajación": "Si buscas relajarte, nada mejor que una visita a la playa de Talamanca o un día explorando Formentera. También ofrecemos cenas tranquilas en restaurantes locales para cerrar tu viaje con tranquilidad.",
  
  "deportes extremos": "Para los amantes de la adrenalina, ofrecemos bungee jumping, paracaidismo y excursiones de buceo. Los costos varían desde 311,990 COP para el tour en barco hasta 1,114,250 COP para el paracaidismo.",
  
  "cultura y arte": "Te recomendamos explorar el Museo de Arte Contemporáneo de Ibiza y el casco antiguo de Dalt Vila. Son experiencias únicas que combinan historia y arte moderno. Los costos son accesibles, desde 44,570 COP por persona para el museo.",
  
  "mercados locales": "Los mercados hippies como Punta Arabí y Las Dalias son ideales para explorar artesanías y cultura local. Podemos gestionar transporte por 133,710 COP por trayecto para grupos pequeños. ¿Te interesan detalles sobre los horarios?",
  
  "presupuesto grupal": "Viajar en grupo es más económico. Los paquetes para 10 personas comienzan desde 8,995,290 COP por persona, incluyendo vuelo, hotel, transporte y actividades esenciales.",
  
  "personalización de itinerarios": "Podemos adaptar tu itinerario según tus intereses. ¿Quieres más fiestas, deportes extremos o tiempo para relajarte? ¡Solo dinos qué prefieres y lo ajustamos!",
  
  "comida y gastronomía": "Ofrecemos paquetes para cenas en restaurantes icónicos como Can Tina Ibiza o Mumak. Los costos van desde 133,710 COP por persona dependiendo del tamaño del grupo.",
  
  "experiencias románticas": "Para parejas, recomendamos una cena privada en Formentera, seguida de una excursión en barco al atardecer. También podemos organizar fiestas exclusivas en yates.",
  
  "día perfecto en Ibiza": "Un día ideal incluye relajación en Playa de Ses Salines por la mañana, deportes acuáticos por la tarde, y una cena seguida de una fiesta en un club icónico como Pacha. ¡Perfecto para disfrutar Ibiza al máximo!"
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
        quickReplies: ['actividades recomendadas', 'costos estimados', 'opciones de transporte']
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
          <div className="chatbot-header bg-[#de2a26] text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="\icono.jpeg" 
                alt="" 
                className="w-8 h-8 mr-2" 
              />
              <h2 className="text-xl font-bold">Party & Sun Ibiza</h2>
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
                    ? 'bg-[#de2a26] text-white' 
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
                        className="bg-red-600 text-white px-2 py-1 rounded mr-2 mb-2 text-sm"
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
              className="bg-[#de2a26] text-white p-3 rounded-br-xl hover:bg-red-700 focus:outline-none"
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