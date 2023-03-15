import React, { createContext, useState } from 'react';

export const GithubSearchContext = createContext();

export const GithubSearchProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  async function fetchData(query) {
    if (!query) {
      return
    }
    const res = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await res.json();
    setUsers(data.items);
  }

  return <GithubSearchContext.Provider value={{ users, fetchData }}>{children}</GithubSearchContext.Provider>;
};
