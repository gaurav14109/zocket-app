import {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import polygon3 from '../img/Polygon 3.jpg'
import polygon2 from '../img/Polygon 2.jpg'
import polygon1 from '../img/Polygon 1.jpg'
import Ellipse53 from '../img/Ellipse 53.jpg'
import Ellipse54 from '../img/Ellipse 54.jpg'
import Ellipse55 from '../img/Ellipse 55.jpg'
import Ellipse57 from '../img/Ellipse 57.jpg'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import google from '../img/google.png'
import Illustration from '../img/Illustration.jpg'
import Illustration2 from '../img/Illustration2.jpg'
import Illustration3 from '../img/Illustration3.jpg'
import Illustration4 from '../img/Illustration4.jpg'
import Illustration5 from '../img/Illustration5.jpg'
import hifen from '../img/hifen.jpg'
import personimg from '../img/Person Image.jpg'
import arrow from '../img/arrow.png'
import {registrationlink} from '../requests/registrationlink'

const Landing = () => {

    const [formData, setFormData] = useState({email: ''})

    const [refresh, setRefresh] = useState(false)

    const {email} = formData

    const handleOnChange = e => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault();

        registrationlink(formData, () => {
            setRefresh(true)
            setFormData({email: ''})
        })
    }

    if (refresh) {

        <Redirect to="/"/>
    }
    return (
        <main>

            <section className="info">
                <div className="shapes">
                    <img src={polygon3} className="poly-3" alt="poly"/>
                    <img src={polygon2} className="poly-2" alt="poly"/>
                    <img src={polygon1} className="poly-1" alt="poly"/>
                    <img src={Ellipse53} className="ellip-1" alt="poly"/>
                    <img src={Ellipse54} className="ellip-2" alt="poly"/>
                    <img src={Ellipse55} className="ellip-3" alt="poly"/>
                    <img src={Ellipse57} className="ellip-4" alt="poly"/>
                </div>

                <div className="info-content">

                    <div className="ad-content">
                        <h1
                            style={{
                                fontSize: "65px"
                            }}>FACEBOOK ADS IN 30 SECONDS</h1>

                        <p>Create stunning ad copy incredibly fast and skyrocket your digital business.</p>

                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Your Email Address"
                                value={email}
                                onChange={e => handleOnChange(e)}/>
                            <div className="input-ground-append">
                                <span >
                                    <button type="submit" className="btn btn-primary" onClick={(e) => onSubmit(e)}>Get Early Access</button>
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="illustration">
                        <img src={Illustration} alt="iil"/>
                    </div>
                </div>
            </section>

            <section className="features">

                <div className="features-heading">
                    <h3>Trailor-made Services</h3>
                </div>
                <div className="ad-types">
                    <div className="insta-ad">
                        <div className="insta-img">
                            <img src={instagram} alt="inst"/>
                        </div>
                        <div className="insta-ad-info">
                            <h2>Instagram ads</h2>
                            <p>Right from design & content strategy to profile management and everything in
                                between, we’ve got you covered.</p>
                        </div>

                        <Link to="/">Explore</Link>

                    </div>
                    <div className="fb-ad">
                        <div className="fb-img">
                            <img src={facebook} alt="fb"/>
                        </div>
                        <div className="fb-ad-info">
                            <h2>Facebook ads</h2>
                            <p>With custom audience targeting and personalized ad campaigns, your business
                                is sure to acquire leads.</p>
                        </div>

                        <Link to="/">Explore</Link>
                    </div>
                    <div className="google-ad">
                        <div className="google-img">
                            <img src={google} alt="gg"/>
                        </div>
                        <div className="google-ad-info">
                            <h2>Google ads</h2>
                            <p>We offer industry research paired with PPC monitoring and A/B testing to
                                ensure you get an improved ROI.</p>
                        </div>

                        <Link to="/">Explore
                        </Link>
                    </div>
                </div>
            </section>

            <section className="service">
                <div className="service-header">
                    <h2>Why Us</h2>
                </div>
                <div className="localised-ad service-ad">
                    <img src={Illustration2} alt="iil"/>
                    <div className="localised-ad-content service-ad-content">
                        <h3>Localise Ad Campaigns</h3>
                        <p>With Zocket’s localised ad campaigns, you’re sure to drive customers to your
                            physical store. Online business listings, geo-tagging, and ads are some of the
                            many things we help businesses get started with. You can rest assured that
                            you’ll leave a positive brand image on your customers as your business
                            flourishes, making it easier for you to build long-lasting customer
                            relationships locally.</p>
                    </div>
                </div>
                <div className="enquire service-ad">
                    <div className="enquire-ad-content">
                        <h3>Get More Calls and Enquiries</h3>
                        <p>When you use Zocket, you can expect calls pouring in with enquiries about
                            your business. Our exceptional outreach strategies and business profile
                            optimization techniques will catch the eye of prospects. With organic leads
                            taken care of by Zoket, all you’d have to worry about is converting your leads
                            to customers.</p>
                    </div>
                    <img src={Illustration3} alt="iil"/>
                </div>

                <div className="expertise service-ad">
                    <img src={Illustration4} alt="iil"/>
                    <div className="expertise-ad-content service-ad-content">
                        <h3>No Expertise Required</h3>
                        <p>Zocket is completely beginner friendly and doesn’t require any previous
                            marketing expertise to use. Built with an aim to make marketing easier for small
                            businesses, Zocket is powered by AI and will provide done-for-you content while
                            you can take care of other important things in your business. With
                            easy-to-follow guides, it doesn’t get better than this.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="testimonial-header">
                    <h2>Hear It from Them</h2>
                    <img src={hifen} alt="hif"/>
                </div>
                <div className="testimonial-content">

                    <div className="user">
                        <div className="user-content">
                            <h6>Incredibly Amazing!</h6>
                            <p>Zocket made a huge difference in just a few weeks of using it. Their ad copy
                                helped take our business to the next level.</p>
                        </div>
                        <div className="user-info">
                            <img className="arrow" src={arrow} alt="arrow"/>
                            <img src={personimg} alt="pimg"/>
                            <h6>Ella May</h6>
                            <p>Digital Marketer</p>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-content">
                            <h6>Remarkable Growth</h6>
                            <p>Since the day we started using Zocket, we’ve seen incredible growth in
                                inbound enquiries and leads.</p>
                        </div>
                        <div className="user-info">
                            <img className="arrow" src={arrow} alt="arrow"/>
                            <img src={personimg} alt="pimg"/>
                            <h6>Julie Murphy</h6>
                            <p>Sales Representative</p>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-content">
                            <h6>Awesome Features</h6>
                            <p>Zocket has every feature you can think of when it comes to growing your
                                business. I highly recommend Zocket to everyone.</p>
                        </div>

                        <div className="user-info">
                            <img className="arrow" src={arrow} alt="arrow"/>
                            <img src={personimg} alt="pimg"/>
                            <h6>Eva Jenkins</h6>
                            <p>Sales Lead</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="extra-info">
                <div className="cta">
                    <div className="cta-img">
                        <img src={Illustration5} alt="iil"/>
                    </div>
                    <div className="cta-content">
                        <h2>Be one of the first to know when we launch!</h2>
                        <div className="cta-input input-group">
                            <input type="text" className="form-control" placeholder="Your Email Address"/>
                            <div className="input-ground-append">
                                <span >
                                    <button className="btn btn-primary">Get Early Access</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}
export default Landing