import React from 'react'
import Numbers from './operation_module/Numbers'
import Brackets from './operation_module/Brackets'
import Operators from './operation_module/Operators'
import Del_or_Clear from './operation_module/Del_or_Clear'
import Equals from './operation_module/Equals'

const Calculator = () => {
    const nums = [0,1,2,3,4,5,6,7,8,9,'.'];
    const operations ={
        plus:'+',
        minus:'-',
        times:'*',
        divide:'/'
    }
    const brackets =['(',')']
    const del ='DEL';
    const ac = 'AC'
    const equals ='='


    return ( 
        <div className='calculator'>
            <Brackets brackets={brackets[0]}/>
            <Brackets brackets={brackets[1]}/>
            <Del_or_Clear task={del}/>
            <Del_or_Clear task={ac}/>
            <Numbers num={nums[7]}/>
            <Numbers num={nums[8]}/>
            <Numbers num={nums[9]}/>
            <Operators operation={operations.divide}/>
            <Numbers num={nums[4]}/>
            <Numbers num={nums[5]}/>
            <Numbers num={nums[6]}/>
            <Operators operation={operations.times}/>
            <Numbers num={nums[1]}/>
            <Numbers num={nums[2]}/>
            <Numbers num={nums[3]}/>
            <Operators operation={operations.minus}/>
            <Numbers num={nums[0]}/>
            <Numbers num={nums[10]}/>
            <Equals equals={equals}/>
            <Operators operation={operations.plus}/>

        </div>
     );
}
 
export default Calculator;