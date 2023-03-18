import { Outlet } from "react-router-dom"
import Navbar from './Navbar'

export const Layout = ( ) => {
    return (
        <div className="app">
            <Navbar />

            <div className="container pt-5">
                <Outlet/>
            </div>
        </div>
    )
}