import React, {useContext} from 'react'
import Key from './Key'
import AppContext from '../AppContext'

function Keyboard() {
  const keys1 = 'QWERTYUIOP'.split('');
  const keys2 = 'ASDFGHJKL'.split('');
  const keys3 = 'ZXCVBNM'.split('');
  const { usedKeys } = useContext(AppContext);

  return (
    <div className='mt-2 md:mt-6 lg:mt-6 w-full h-full'>
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
