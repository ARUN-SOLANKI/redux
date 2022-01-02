const initialState = 1;
const Reducers = (State =  initialState , Action)=>{
    switch(Action.type){
        case "INCREAMENT" : return State + Action.Payload;
        case "DECREMENT" : return State - Action.Payload;
        default : return State;
    }
}
export default Reducers;