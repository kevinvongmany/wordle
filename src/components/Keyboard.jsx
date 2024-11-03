import React, {useCallback, useEffect, useContext} from 'react'
import Key from './Key'
import AppContext from '../AppContext'

function Keyboard() {
  const keys1 = 'QWERTYUIOP'.split('');
  const keys2 = 'ASDFGHJKL'.split('');
  const keys3 = 'ZXCVBNM'.split('');
  const { usedLetters, usedKeys } = useContext(AppContext);


  // const handleKeyboard = useCallback((e) => {
  //   const key = e.key.toUpperCase();
  //   if (key === 'ENTER') {
  //     onEnter();
  //   } else if (key === 'BACKSPACE') {
  //     onDelete();
  //   } else if (/^[A-Z]$/.test(key)) {
  //     onSelectLetter(key);
  //   }
  // }, [onDelete, onSelectLetter, onEnter]);
  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyboard);
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyboard);
  //   }
  // }, [handleKeyboard])
  return (
    <div className='mt-6 md:mt-12 lg:mt-12 w-full h-full'>
        <div className='flex row justify-center items-center mb-1'>
            {keys1.map((key, i) => {
                const colour = usedKeys[key];
                return <Key key={i} colour={colour} keyValue={key} />
            })}
        </div>
        <div className='flex row justify-center items-center mb-1'>
            {keys2.map((key, i) => {
                const colour = usedKeys[key];
                return <Key key={i} colour={colour} keyValue={key} />
            })}
        </div>
        <div className='flex row justify-center items-center mb-1'>
            <Key keyValue={"ENTER"} isLarge />
            {keys3.map((key, i) => {
                const colour = usedKeys[key];
                return <Key key={i} colour={colour} keyValue={key} />
            })}
            <Key keyValue={"DEL"} isLarge />

        </div>
    </div>
  )
}

export default Keyboard
