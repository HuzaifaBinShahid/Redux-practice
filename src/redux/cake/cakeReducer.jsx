import { BUY_CAKE } from "./cakeType"

const initialState = {
    numOfCakes: 10
}


const cakeReducer = (state = initialState ,action)=>{
    if(action.type === BUY_CAKE){
        return{
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }}
        else{
        return state
        }

}

export default cakeReducer