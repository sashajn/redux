// var addAction = {
//     type:'ADD_TODO',
//     payload:{
//         id:4,
//         content: 'study react',
//         priority: 'high'
//     }
// }

// var removeAction = {
//     type:'REMOVE_TODO',
//     payload:4
// }


var initialState = [
    {
        id:1,
        content: 'Ring Peter',
        priority: 'Important'
      },
      {
        id:2,
        content: 'Water plants',
        priority: 'Urgent'
      },
      {
        id:3,
        content: 'Get milk',
        priority: 'Can wait'
      }

]

//create todosReducer

function todosReducer (state = initialState,action){

    //if action is add, then add more to state. Else, if actionis remove,then remove item from state. else, do nothing
    
    //Create todosReducer - IMMUTABLE
    if(action.type == 'ADD_TODO'){
        return [...state, action.payload]
    }else if(action.type == 'REMOVE_TODO'){
        //remove item from state

        var id = action.payload
        return state.filter((todo) => {
            return todo.id !== id;
          })
    }else{
        //do nothing
        return state
    }
    
    //return the state

}

export default todosReducer