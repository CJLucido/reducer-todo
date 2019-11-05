

export function appReducer(state, action){
    
    
    switch (action.type){
        case "COMPLETED":
            return {...state, completed: true}

        case "CREATE_TODO":
            let newState = [Object.assign({}, state)]
            newState = [...state, action.payload]
            return newState
           // return [...state, payload];

           
        default:
            throw new Error("No action matched!");
        };
       

       
    }
        


export const initialState =[{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]


//item: action.payload, id: action.payload2, completed: action.payload3