import React from 'react';

const Card = ({ 
    imageUrl,
    label 
}:{
    imageUrl: string,
    label: string
}) => {
  return (
    <a 
        className="max-w-xs rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        href={`/${label.replaceAll(' ', '_').toLowerCase()}`}
    >
      <img className="w-full" src={imageUrl} alt="Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{label}</div>
      </div>
    </a>
  );
};

export default Card;