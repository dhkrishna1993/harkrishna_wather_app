
const initialState={
  weatherinfo:{}

}
const weatherInfo=(state=initialState,action)=>{
  if(action.type="DATA_FETCH"){
    state={
      ...state,
      weatherinfo:action.payload
    }
    return state
  }

}

export default weatherInfo

