import React,{createContext,useState} from 'react';

export const displayContext = createContext();

export const InforContext = (props) => {

    const [currentDisplay,setCurrentDisplay] = useState('')
    const [result,setResults] = useState('');

    return ( 
        <displayContext.Provider value={[currentDisplay,setCurrentDisplay,setResults,result]}>
            {props.children}
        </displayContext.Provider>
     );
}
 