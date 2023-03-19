import logo from '../assets/logo.jpeg'
import { SearchInputComponent } from './index'

export function NavbarComponent () {

    return (
        <nav className="navbar">
            <a className="navbar-brand d-flex align-items-center" href="https://www.optivamedia.com/" rel="noreferrer" target="_blank">
                <img className='navbar-logo' src={logo} alt="" />
                <h2> Optiva Media </h2>
            </a>
            <div className='d-none d-md-block'>
                <SearchInputComponent />
            </div>
        </nav>
    )
}