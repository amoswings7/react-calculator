import React,{useContext} from 'react'
import {displayContext} from '../InforContext';


const Numbers = ({num}) => {

    const [currentDisplay,setCurrentDisplay] = useContext(displayContext)

    function addNumber(e){
        if(e.target.innerHTML ==='.'){
            let highest = 0;
            const check = ['+','-','*','/'];

            for(let sign of check){
                if(currentDisplay.lastIndexOf(sign) > highest){
                    
                    highest = currentDisplay.lastIndexOf(sign);
                }
            }
            console.log(highest)
            if(highest < currentDisplay.lastIndexOf('.')){
                return
            }
        }
        setCurrentDisplay(currentDisplay+e.target.innerHTML)
    }

    return (  
        <div id='numbers' className='numbers all_btn' onClick={addNumber}>
            {num}
        </div>
    );
}
 
export default Numbers;