import React from 'react';
import { GithubSearchProvider } from './components/GithubSearchContext';
import UserSearch from './components/UserSearch';

const App = () => {
  return (
    <div className="search-container">
      <h1>Github User Searcher</h1>
      <GithubSearchProvider>
        <UserSearch />
      </GithubSearchProvider>
    </div>
  );
};

export default App;
