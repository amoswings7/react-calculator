import React,{useContext} from 'react'
import {displayContext} from '../InforContext';


const Current_display = () => {
    const [currentDisplay,setCurrentDisplay]=useContext(displayContext)
    return ( 
        <div className='current-display'>
            {currentDisplay}
        </div>
     );
}
 
export default Current_display;