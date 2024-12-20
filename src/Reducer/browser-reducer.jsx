
export  const BrowserReducer = (state , {type,payload})=>{
    switch(type){
        case "NAME": 
        return{
            ...state,
            name : payload
        }
        case "TIME":
            return{
                ...state,
                time : payload
            }
            case "MESSAGE":
                return {
                    ...state,
                    message : payload >= 12 ? `Good Morning `: payload <= 17 ?`Good AfterNoon` : `Good Evening `
                }
        default :
        return state
    }
}