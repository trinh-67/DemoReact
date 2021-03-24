import { ADD_COMMENT } from "../types/FekeBookType";

export const addCommentAction  = (userComment) => ({
    type: ADD_COMMENT,
    userComment
})
