import { NavLink, Link } from "react-router-dom";
import logo from '../media/logo.jpg'

export default function Navbar() {
    return (
        <header>
            <section>
                <img src={logo} />
                <h1>Create your Puppy Bowl Team</h1>
            </section>

            <nav>
                <NavLink to='/'>View All Players</NavLink>
                <NavLink to='/new-player'>Add New Player</NavLink>
            </nav>
        </header>
    )
}