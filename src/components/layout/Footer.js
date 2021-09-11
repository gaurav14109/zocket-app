import {Link} from 'react-router-dom'
import Zocket from '../img/Zocket-logo.jpg'
const Footer = () => {

    return (<footer>
        <div className="footer-container">
            <div className="footer-row">
                <div className="footer-col">
                    <img src={Zocket} alt="logo"/>
                        <p>Copy © 2021 Zocket</p>
                        <p>All rights reserved</p>
                        <div>
                            <Link to="/">
                                <i className="fab fa-facebook"></i>
                            </Link>
                            <Link  to="/">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link  to="/">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h6>Company</h6>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div className="footer-col">
                        <h6>Support</h6>
                        <p>Help center</p>
                        <p>Terms of services</p>
                        <p>Legal</p>
                        <p>Privacy Policy</p>
                        <p>Status</p>
                    </div>
                    <div className="footer-col">
                        <h6>Get Early Access</h6>
                        <input type="text" className="form-control" placeholder="Your Email Address"/>
                        <button className="btn btn-primary">get early access</button>
                    </div>
                </div>
            </div>

        </footer>)


}

export default Footer;