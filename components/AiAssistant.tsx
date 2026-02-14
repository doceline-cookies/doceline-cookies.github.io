
import React, { useState } from 'react';
import { getAIPrompt } from '../services/geminiService';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([
    { role: 'ai', content: 'Olá! Sou seu Sommelier de Doces Doceline. Qual sabor está desejando hoje? Clássico crocante ou um recheado especial?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    const aiResponse = await getAIPrompt(userMsg);
    setMessages(prev => [...prev, { role: 'ai', content: aiResponse || '' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-[#FAF3E0] rounded-3xl shadow-2xl w-80 sm:w-96 border border-[#F1E5D1] flex flex-col max-h-[500px] overflow-hidden">
          <div className="p-5 bg-[#4A2C21] text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#B16E41] rounded-full flex items-center justify-center text-xl shadow-inner">👩‍🍳</div>
              <div>
                <h3 className="font-bold leading-tight">Sommelier Doceline</h3>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-semibold">Cozinha Digital</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FDF4E3]/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-[#B16E41] text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-[#4A2C21] shadow-sm border border-[#F1E5D1] rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-[#F1E5D1] animate-pulse flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-[#B16E41]/40 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#B16E41]/60 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-[#B16E41]/40 rounded-full"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-[#F1E5D1] bg-[#FAF3E0] flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ex: 'Algo com Nutella...'"
              className="flex-1 bg-[#FDF4E3] border border-[#F1E5D1] rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#B16E41] outline-none"
            />
            <button 
              onClick={handleSend}
              className="bg-[#B16E41] text-white p-2.5 rounded-xl hover:bg-[#8D5734] transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#4A2C21] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center gap-3 group border-4 border-[#FDF4E3]"
        >
          <span className="hidden group-hover:block whitespace-nowrap font-bold text-sm">Sommelier Doceline</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;
