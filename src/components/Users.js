import React, { useContext } from 'react'
import UserDetailModal from './UserDetailModal';
import { MainContext } from '../context/GlobalProvider';

const Users = () => {
    const {users, getUser} = useContext(MainContext);
  return (
    <div className="row">
        {users.map(profile => (
            <div className="col-md-3 col-sm-4 col-6 " key={profile.id}>
                <div className="card mb-4">
                    <img src={profile.avatar_url} className="card-img-top" alt={profile.login} />
                    <div className="card-body">
                        <h5 className="card-title mb-4">{profile.login}</h5>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={() => {
                            getUser(profile.id);
                        }}><i className='bi bi-github'></i> Details </button>
                        <UserDetailModal />
                    </div>
                </div>
            </div>
        ))}
    </div> 
  )
}

export default Users