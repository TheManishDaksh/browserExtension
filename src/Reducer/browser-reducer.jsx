
export  const BrowserReducer = (state , {type,payload})=>{
    switch(type){
        case "NAME": 
        return{
            ...state,
            name : payload
        }
        
        default :
        return state
    }
}