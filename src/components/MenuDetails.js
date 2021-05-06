import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import {borrowedBook,handleValueInput,handleCheckBox,handleChangeDate} from '../redux/actions/libraryActions'
import "../styles/AddBook.css"

export default function MenuDetails(){

   const dispatch = useDispatch();

    const allBooks = useSelector((state) => state.library.allBooks);
    const inputValue = useSelector((state => state.inputValue.inputValue))
    const checked = useSelector((state => state.library.checked))
    const actualDate =  useSelector(state => state.library.actualDate)
    
    let  minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    let  getMaxDate = maxDate + "-12-31";

    const addBookTobBorrowedBooks = allBooks.filter(bookTitle => bookTitle.title  === inputValue)

    const addBook=(e)=>{
        e.preventDefault()
        if(!inputValue){
            return
          }
          allBooks.forEach(book =>{
          if(checked){
              book.important = true 
          }
          else{
            book.important = false 
          }

          if(actualDate){
            book.date = actualDate
          }
          else{
            book.date = minDate
          }
        });
        dispatch(borrowedBook(addBookTobBorrowedBooks))
    }

  
return(
    <nav className="menu">
        <form onSubmit={addBook} >
        <select
         value ={inputValue}
         onChange={(e) => dispatch(handleValueInput(e.target.value))}>
                 <option>Borrow a book:</option>  
                {allBooks.map((book) => (
                <option key={book.id} value={book.title} >
                    {book.title}
                </option>
                ))}
        </select>
        <div>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e)=>dispatch(handleCheckBox(e.target.checked))}
        />
        <label>Priority</label>
        </div>
        <br />
        <br />
        <label htmlFor="date"> Time to give back a book: </label>
        <input
            type="date"
            value={actualDate}
            min={minDate}
            max={ getMaxDate }
            onChange ={(e)=>dispatch(handleChangeDate(e.target.value))}
        />
        <br />
        <hr className="menu__hr" />
            <div className="menu__button__centerize">
                <button>BORROW</button>
            </div>
        </form>
    </nav>
    )
}
