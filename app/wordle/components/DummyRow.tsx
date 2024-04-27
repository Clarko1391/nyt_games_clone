import React from 'react'
  
  const GameRow: React.FC = () => {
    return (
        <div
            className='h-20 pt-2 pb-2 flex gap-2 m-2'
        >
            <div
                className={'px-4 py-2 bg-gray-200 rounded-lg text-center uppercase text-lg font-semibold'}
            />
            <div
                className={'px-4 py-2 bg-gray-200 rounded-lg text-center uppercase text-lg font-semibold'}
            />
            <div
                className={'px-4 py-2 bg-gray-200 rounded-lg text-center uppercase text-lg font-semibold'}
            />
            <div
                className={'px-4 py-2 bg-gray-200 rounded-lg text-center uppercase text-lg font-semibold'}
            />
            <div
                className={'px-4 py-2 bg-gray-200 rounded-lg text-center uppercase text-lg font-semibold'}
            />
        </div>
    )
  };
  
  export default GameRow;