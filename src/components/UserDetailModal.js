import React, { useContext } from 'react'
import { MainContext } from '../context/GlobalProvider';

const UserDetailModal = () => {

    const {user, repos, loading} = useContext(MainContext);

  return (
        <div className={`offcanvas offcanvas-start bg-primary text-white `}  tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <i className='bi bi-github'></i>
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">{user.login}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">

                {loading 
                ? 
                <div className="spinner">
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <>           
                <img src={user.avatar_url} className='img-fluid my-4' width="250" alt="" />
                <div className="user-links mb-4">
                    <a href={user.html_url} target='_blank' rel="noopener noreferrer" className='btn  btn-outline-secondary text-white'><i className='bi bi-github'></i> Visit Github Profile</a>
                    {user.blog ? <a href={user.blog} target='_blank' rel="noopener noreferrer" className='btn btn-outline-secondary text-white'><i className='bi bi-globe'></i> Visit Blog</a>:''}
                    
                </div>
                <>
                {user.bio ? user.bio:<div className="alert alert-primary" role="alert">This user has no biography text</div>}
                <div className="list-group mt-4">
                    <h3 className='mb-3'>Repostories</h3>
                {repos.map(repo => (
                    
                        <a href={repo.html_url} key={repo.id} target='_blank' rel="noopener noreferrer" className="list-group-item list-group-item-action text-white" aria-current="true">
                        {repo.name}
                        <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                    
                    ))}
                    </div>
                </>
                </> 
                }

            </div>
        </div>
  )
}

export default UserDetailModal
