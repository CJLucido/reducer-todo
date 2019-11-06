

export function appReducer(state, action){
    
    
    switch (action.type){
        case "COMPLETED":
        let newArray =  state.map(item => {
               if(item.id === action.payload ){
                    item.completed = !item.completed
               }
               return item
            })
            return newArray

        case "CREATE_TODO":
       
         return [...state, action.payload];
        case "DESTROY":
            let slimmedTodos = state.filter(item => {
                return item.completed === false
            })
            return slimmedTodos
           
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