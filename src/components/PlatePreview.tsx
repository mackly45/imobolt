import React from 'react';
import { usePlateStore } from '../store/plateStore';

export default function PlatePreview() {
  const { text, backgroundColor, textColor, size } = usePlateStore();

  const plateStyle = {
    backgroundColor,
    color: textColor,
    width: size === 'small' ? '300px' : size === 'large' ? '500px' : '400px',
    height: size === 'small' ? '100px' : size === 'large' ? '150px' : '120px',
  };

  return (
    <div className="flex justify-center items-center h-64 bg-gray-100 rounded-lg">
      <div
        style={plateStyle}
        className="flex items-center justify-center border-4 border-gray-800 rounded-lg font-mono text-4xl font-bold"
      >
        {text || 'ABC 123'}
      </div>
    </div>
  );
}