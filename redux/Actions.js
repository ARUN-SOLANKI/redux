export const INCREASE = (counter) =>{
    return (dispatch)=>{
        dispatch({
            type : "INCREAMENT",
        Payload : counter
        })
    
    }
}
export const DECREASE = (counter) =>{
    return (dispatch)=>{
        dispatch({
            type : "DECREMENT",
        Payload : counter
        })
    
    }
}