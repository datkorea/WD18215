import { createContext, ReactNode, useState } from 'react';

export const CounterContex = createContext({});
type CounterContextProviderProps = {
    children: ReactNode;
}
const CounterContextProvider = ({children} : CounterContextProviderProps) =>{
    const [count, setCount] = useState(10);
    return (
      <div>
            <CounterContex.Provider value={{count,setCount}}> {children}
                
        </CounterContex.Provider>
      </div>
    );  
}
export default CounterContextProvider;