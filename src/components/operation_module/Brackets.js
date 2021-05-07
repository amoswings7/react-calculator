import React ,{useContext}from 'react'
import {displayContext} from '../InforContext'

const Brackets = ({brackets}) => {
    const [currentDisplay,setCurrentDisplay] = useContext(displayContext);

    function addBracket(e){
        if(brackets ==='(' && !!Number(currentDisplay[currentDisplay.length-1])){
            console.log(true)
            setCurrentDisplay(currentDisplay+'*(')
            return
        }
        setCurrentDisplay(currentDisplay+e.target.innerHTML)
    }

    return (
        <div className='all_btn brackets' onClick={addBracket}>
            {brackets}
        </div>
      );
}
 
export default Brackets;