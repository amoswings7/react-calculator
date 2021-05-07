import React,{useContext} from 'react'
import {displayContext} from '../InforContext'

const Del_or_Clear = ({task}) => {

    const [currentDisplay,setCurrentDisplay,setResults] = useContext(displayContext)

    function del_or_ac(e){
        if(task ==='DEL'){
            setCurrentDisplay(currentDisplay.slice(0,-1))
        }else if(task ==='AC'){
            setCurrentDisplay('')
            setResults('')
        }
    }  

    return (  
        <div className='all_btn clear' onClick={del_or_ac}>
            {task}
        </div>
    );
}
 
export default Del_or_Clear;