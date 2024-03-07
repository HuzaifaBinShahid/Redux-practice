import { BUY_ICECREAM } from "./icecreamType"

const initialState = {
    numOfIceCreams:20,
}

const icecreamReducer = (state = initialState, action) =>{
    if(action.type === BUY_ICECREAM){
        return {
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }
    }else{
        return state;
    }

}

export default icecreamReducer;