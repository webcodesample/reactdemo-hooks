import { useEffect, useRef, useState } from "react";

export function useThrottle(value,delay){
    const [throttleValue, setThrottleValue] = useState(value);
    const lastCount = useRef(0);

    useEffect(()=>{

        if(lastCount.current === value)
        {
            lastCount.current = value;
            return;
        }

        const timer = setTimeout(() => {
        lastCount.current += 1;  // update internal ref counter
        setThrottleValue(lastCount.current); // update state
    }, delay);

    return () => clearTimeout(timer);

    },[value,delay]);

    return throttleValue;
}