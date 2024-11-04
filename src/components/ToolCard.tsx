import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
}

export default function ToolCard({ title, description, image, category, url }: ToolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <span className="inline-block px-2.5 py-0.5 mt-2 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full">
              {category}
            </span>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-emerald-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}