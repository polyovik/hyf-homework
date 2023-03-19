import React, { useState, useEffect, useContext } from 'react';
import { GithubSearchContext } from './GithubSearchContext';
import {DebounceInput} from 'react-debounce-input';

const UserSearch = () => {
  const [query, setQuery] = useState('');
  const UsersContext = useContext(GithubSearchContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
    UsersContext.fetchData(e.target.value);
  };

  const filteredUsers = UsersContext.users.map((user) => {
    return <p> {user.login}</p>;
  });

  return (
    <div>
      <DebounceInput debounceTimeout={500} type="text" value={query} onChange={handleChange} />

      {UsersContext.users.length === 0 && <div>No results...</div>}
      {filteredUsers}
    </div>
  );
};

export default UserSearch;
