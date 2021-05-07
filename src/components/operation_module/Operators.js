import React,{useContext} from 'react'
import {displayContext} from '../InforContext'

const Operators = ({operation}) => {

    const [currentDisplay,setCurrentDisplay] = useContext(displayContext)

    function addOperation(e){
        if(currentDisplay.length ===0){
            return
        }else if(operation===currentDisplay[currentDisplay.length-1]){
            return
        }else if(operation==='/' && currentDisplay[currentDisplay.length-1]==='*'){
            return
        }else if(operation==='*' && currentDisplay[currentDisplay.length-1]==='/'){
            return
        }
        setCurrentDisplay(currentDisplay+e.target.innerHTML)
    }

    return (  
        <div className='all_btn operators' onClick={addOperation}>
            {operation}
        </div>
    );
}
 
export default Operators;