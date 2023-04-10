import { useContext } from "react"
import { MainContext } from "../context/GlobalProvider"

const Search = () => {
    const {onSubmit, keyword, inputChange} = useContext(MainContext);
  return (
    <form onSubmit={onSubmit}>
        <div className="search-input my-5 ">
            <input type="text" className="form-control" value={keyword} onChange={inputChange} placeholder="search user" />
            <button type='submit' className='btn'><i className='bi bi-search'></i></button>
        </div>
    </form>
  )
}

export default Search