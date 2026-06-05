"use client"

import { useEffect } from "react";

export default function MenuItemError({
    error, reset} : {error: Error & {digest?: string } ,
    reset: () => void;
}) {
    useEffect (()=>{
        console.log(error)

    }, [])
  return (
    <div>
        <h1>something went wrong: please try again</h1>
        <button onClick={()=> reset()}>Retry</button>
        
    </div>
  )
}
