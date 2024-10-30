import React from 'react';
import Letter from './Letter';

const Row = React.memo(({ row, rowIndex }) => {
  return (
    <div className='flex justify-center place-items-center flex-row w-full md:w-7/12'>
      {row.map((letter, j) => (
        <Letter key={j} letterPosition={j} attemptValue={rowIndex} />
      ))}
    </div>
  );
});

export default Row;