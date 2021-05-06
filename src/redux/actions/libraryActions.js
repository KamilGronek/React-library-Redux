import {ActionTypes} from "../constants/action-types";

export const fetchSuccess = (library) =>{
    return{
        type: ActionTypes.FETCH_SUCCESS,
        payload: library,
    }
}

export const borrowedBook = (addBookTobBorrowedBook) =>{
    return{
        type: ActionTypes.BORROW_A_BOOK,
        payload: addBookTobBorrowedBook,
    }
}

export const handleValueInput = (inputValue) =>{
    return{
        type: ActionTypes.CHANGE_VALUE_INPUT,
        payload: inputValue,
    }
}

export const handleCheckBox = (checked)=>{
    return{
        type: ActionTypes.CHANGE_VALUE_CHECKBOX,
        payload: checked,
    }
}

export const handleChangeDate = (actualDate) =>{
    return{
        type: ActionTypes.CHANGE_DATE,
        payload: actualDate,
    }
}

export const returnedBook = (book) =>{
    return {
        type: ActionTypes.RETURN_A_BOOK,
        payload:book,
    }
}

export const confirmReturnedBook = (book)=>{
    return {
        type: ActionTypes.CONFIRM_RETURNED_BOOK,
        payload:book
    }
}

export const openModal = (modalIsOpen,id) =>{
    return{
        type: ActionTypes.SHOW_MODAL,
        payload: modalIsOpen,
        id :id
    }
}






