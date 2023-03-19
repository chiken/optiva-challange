import { Outlet } from "react-router-dom"
import { NavbarComponent } from './index'

export const LayoutComponent = ( ) => {
    return (
        <div className="app">
            <NavbarComponent />

            <div className="container pt-0 pt-md-5">
                <Outlet/>
            </div>
        </div>
    )
}