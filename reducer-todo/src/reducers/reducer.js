

export const appReducer = (state, action)=>{
    switch (action.type){
        case "COMPLETED":
            return {...state, completed: true}
        default:
            throw new Error("No action matched!");
        };
       


    }
        


export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}
