import React, { useContext } from 'react'
import { MainContext } from '../context/GlobalProvider';
import UserDetailModal from './UserDetailModal';

const HomeUsers = () => {
    const {startUser,getUser} = useContext(MainContext);

  return (
    <div className="row">
        {startUser.map(user => (
            <div className="col-md-3 col-sm-4 col-6" key={user.id}>
            <div className="card mb-4">
                <img src={user.avatar_url} className="card-img-top" alt={user.login} />
                <div className="card-body">
                    <h5 className="card-title mb-4">{user.login}</h5>
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={() => {
                        getUser(user.id);
                    }}><i className='bi bi-github'></i> Details </button>
                    <UserDetailModal />
                </div>
            </div>
        </div>
        ))}
        </div>
  )
}

export default HomeUsers