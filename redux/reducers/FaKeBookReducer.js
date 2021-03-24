
import { ADD_COMMENT } from "../types/FekeBookType";

const stateDafault = {
    comments: [
        {name:'Yone',content: 'Hi! yasuo !',avatar:`https://i.pravatar.cc/150?u=yone`},
        {name:'Yasuo',content: 'Hi! yasuo !',avatar:`https://i.pravatar.cc/150?u=yasuo`},
    ]
}

const FaKeBookReducer = (state= stateDafault,action)=>{
    switch(action.type) {
        case ADD_COMMENT: {
            state.comments = [...state.comments,action.userComment];
            return {...state}
        }
    }

    return {...state}
}

export default FaKeBookReducer;