import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

import BooksContainer from '../booksContainer/booksContainer';
import './searchBar.css';
import { Link } from 'react-router-dom';


class SearchBar extends Component{
    state = {
        searchValue: '',
        books: []
    }


    onSearchHandler = (event) =>{
        const newSearchValue = event.target.value;
        this.setState({searchValue: newSearchValue});
 
    }

    findBookHandler = (event) =>{
        if(event.key === 'Enter'){
            event.preventDefault()
            axios.get('https://www.googleapis.com/books/v1/volumes',{params: {q: this.state.searchValue}}).then(
                response =>{
                    this.setState({books: [...response.data.items]})
    
                }
            )
        }

    }
    render(){

        let nextPage = null
        if(this.state.books.length){
            return nextPage = <BooksContainer books={this.state.books}/>
        }

        return (
            <React.Fragment>
                <div className="wrap">
                    <div className="search">
                        <input type="text"
                             className="searchTerm" 
                             placeholder="Enter Book or Author name" 
                             value={this.state.searchValue}
                             onKeyDown={this.findBookHandler}
                             onChange={this.onSearchHandler}/>                      
                            <button type="button" className="searchButton" onClick={this.findBookHandler}>
                                
                                Search
                            </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 

export default SearchBar