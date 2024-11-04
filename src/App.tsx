import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import Footer from './components/Footer';

const tools = [
  {
    title: 'ImageAI Pro',
    description: 'Advanced image processing and enhancement using cutting-edge AI algorithms',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=800',
    category: 'Image Processing',
    url: '#'
  },
  {
    title: 'SmartChat GPT',
    description: 'Natural language processing chatbot for customer service automation',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=800',
    category: 'Chatbots',
    url: '#'
  },
  {
    title: 'DataViz AI',
    description: 'Transform complex data into beautiful, interactive visualizations',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Analysis Tools',
    url: '#'
  },
  {
    title: 'CodeGenius',
    description: 'AI-powered code generation and optimization for developers',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    category: 'Code Generation',
    url: '#'
  },
  {
    title: 'DesignMind',
    description: 'AI design assistant for creating stunning graphics and layouts',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800',
    category: 'Design Tools',
    url: '#'
  },
  {
    title: 'AudioAI Suite',
    description: 'Advanced audio processing and enhancement tools powered by AI',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    category: 'Audio Processing',
    url: '#'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 lg:ml-64">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;