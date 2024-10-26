import React, {useCallback, useEffect, useContext} from 'react'
import Key from './Key'
import AppContext from '../AppContext'

function Keyboard() {
  const keys1 = 'QWERTYUIOP'.split('');
  const keys2 = 'ASDFGHJKL'.split('');
  const keys3 = 'ZXCVBNM'.split('');
  const { onSelectLetter, onDelete, onEnter, usedLetters } = useContext(AppContext);
  const handleKeyboard = useCallback((e) => {
    const key = e.key.toUpperCase();
    if (key === 'ENTER') {
      onEnter();
    } else if (key === 'BACKSPACE') {
      onDelete();
    } else if (/^[A-Z]$/.test(key)) {
      onSelectLetter(key);
    }
  }, [onDelete, onSelectLetter, onEnter]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('keydown', handleKeyboard);
    }
  }, [handleKeyboard])
  return (
    <div className='mt-2 md:mt-3 lg:mt-12 w-full h-full sm:w-9/12 sm:h-9/12' onKeyDown={handleKeyboard}>
        <div className='line1'>
            {keys1.map((key, i) => (
                <Key key={i} keyValue={key} used={usedLetters.includes(key)} />
            ))}
        </div>
        <div className='line2'>
            {keys2.map((key, i) => (
                <Key key={i} keyValue={key} used={usedLetters.includes(key)} />
            ))}
        </div>
        <div className='line3'>
            <Key keyValue={"ENTER"} isLarge />
            {keys3.map((key, i) => (
                <Key key={i} keyValue={key} used={usedLetters.includes(key)} />
            ))}
            <Key keyValue={"DEL"} isLarge />

        </div>
    </div>
  )
}

export default Keyboard
