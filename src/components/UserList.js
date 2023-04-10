import React, { useContext } from 'react'
import { MainContext } from '../context/GlobalProvider'
import Users from './Users';
import HomeUsers from './HomeUsers';
const UserList = () => {
    const {users, usersLoading} = useContext(MainContext);
  return (
    <>
    <div className="user-list">

            { usersLoading 
            ? 
            <div className="spinner text-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
            <>
            {users.length === 0 ? <HomeUsers /> : <Users />}
            </>
            }
        </div>
    </>
  )
}

export default UserList
