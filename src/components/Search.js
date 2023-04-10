import { useContext } from "react"
import { MainContext } from "../context/GlobalProvider"

const Search = () => {
    const {onSubmit, keyword, inputChange} = useContext(MainContext);
  return (
    <div className="top mt-5 text-center">
      <h1>Github Voyager</h1>
      <p>Discover new frontiers in code with our Github exploration tool</p>
      <form onSubmit={onSubmit}>
          <div className="search-input my-5 ">
              <input type="text" className="form-control" value={keyword} onChange={inputChange} placeholder="search user" />
              <button type='submit' className='btn'><i className='bi bi-search'></i></button>
          </div>
      </form>
    </div>
  )
}

export default Search