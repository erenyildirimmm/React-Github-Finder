import React from 'react'
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { GlobalProvider } from "./context/GlobalProvider";
import UserList from './components/UserList';

function App() {


  return (
    <GlobalProvider>
      <Navbar />
      <div className="container">
          <Search />
          <UserList />
      </div>
    </GlobalProvider>
  );
}

export default App;
