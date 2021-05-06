import {ActionTypes} from '../constants/action-types';

let  minDate = new Date().toISOString().slice(0, 10);

 const initialState = {
    allBooks: [],
    actualDate:"",
    borrowedBooks:[],
    returnedBooks:[], 
    countBorrowBooks:0,
    countReturnedBooks:0,
    checked:false,
}

export const libraryReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                allBooks: action.payload,
                borrowedBooks:[],
                returnedBooks:[],
                countBorrowBooks: state.countBorrowBooks,
                countReturnedBooks:state.countReturnedBooks,
                actualDate: minDate,
            };
        case ActionTypes.CHANGE_VALUE_CHECKBOX:
            return {
                ...state,
                checked: action.payload
            };
        case ActionTypes.CHANGE_DATE:
            return {
                ...state,
                actualDate: action.payload
            };  
        case ActionTypes.BORROW_A_BOOK:
            return{
                ...state,
                actualDate: minDate,
                borrowedBooks: [...state.borrowedBooks,action.payload[0]],
                allBooks:state.allBooks.filter(book=>book.title !== action.payload[0].title),
                returnedBooks:[ ...state.returnedBooks],
                countBorrowBooks: state.borrowedBooks.length + 1,
                countReturnedBooks:state.countReturnedBooks,
                checked:false,
            };
       case ActionTypes.RETURN_A_BOOK:
               return {
                ...state,
                borrowedBooks: state.borrowedBooks.filter(book => book.id !== action.payload.id),
                returnedBooks:[...state.returnedBooks,action.payload],
                countBorrowBooks: state.borrowedBooks.length - 1,
                countReturnedBooks :state.returnedBooks.length + 1
            };
        case ActionTypes.CONFIRM_RETURNED_BOOK:
            return{
               ...state,
               allBooks : [...state.allBooks, action.payload],
               returnedBooks: state.returnedBooks.filter(book => book.id !== action.payload.id),
               countReturnedBooks :state.returnedBooks.length - 1
            }       
        default:
            return state;
    }
};

export const inputValueReducer = (state = "", action) => {
    switch(action.type){
        case ActionTypes.CHANGE_VALUE_INPUT:
            return{
                ...state,
                inputValue: action.payload
            };
        default:
            return state;
    }
};

export const ModalReducer = (state = false, action) =>{
    switch(action.type){
        case ActionTypes.SHOW_MODAL:
            return{
                ...state,
                modalIsOpen: action.payload,
                id:  action.id
            };
        default:
            return state;
    }
}






