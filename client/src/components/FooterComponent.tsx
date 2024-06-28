// Importing Modules/Packages
import { Link } from "react-router-dom"


export const FooterComponent = () => {
    return (
        // Footer Markup Component
        <footer>
            <div className="social">
                <a target="_blank" href="https://www.facebook.com/bat.king.74" aria-label="Navigate to Nazir's Facebook Profile">
                    <i className='bx bxl-facebook-circle'></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/mr_blacknificent" aria-label="Navigate to Nazir's Instagram Profile">
                    <i className='bx bxl-instagram'></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/nazir-knuckles-736970234" aria-label="Navigate to Nazir's LinkedIn Profile">
                    <i className='bx bxl-linkedin-square'></i>
                </a>
                <a target="_blank" href="https://portfolio-website-71rz.onrender.com" aria-label="Navigate to Nazir's Portfolio Website">
                    <i className='bx bx-code-block'></i>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCZ0xj4NiBVNSTVIu2B7ufqg" aria-label="Navigate to Nazir's YouTube channel">
                    <i className='bx bxl-youtube'></i>
                </a>
            </div>
            <ul className="list">
                <li><Link to="/FAQ" aria-label="Navigate to Nazir's FAQ Page">FAQ</Link></li>
                <li><Link to="/Services" aria-label="Navigate to Nazir's Services Page">Services</Link></li>
                <li><Link to="/AboutMe" aria-label="Navigate to Nazir's About Page">About Me</Link></li>
                <li><Link to="/Contact" aria-label="Navigate to Nazir's Contact Page">Contact</Link></li>
                <li><Link to="#" aria-label="Open up Privacy Policy">Privacy Policy</Link></li>
            </ul>
            <p className="copyright">© Nazir Knuckles | Batking74 | All Rights Reserved</p>
        </footer>
    )
}