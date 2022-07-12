import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className="navMenu">
            <Link to="/">
                <h1 className="Lnk">
                    home
                </h1>
            </Link>
            <Link to="/create">
                <h1 className="Lnk">
                    create
                </h1>
            </Link>
        </div>
    )
}
export default Nav