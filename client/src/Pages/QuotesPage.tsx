// Importing Modules/Packages
import { NavigationComponent, SideMenuComponent } from "../components/NavigationComponent";
import { FooterComponent } from "../components/FooterComponent";
import { Fragment } from "react";

export const QuotesPage = () => {
    return (
        <Fragment>
            <SideMenuComponent />
            <header className="home-header">
                <NavigationComponent />
            </header>

            {/* Main Content Markup */}
            <main className="main-quotepage">
                <div className="quote">

                    {/* Quote 1 */}
                    <div>
                        <div className="box box1">
                            <i className='bx bx-heart-circle'></i>
                            <p>The spiritual meaning of the lion is one of strength and courage, reminding us that no matter what life throws at us, we have the power within ourselves to overcome it.</p>
                            <h2>Lion Spirit</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 2 */}
                    <div>
                        <div className="box box2">
                            <i className='bx bx-heart-circle'></i>
                            <p>Although the future is a little bit frightening, it’s the book of your life that you’re writing.</p>
                            <h2>Carl Douglas</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 3 */}
                    <div>
                        <div className="box box3">
                            <i className='bx bx-heart-circle'></i>
                            <p>You could be a work of art, if you just go all the way.</p>
                            <h2>Carl Douglas</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 4 */}
                    <div>
                        <div className="box box4">
                            <i className='bx bx-heart-circle'></i>
                            <p>The journey's a lonely one. So much more than we know, But sometimes you've got to go. Go on and be your own hero.</p>
                            <h2>Carl Douglas</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 5 */}
                    <div>
                        <div className="box box5">
                            <i className='bx bx-heart-circle'></i>
                            <p>Life is all about survival and adaptation.</p>
                            <h2>Thinkerist</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 6 */}
                    <div>
                        <div className="box box6">
                            <i className='bx bx-heart-circle'></i>
                            <p>Although the rain might pour. A thunder starts to roar. The lightning wakes the wave. But through it, we are brave.</p>
                            <h2>Alan Walker</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 7 */}
                    <div>
                        <div className="box box7">
                            <i className='bx bx-heart-circle'></i>
                            <p>Team work makes the dream work.</p>
                            <h2>Thinkerist</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 8 */}
                    <div>
                        <div className="box box8">
                            <i className='bx bx-heart-circle'></i>
                            <p>Our humanity illuminates through our flaws and weaknesses. Acknowledging our flaws and weaknesses fosters nurturing and empathy.</p>
                            <h2>Thinkerist</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 9 */}
                    <div>
                        <div className="box box9">
                            <i className='bx bx-heart-circle'></i>
                            <p>No matter what path you choose in life. Its going to be hard. So why not pick the path, that gives you the most at the end.</p>
                            <h2>Thinkerist</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 10 */}
                    <div>
                        <div className="box box10">
                            <i className='bx bx-heart-circle'></i>
                            <p>In a world where survival instincts prevail, humans may act in ways that will impact your life.</p>
                            <h2>Thinkerist</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                    {/* Quote 11 */}
                    <div>
                        <div className="box box11">
                            <i className='bx bx-heart-circle'></i>
                            <p>Survival demands strength, understanding of life, people, history, and oneself. It requires embracing impermanence, preparing for inevitable evil, and being ready to say goodbye, all while cherishing the present without recklessness.</p>
                            <h2>Thinkerist</h2>
                        </div>
                        <div className="quote-bg"></div>
                    </div>

                </div>
            </main>
            <FooterComponent />
        </Fragment>
    )
}