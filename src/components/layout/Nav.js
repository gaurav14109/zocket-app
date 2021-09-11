import {Link} from 'react-router-dom'
import Zocket from '../img/Zocket-logo.jpg'
const Nav = () => {

    return (
        <header>
            <div className="logo">
                <Link to = "/">
                <img src={Zocket} alt="logo"/>
                </Link>
            </div>

            <div className="link-box">
                <ul className="links">
                    <li>Services</li>
                    <li>Why Us</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li>
                        <button className="btn btn-primary" style={{borderRadius:"5px"}}>Get Early Access</button>
                    </li>
                </ul>

            </div>
        </header>
    )

}

export default Nav;