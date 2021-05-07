import React from 'react'
import Current_display from './display modules/Current-display'
import Answer_display from './display modules/Answer-display'

const Display = () => {
    return ( 
        <div id='parent-display'>
            <Current_display/>
            <Answer_display/>
        </div>
     );
}
 
export default Display;