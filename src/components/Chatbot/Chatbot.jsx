import { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

export default function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentResponse, setCurrentResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const responseRef = useRef(null);

  // Scroll to bottom when response updates
  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [currentResponse]);

  // Simple markdown parser
  const parseMarkdown = (text) => {
    return text
      .replace(/### (.*$)/gim, '<h3>$1</h3>')
      .replace(/## (.*$)/gim, '<h2>$1</h2>')
      .replace(/# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em>$1</em>')
      .replace(/^\* (.*)$/gim, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>')
      .replace(/\n\n/gim, '</p><p>')
      .replace(/\n/gim, '<br>')
      .replace(/^(.*)$/gim, '<p>$1</p>')
      .replace(/<p><\/p>/gim, '')
      .replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/gim, '$1')
      .replace(/<p>(<ul>.*<\/ul>)<\/p>/gims, '$1');
  };

  const sendText = async (buttonText = null) => {
    const userInput = buttonText || inputValue.trim();
    if (!userInput) return;

    setIsLoading(true);
    setInputValue('');
    
    // Add user message to current response
    setCurrentResponse(`<div class="user-message"><strong>You:</strong> ${userInput}</div>`);

    const requestBody = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are an expert-level software engineer named Your Mentor with over 10 years of real-world experience in the tech industry. 
You are also a friendly and professional mentor for undergraduate students who are learning software engineering.

Your role is to guide them clearly and patiently with step-by-step explanations, beginner-friendly language, and practical advice.

Always structure your responses using headings, bullet points, and numbered steps when needed.
Make your answers clear, concise, supportive, and encouraging. Avoid jargon unless explained simply.

Only respond to the user's question, and give actionable advice.

Now answer the following question from an undergraduate student:`
            }
          ]
        },
        {
          role: "user",
          parts: [{ text: userInput }]
        }
      ]
    };

    try {
      // Replace YOUR_API_KEY with your actual Google AI API key
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDRG8u9EJBPG5zCQn1WHmfJ3gqJ8faWCGk",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      const aiResponse = result?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response received";
      
      // Create new chat entry
      const newChat = {
        id: Date.now(),
        question: userInput,
        answer: aiResponse,
        timestamp: new Date().toISOString(),
        preview: aiResponse.substring(0, 100) + (aiResponse.length > 100 ? '...' : '')
      };

      // Update chat history (keep last 20)
      setChatHistory(prev => [newChat, ...prev.slice(0, 19)]);
      
      // Update current response with AI answer
      setCurrentResponse(`
        <div class="user-message"><strong>You:</strong> ${userInput}</div>
        <div class="ai-response"><strong>🎓 Your Mentor:</strong><br>${parseMarkdown(aiResponse)}</div>
      `);

    } catch (error) {
      console.error('Error:', error);
      setCurrentResponse(`
        <div class="user-message"><strong>You:</strong> ${userInput}</div>
        <div class="error-message">❌ Error: ${error.message}<br>
        <small>Make sure to replace YOUR_API_KEY with your actual Google AI API key.</small></div>
      `);
    } finally {
      setIsLoading(false);
    }
  };

  const loadChat = (chat) => {
    setCurrentResponse(`
      <div class="user-message"><strong>You:</strong> ${chat.question}</div>
      <div class="ai-response"><strong>🎓 Your Mentor:</strong><br>${parseMarkdown(chat.answer)}</div>
    `);
  };

  const clearChats = () => {
    setChatHistory([]);
    setCurrentResponse('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading && inputValue.trim()) {
      sendText();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="header">
        <h1>🎓 Mentory</h1>
        <p>Your Personal Software Engineering Mentor,Get expert guidance for your tech career journey</p>
        
        <div className="mentor-card">
            
            <div className="mentor-info">
              
              <ul>
                <li>Career paths in tech</li>
                <li>Programming languages</li>
                <li>Interview preparation</li>
                <li>Salary negotiations</li>
                <li>Tech industry trends</li>
              </ul>
            </div>
          </div>
      </div>

      <div className="main-container">
        <div className="previous-chats">
          <div className="chats-header">
            <h3>Previous Chats</h3>
            <button className="clear-chats" onClick={clearChats}>Clear</button>
          </div>
          <div className="chats-list">
            {chatHistory.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
                <p>No previous chats yet.</p>
                <p>Start a conversation!</p>
              </div>
            ) : (
              chatHistory.map((chat) => (
                <div key={chat.id} className="chat-item" onClick={() => loadChat(chat)}>
                  <h4>{chat.question}</h4>
                  <p>{chat.preview}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="chat-container">
          
          
          <div 
            className="response-area" 
            ref={responseRef}
          >
            {currentResponse ? (
              <div dangerouslySetInnerHTML={{ __html: currentResponse }} />
            ) : (
              <div style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
                <h3>👋 Welcome to Mentory!</h3>
                <p>Ask me anything about software engineering, programming, or your tech career.</p>
                <p>You can start by clicking one of the FAQ buttons below or typing your own question.</p>
              </div>
            )}
          </div>
          
          {isLoading && (
            <div className="loading-container">
              <div className="loader"></div>
              <em>⏳ Your mentor is thinking...</em>
            </div>
          )}
          
          <div className="faq-container">
            <button 
              onClick={() => sendText("What is React?")} 
              className="FAQ"
              disabled={isLoading}
            >
              What is React?
            </button>
            <button 
              onClick={() => sendText("How can I start learning JavaScript?")} 
              className="FAQ"
              disabled={isLoading}
            >
              How can I start learning JavaScript?
            </button>
            <button 
              onClick={() => sendText("Software Engineer Intern Salary")} 
              className="FAQ"
              disabled={isLoading}
            >
              Software Engineer Intern Salary
            </button>
          </div>
          
          <div className="input-section">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me about programming, career advice, or the tech industry..."
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button 
              onClick={() => sendText()} 
              className="askmentor"
              disabled={isLoading || !inputValue.trim()}
            >
              {isLoading ? 'Thinking...' : 'Ask Mentor'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}