import { useRef,useEffect } from "react"

export function usePrev(value){
    const ref = useRef();
    useEffect(()=>{
        ref.current = value;
    },[value]);
    return ref.current;
};//Returns first and effect gets called later