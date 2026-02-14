
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAIPrompt = async (userInput: string) => {
  if (!API_KEY) return "Desculpe, o assistente de IA está em manutenção.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é o Sommelier de Cookies da Doceline. 
      Baseado na mensagem do cliente: "${userInput}", 
      sugira qual dos nossos produtos (Cookies: Tradicional, Chocolate, Red Velvet, Dark, Nutella, Ovomaltine, Red Velvet Recheado, Alpino; 
      Brownies: Tradicional, Ovomaltine, Nutella) combina mais com o humor ou preferência dele. 
      Seja caloroso, amigável e use emojis. Responda em Português do Brasil de forma concisa.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hm, algo deu errado na cozinha da IA. Que tal experimentar nosso clássico de chocolate?";
  }
};
