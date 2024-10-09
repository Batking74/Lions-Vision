// Importing Modules/Packages
import { NavigationComponent, SideMenuComponent } from "../components/NavigationComponent";
import { FooterComponent } from "../components/FooterComponent";

export const TimelinePage = () => {
    return (
        <div className="timeline-container">
            <SideMenuComponent />
            <header className="home-header">
                <NavigationComponent />
            </header>

            {/* Main Content Markup */}
            <main className="timeline-section">
                {/* Background Video */}
                <video className="timeline-video" src="/assets/Images/Lion_Timeline.mp4" autoPlay muted loop>
                    <track src="/assets/Images/subtitles.vtt" kind="subtitles" srcLang="en" label="English" />
                </video>
                <div className="timeline-items">
                    {/* Period 1 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2019</div>
                        <div className="timeline-content">
                            <h3>Timeline Info 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa quo minima ducimus, cum obcaecati! Magnam eos, amet ipsam voluptatum fugiat laudantium incidunt ipsum veritatis. Quibusdam velit modi maxime esse!</p>
                        </div>
                    </div>

                    {/* Period 2 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2020</div>
                        <div className="timeline-content">
                            <h3>Timeline Info 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa quo minima ducimus, cum obcaecati! Magnam eos, amet ipsam voluptatum fugiat laudantium incidunt ipsum veritatis. Quibusdam velit modi maxime esse!</p>
                        </div>
                    </div>

                    {/* Period 3 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2021</div>
                        <div className="timeline-content">
                            <h3>Timeline Info 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa quo minima ducimus, cum obcaecati! Magnam eos, amet ipsam voluptatum fugiat laudantium incidunt ipsum veritatis. Quibusdam velit modi maxime esse!</p>
                        </div>
                    </div>

                    {/* Period 4 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2022</div>
                        <div className="timeline-content">
                            <h3>Timeline Info 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa quo minima ducimus, cum obcaecati! Magnam eos, amet ipsam voluptatum fugiat laudantium incidunt ipsum veritatis. Quibusdam velit modi maxime esse!</p>
                        </div>
                    </div>

                    {/* Period 5 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2023</div>
                        <div className="timeline-content">
                            <h3>Timeline Info 5</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa quo minima ducimus, cum obcaecati! Magnam eos, amet ipsam voluptatum fugiat laudantium incidunt ipsum veritatis. Quibusdam velit modi maxime esse!</p>
                        </div>
                    </div>

                    {/* Period 6 */}
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Timeline Info 6</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa quo minima ducimus, cum obcaecati! Magnam eos, amet ipsam voluptatum fugiat laudantium incidunt ipsum veritatis. Quibusdam velit modi maxime esse!</p>
                        </div>
                    </div>

                </div>
            </main>
            <FooterComponent />
        </div>
    )
}