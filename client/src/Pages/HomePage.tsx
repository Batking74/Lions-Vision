// Importing Modules
import { NavigationComponent, SideMenuComponent } from "../components/NavigationComponent";
import { FooterComponent } from "../components/FooterComponent";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <Fragment>
            <SideMenuComponent />
            <div className="container">
                {/* Background Video */}
                <video src="/assets/Images/Lion.mp4" autoPlay muted loop>
                    <track src="/assets/Images/subtitles.vtt" kind="subtitles" srcLang="en" label="English" />
                </video>
                <header className="home-header">
                    <NavigationComponent />
                </header>
                <section className="info">
                    <p>Navigating life, and a Journey of Strength, Resilience, Nobility, and Dignity</p>
                    <h1>The Lion's Vision</h1>
                    <Link to="/Resources"><button>Explore Resources</button></Link>
                </section>
            </div>

            {/* Main Content Markup */}
            <main>
                <section className="section-1">
                    <div className="wrapper">
                        <div className="container2">

                            {/* Row 1 */}
                            <input type="radio" name="slide" id="c1" checked onChange={() => {}} />
                            <label htmlFor="c1" className="card">
                                <div className="row">
                                    <div className="icon">1</div>
                                    <div className="description"></div>
                                    <p>Male Lion</p>
                                </div>
                            </label>

                            {/* Row 2 */}
                            <input type="radio" name="slide" id="c2" checked onChange={() => {}} />
                            <label htmlFor="c2" className="card">
                                <div className="row">
                                    <div className="icon">2</div>
                                    <div className="description"></div>
                                    <p>Vicious Lioness in the African Sahara</p>
                                </div>
                            </label>

                            {/* Row 3 */}
                            <input type="radio" name="slide" id="c3" checked onChange={() => {}} />
                            <label htmlFor="c3" className="card">
                                <div className="row">
                                    <div className="icon">3</div>
                                    <div className="description"></div>
                                    <p>Family Gathering</p>
                                </div>
                            </label>

                            {/* Row 4 */}
                            <input type="radio" name="slide" id="c4" checked onChange={() => {}} />
                            <label htmlFor="c4" className="card">
                                <div className="row">
                                    <div className="icon">4</div>
                                    <div className="description"></div>
                                    <p>Lion Cub</p>
                                </div>
                            </label>

                        </div>
                    </div>
                </section>
            </main>
            <FooterComponent />
        </Fragment>
    );
}