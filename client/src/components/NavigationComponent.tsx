// Importing Modules/Packages
import { Link } from "react-router-dom"

export const NavigationComponent = () => {
    const openSideNavBar = () => {
        document.querySelector('.sidebar').classList.add('open');
    }
    return (
        // Navigation Bar Markup Component
        <nav>
            <div className="logo-menu">
                <img src="/assets/Images/Crown.webp" className="logo" alt="Nazir's Logo" />
                <div className="menu-container">
                    <i id="menu-icon" className='bx bx-menu' onClick={openSideNavBar}></i>
                    <Link to="#" aria-label="Open Side Menu" onClick={openSideNavBar}>Menu</Link>
                </div>
            </div>
            <ul>
                <li className="search">
                    <i className='bx bx-search'></i>
                    <Link to="#" aria-label="Search">Search</Link>
                </li>
                <li className="timeline">
                    <i className='bx bx-timer' ></i>
                    <Link to="/Timeline" aria-label="Navigate to Nazir's Journey Timeline Web Page">Journey Timeline</Link>
                </li>
                <li className="favs">
                    <i className='bx bx-heart'></i>
                    <Link to="/FavoriteQuotes">Favorite Quotes</Link>
                </li>
            </ul>
        </nav>
    )
}

export const SideMenuComponent = () => {
    const closeSideNavBar = () => {
        document.querySelector('.sidebar').classList.remove('open');
    }
    return (
        // Side Menu Bar Markup Component
        <div className="main-box">
            <div className="sidebar">
                <div className="logo2"><Link to="/">Lion's Vision</Link></div>
                <div className="btn-close">
                    <label htmlFor="check">
                        <i className='bx bx-x' onClick={closeSideNavBar}></i>
                    </label>
                </div>

                <div className="menu2">
                    <ul>
                        <li>
                            <Link to="/" aria-label="Navigate to Homepage"><i className='bx bxl-windows'></i> Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/AboutMe" aria-label="Navigate to About Nazir Page"><i className='bx bx-question-mark'></i> My Story</Link>
                        </li> */}
                        <li>
                            <Link to="/Timeline"><i className='bx bx-timer' ></i>Journey Timeline</Link>
                        </li>
                        <li>
                            <Link to="/FavoriteQuotes"><i className='bx bx-heart'></i>Favorite Quotes</Link>
                        </li>
                        {/* <li>
                            <Link to="/Feedback" aria-label="Label"><i className='bx bxs-envelope'></i> Feedback</Link>
                        </li> */}
                        <li>
                            <Link target="_blank" to="https://nazirsportfolio.com" aria-label="Navigate to Nazir's Portfolio Website"><i className='bx bx-calendar-alt'></i> Portfolio Website</Link>
                        </li>
                        <li>
                            <Link target="_blank" to="https://yamalonsuniverseportal.com" aria-label="Navigate to Nazir's Yamalons Universe Website"><i className='bx bx-calendar-alt'></i> Yamalon's Universe</Link>
                        </li>
                        <li>
                            <Link target="_blank" to="https://nubian-fortune-marketplace.onrender.com" aria-label="Navigate to Nazir's Nubian Fortune Website"><i className='bx bx-calendar-alt'></i> Nubian Fortune</Link>
                        </li>
                    </ul>
                </div>
                <div className="social2">
                    <a target="_blank" href="https://www.instagram.com/mr_blacknificent" aria-label="Navigate to Nazir's Instagram Profile">
                        <i className='bx bxl-instagram'></i>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/bat.king.74" aria-label="Navigate to Nazir's Facebook Profile">
                        <i className='bx bxl-facebook-circle'></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/nazir-knuckles-736970234" aria-label="Navigate to Nazir's LinkedIn Profile">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCZ0xj4NiBVNSTVIu2B7ufqg" aria-label="Navigate to Nazir's YouTube channel">
                        <i className='bx bxl-youtube'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}