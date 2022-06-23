import React from 'react';
import { Route , Switch} from 'react-router-dom';

import Background from './components/background/background';
import SearchBar from './components/searchBar/searchBar';
import BooksContainer from './components/booksContainer/booksContainer';

function App() {
  return (
    <React.Fragment>
      <Background/>
      <Switch>
        <Route path='/' exact component={SearchBar}/>
        <Route path='/books'  component={BooksContainer}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
