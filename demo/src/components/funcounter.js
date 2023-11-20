import React,{useState} from "react";

function FunCounter(){
const [count,Setcount]=useState(0)

const increment=()=>{
    Setcount(count+1)
} 
const decrement=()=>{
    if(count>0){
        Setcount(count-1)
    }
}
return(
    <>
    <p>{count}</p>
    <button onClick={increment}>incre</button>
    <button onClick={decrement}>decre</button>
    </>
)
}

export default FunCounter