import React,{useContext} from 'react'
import {displayContext} from '../InforContext'


const Answer_display = () => {
    const [currentDisplay,setCurrentDisplay,setResults,result] = useContext(displayContext)

    return ( 
        <div className='answer-display'>
            {result}
        </div>
     );
}
 
export default Answer_display;