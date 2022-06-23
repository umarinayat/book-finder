import React, { Component } from 'react';
import BookCard from '../bookCard/bookCard';
import './booksContainer.css';

class BooksContainer extends Component{

 
    render(){
        return (
            <div className='list'>
                {this.props.books.map(book=>(
                    <BookCard 
                    key={book.id}
                    img={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    publisher={book.volumeInfo.publisher}/>
                ))}
            </div>
        )
    }
}

export default BooksContainer;