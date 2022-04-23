import '../style/css/footer.css'
import googleImg from '../style/img/google.png';
import facebookImg from '../style/img/facebook.png';
import twitterImg from '../style/img/twitter.png';
import Logo from '../style/img/logo.png';
const Footer = () => {
    return (
        <footer>
        <div className="footer-container">
            <div>
                <div className="logo-manual">
                    <img src={Logo} alt="Manual" />
                </div>
            </div>
            <div className="links-section">
                <ul className="product">
                    <li className="link-heading">
                        Product
                    </li>
                    <li className="link-items">
                        Popular
                    </li>
                    <li className="link-items">
                        Trending
                    </li>
                    <li className="link-items">
                        Guided
                    </li >
                    <li className="link-items">
                        Products
                    </li>
                </ul>
                <ul className="company">
                    <li className="link-heading">
                        Product
                    </li>
                    <li className="link-items">
                        Popular
                    </li>
                    <li className="link-items">
                        Trending
                    </li>
                    <li className="link-items">
                        Guided
                    </li >
                    <li className="link-items">
                        Products
                    </li>
                </ul>
                <ul className="info">
                    <li className="link-heading">
                        Product
                    </li>
                    <li className="link-items">
                        Popular
                    </li>
                    <li className="link-items">
                        Trending
                    </li>
                    <li className="link-items">
                        Guided
                    </li >
                    <li className="link-items">
                        Products
                    </li>
                </ul>
                <ul className="follow-us">
                    <li className="link-heading">
                        Follow us
                    </li>
                    <li className="link-items">
                        <img alt="Facebook" className="social-links" src={facebookImg}/>
                        <img alt="Google" className="social-links" src={googleImg}/>
                        <img alt="Twitter" className="social-links" src={twitterImg}/>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    );
}

export default Footer;