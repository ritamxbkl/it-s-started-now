import React from 'react';
import { 
  Image, MessageSquare, BarChart3, Code2, Palette, 
  Brain, VideoIcon, Music, Calculator, Database 
} from 'lucide-react';

const categories = [
  { name: 'Image Processing', icon: Image },
  { name: 'Chatbots', icon: MessageSquare },
  { name: 'Analysis Tools', icon: BarChart3 },
  { name: 'Code Generation', icon: Code2 },
  { name: 'Design Tools', icon: Palette },
  { name: 'Machine Learning', icon: Brain },
  { name: 'Video Processing', icon: VideoIcon },
  { name: 'Audio & Music', icon: Music },
  { name: 'Math & Science', icon: Calculator },
  { name: 'Data Processing', icon: Database },
];

export default function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block fixed h-[calc(100vh-4rem)] border-r border-gray-100 pt-6">
      <nav className="space-y-1 px-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.name}
              className="w-full flex items-center space-x-3 px-4 py-2.5 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-600" />
              <span className="text-sm font-medium group-hover:text-emerald-600">
                {category.name}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}