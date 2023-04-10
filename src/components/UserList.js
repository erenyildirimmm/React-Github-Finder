import React, { useContext } from 'react'
import { MainContext } from '../context/GlobalProvider'
import UserDetailModal from './UserDetailModal';
const UserList = () => {
    const {users, getUser, usersLoading} = useContext(MainContext);
  return (
    <>
    <div className="user-list">
        <div className="row">
            { usersLoading 
            ? 
            <div className="spinner text-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            :
            <>
            {users.map(profile => (
                <div className="col-md-3 col-sm-4 col-6 " key={profile.id}>
                    <div className="card mb-4">
                        <img src={profile.avatar_url} className="card-img-top" alt={profile.login} />
                        <div className="card-body">
                            <h5 className="card-title mb-4">{profile.login}</h5>
                            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={() => {
                                getUser(profile.id);
                            }}><i className='bi bi-github'></i> Details </button>
                              <UserDetailModal/>
                        </div>
                    </div>
                </div>
            ))}
            </>
            }
        </div>
    </div>
    </>
  )
}

export default UserList
