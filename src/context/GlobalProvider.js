import { createContext, useEffect, useState } from "react";

import React from 'react'

export const MainContext = createContext();

export const GlobalProvider = (props) => {
const [startUser, setStartUser] = useState([]);
const [keyword, setKeyword] = useState("");
const [users, setUsers] = useState([]);
const [user, setUser] = useState([]);
const [repos, setRepos] = useState([]);
const [loading, setLoading] = useState(false);
const [usersLoading, setUsersLoading] = useState(false);


useEffect(() => {
  const startUsers = async () => {
    try {
      const userData = await fetch('https://api.github.com/users');
      const userJson = await userData.json();
      setStartUser(userJson);
    }
    catch (err) {
      console.log(err);
    }
  };
  startUsers();
}, []);



const searchProfile = async () => {
  setUsersLoading(true);
    try {
        const usersData = await fetch(`https://api.github.com/search/users?q=${keyword}`);  
        const usersDataJson = await usersData.json();
        setUsers(usersDataJson.items);
        setUsersLoading(false);
    }
    catch(err) {
        console.log(err)
    }
}

const inputChange = (e) => {
 setKeyword(e.target.value)
}

const onSubmit = (e) => {
    e.preventDefault();
    searchProfile();
}

const getUser = async (id) => {
  setLoading(true);
  try {
    if(users.length !== 0) {
      const userDetail = users.find(us => us.id === id);
      const userDetailData = await fetch(userDetail.url);    
      await userDetailData.json()
        .then((userDetailDataJson) => {
          setUser(userDetailDataJson);
        })
      const reposData = await fetch(userDetail.repos_url); 
       await reposData.json()
          .then((reposDataJson) => {
            setRepos(reposDataJson);
            setLoading(false);
          })
    } else {
      const userDetail = startUser.find(us => us.id === id);
      const userDetailData = await fetch(userDetail.url);    
      await userDetailData.json()
        .then((userDetailDataJson) => {
          setUser(userDetailDataJson);
        })
      const reposData = await fetch(userDetail.repos_url); 
       await reposData.json()
          .then((reposDataJson) => {
            setRepos(reposDataJson);
            setLoading(false);
          })
    }

  }
  catch(err) {
    console.log(err);
  }
}


 const contextData = {
  startUser,
  keyword,
  setKeyword,
  users,
  setUsers,
  user,
  setUser,
  searchProfile,
  inputChange,
  onSubmit,
  getUser,
  setRepos,
  repos,
  loading,
  setLoading,
  usersLoading
}
  return (
    <MainContext.Provider value={contextData}>
        {props.children}
    </MainContext.Provider>
  )
}




