import React,{useContext} from 'react'
import {displayContext} from '../InforContext'

const Equals = ({equals}) => {

    const [currentDisplay,setCurrentDisplay,setResults] = useContext(displayContext)

    function calculate(){
        setResults(eval(currentDisplay))
    }
    return (
        <div className='all_btn equals' onClick={calculate}>
            {equals}
        </div>
      );
}
 
export default Equals;
