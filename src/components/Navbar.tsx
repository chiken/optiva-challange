import logo from '../assets/logo.jpeg'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../redux/actions/movieActions'

export default function Navbar () {
    const dispatch = useDispatch()    
    
    const handleSearch = (event: any) => {
        if (event.key === 'Enter') {
            dispatch(setSearchQuery(event.target.value));
        }
    }

    return (
        <nav className="navbar">
            <a className="navbar-brand d-flex align-items-center" href="https://www.optivamedia.com/" rel="noreferrer" target="_blank">
                <img className='navbar-logo' src={logo} alt="" />
                <h2> Optiva Media </h2>
            </a>
            <div className="form-inline px-5">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search"  onKeyDown={handleSearch} />
            </div>
        </nav>
    )
}