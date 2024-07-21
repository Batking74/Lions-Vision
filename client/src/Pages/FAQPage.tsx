// Importing Modules/Packages
import { NavigationComponent, SideMenuComponent } from "../components/NavigationComponent";
import { FooterComponent } from "../components/FooterComponent";

export const FAQPage = () => {
    const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.target.tagName != 'BUTTON') e.target = e.target.parentElement;
        const faqs = document.querySelectorAll('.FAQ-Pannel');
        const pannel = e.target.nextElementSibling;

        faqs.forEach(faq => {
            if (e.target != faq.previousElementSibling) {
                faq.style.display = 'none';
            }
        });

        e.target.parentElement.classList.toggle('FAQ-active');
        e.target.classList.toggle('FAQ-active');

        if (pannel.style.display === 'block') {
            pannel.style.display = 'none';
        }
        else {
            pannel.style.display = 'block';
        }
    }

    return (
        <div>
            <SideMenuComponent />
            <header className="home-header">
                <NavigationComponent />
            </header>

            <div className="FAQ-wrapper">
                <p>The Beggining of a New Asset Class!</p>
                <h1>Frequently Asked Questions</h1>

                {/* FAQ 1 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Naz?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            JC DEM
                        </p>
                    </div>
                </div>

                {/* FAQ 2 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Me?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam, ab adipisci error facilis deleniti eligendi voluptate esse fugiat sit laudantium dolores dolore amet veritatis velit aut non natus illum, officiis quam consectetur? Quos, nihil quia. Ea voluptates exercitationem blanditiis at dolor, consequuntur, fugit assumenda cum impedit repellendus saepe, repudiandae quod! Dicta, non. Cumque voluptatibus eum ullam mollitia, voluptas ratione ut veniam deserunt minus quam ipsum labore reprehenderit consequuntur rem eos hic? Sapiente est assumenda debitis officiis quos doloremque ex unde minima porro, fuga saepe repudiandae sequi consequuntur magni vitae. Suscipit doloremque excepturi iusto illo ea? Eum quaerat iusto vitae fugiat commodi sed iste, ullam minus at temporibus sequi quis voluptatem perferendis quae placeat deserunt facilis veritatis. Aut, recusandae. Quasi quos, dolore vel nemo quo nulla dolores, sed perferendis cupiditate repellat, odit a corporis modi enim dolorem dolor eum sapiente. Nobis voluptates, neque ratione minima ducimus eum beatae iure! Distinctio aliquam iste doloribus ex architecto eum alias earum, fugiat impedit deleniti praesentium corrupti enim magnam accusamus odio quibusdam quam sit animi. Unde, totam quo mollitia ducimus culpa dolor illo, libero dolores harum vitae aliquam. Cupiditate, doloremque praesentium vero corporis earum beatae quibusdam saepe eaque esse, id facere quisquam fuga quos.
                        </p>
                    </div>
                </div>

                {/* FAQ 3 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Me?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam, ab adipisci error facilis deleniti eligendi voluptate esse fugiat sit laudantium dolores dolore amet veritatis velit aut non natus illum, officiis quam consectetur? Quos, nihil quia. Ea voluptates exercitationem blanditiis at dolor, consequuntur, fugit assumenda cum impedit repellendus saepe, repudiandae quod! Dicta, non. Cumque voluptatibus eum ullam mollitia, voluptas ratione ut veniam deserunt minus quam ipsum labore reprehenderit consequuntur rem eos hic? Sapiente est assumenda debitis officiis quos doloremque ex unde minima porro, fuga saepe repudiandae sequi consequuntur magni vitae. Suscipit doloremque excepturi iusto illo ea? Eum quaerat iusto vitae fugiat commodi sed iste, ullam minus at temporibus sequi quis voluptatem perferendis quae placeat deserunt facilis veritatis. Aut, recusandae. Quasi quos, dolore vel nemo quo nulla dolores, sed perferendis cupiditate repellat, odit a corporis modi enim dolorem dolor eum sapiente. Nobis voluptates, neque ratione minima ducimus eum beatae iure! Distinctio aliquam iste doloribus ex architecto eum alias earum, fugiat impedit deleniti praesentium corrupti enim magnam accusamus odio quibusdam quam sit animi. Unde, totam quo mollitia ducimus culpa dolor illo, libero dolores harum vitae aliquam. Cupiditate, doloremque praesentium vero corporis earum beatae quibusdam saepe eaque esse, id facere quisquam fuga quos.
                        </p>
                    </div>
                </div>

                {/* FAQ 4 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Me?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam, ab adipisci error facilis deleniti eligendi voluptate esse fugiat sit laudantium dolores dolore amet veritatis velit aut non natus illum, officiis quam consectetur? Quos, nihil quia. Ea voluptates exercitationem blanditiis at dolor, consequuntur, fugit assumenda cum impedit repellendus saepe, repudiandae quod! Dicta, non. Cumque voluptatibus eum ullam mollitia, voluptas ratione ut veniam deserunt minus quam ipsum labore reprehenderit consequuntur rem eos hic? Sapiente est assumenda debitis officiis quos doloremque ex unde minima porro, fuga saepe repudiandae sequi consequuntur magni vitae. Suscipit doloremque excepturi iusto illo ea? Eum quaerat iusto vitae fugiat commodi sed iste, ullam minus at temporibus sequi quis voluptatem perferendis quae placeat deserunt facilis veritatis. Aut, recusandae. Quasi quos, dolore vel nemo quo nulla dolores, sed perferendis cupiditate repellat, odit a corporis modi enim dolorem dolor eum sapiente. Nobis voluptates, neque ratione minima ducimus eum beatae iure! Distinctio aliquam iste doloribus ex architecto eum alias earum, fugiat impedit deleniti praesentium corrupti enim magnam accusamus odio quibusdam quam sit animi. Unde, totam quo mollitia ducimus culpa dolor illo, libero dolores harum vitae aliquam. Cupiditate, doloremque praesentium vero corporis earum beatae quibusdam saepe eaque esse, id facere quisquam fuga quos.
                        </p>
                    </div>
                </div>

                {/* FAQ 5 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Me?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam, ab adipisci error facilis deleniti eligendi voluptate esse fugiat sit laudantium dolores dolore amet veritatis velit aut non natus illum, officiis quam consectetur? Quos, nihil quia. Ea voluptates exercitationem blanditiis at dolor, consequuntur, fugit assumenda cum impedit repellendus saepe, repudiandae quod! Dicta, non. Cumque voluptatibus eum ullam mollitia, voluptas ratione ut veniam deserunt minus quam ipsum labore reprehenderit consequuntur rem eos hic? Sapiente est assumenda debitis officiis quos doloremque ex unde minima porro, fuga saepe repudiandae sequi consequuntur magni vitae. Suscipit doloremque excepturi iusto illo ea? Eum quaerat iusto vitae fugiat commodi sed iste, ullam minus at temporibus sequi quis voluptatem perferendis quae placeat deserunt facilis veritatis. Aut, recusandae. Quasi quos, dolore vel nemo quo nulla dolores, sed perferendis cupiditate repellat, odit a corporis modi enim dolorem dolor eum sapiente. Nobis voluptates, neque ratione minima ducimus eum beatae iure! Distinctio aliquam iste doloribus ex architecto eum alias earum, fugiat impedit deleniti praesentium corrupti enim magnam accusamus odio quibusdam quam sit animi. Unde, totam quo mollitia ducimus culpa dolor illo, libero dolores harum vitae aliquam. Cupiditate, doloremque praesentium vero corporis earum beatae quibusdam saepe eaque esse, id facere quisquam fuga quos.
                        </p>
                    </div>
                </div>

                {/* FAQ 6 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Me?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum doloribus minima corporis voluptatum animi vel consectetur consequatur nisi repudiandae praesentium id iure magnam repellat similique, placeat assumenda facilis ipsa velit suscipit. Aliquid necessitatibus pariatur minima ex deserunt quibusdam iste repellat perferendis autem quaerat incidunt labore magni explicabo reprehenderit perspiciatis, ratione doloribus. Ipsa, rerum necessitatibus dolorum eos voluptatem repellendus corporis officia labore fuga aperiam quis earum maxime impedit minima veniam eum eligendi? Quo reiciendis nobis ut tempora nisi numquam, ad autem amet sapiente cumque modi. Ipsum harum, voluptatibus culpa omnis ut hic necessitatibus iusto magni nobis autem eos laborum quidem neque sit facere amet numquam aliquam aliquid quisquam tenetur debitis a, consequuntur deleniti! Officiis iure culpa corrupti quo eligendi excepturi eius libero, amet fugit consequatur tempore. Ratione sequi eligendi veritatis nulla nisi repudiandae voluptas nihil ipsum tempora voluptatibus explicabo aut minima id, excepturi sapiente quis. Magnam, reprehenderit, necessitatibus voluptates et eos molestiae possimus impedit tenetur repudiandae molestias ratione veniam veritatis, tempore illum quaerat temporibus! Ullam animi aliquid aperiam molestias maxime excepturi illum qui laborum, quam temporibus accusamus? Pariatur sunt tempora minima ratione voluptate accusantium voluptas eaque dolores ullam. Dolor beatae at eaque repellat necessitatibus ipsa id iste eum esse doloribus, pariatur vero quia porro saepe delectus, cum ad! Illo omnis nostrum asperiores qui amet, cum in ipsam tempora facere exercitationem repellendus quibusdam necessitatibus, repudiandae cumque laboriosam. Dolorem, ratione ipsum itaque minus ad nihil debitis commodi earum officia repellendus reprehenderit totam fugiat eos aperiam quos nostrum ducimus. Sint exercitationem amet asperiores dolores minus neque eligendi fuga, harum necessitatibus, atque eum! Quos commodi consectetur voluptatem. Esse nobis ab necessitatibus, ipsum tenetur mollitia quae quasi, est doloremque reprehenderit commodi cumque, aperiam repellendus explicabo in impedit id placeat rem assumenda fuga. Reprehenderit totam, consequatur dolor corrupti dolorum dolorem ut. Temporibus porro, architecto rem incidunt enim iste, animi quidem fuga atque ullam eveniet itaque. Voluptatibus expedita sequi explicabo repudiandae atque ipsam corporis soluta, voluptatum reiciendis vel non cum sint magni delectus ipsa ab iusto asperiores laudantium animi facilis praesentium earum? Assumenda, voluptate? Aliquam quibusdam provident commodi vero corporis assumenda, atque hic nisi quidem. Excepturi debitis minus quaerat enim, autem aliquam, facere dolorem sint neque eligendi cum aliquid officiis beatae? Ab excepturi asperiores minima rem doloribus modi quod, reprehenderit dolor voluptates molestias tenetur illo? Est alias, molestias soluta veritatis praesentium maxime ipsa doloremque fugiat animi excepturi reprehenderit blanditiis in iste incidunt non cum itaque odio modi corporis tenetur! At quidem temporibus explicabo dolores maiores qui laudantium officia ducimus aspernatur quos ullam quae tempore, minus quibusdam tenetur quia pariatur asperiores provident! Aut voluptatem magnam minima doloremque ducimus alias aperiam voluptate provident adipisci aliquid obcaecati fuga dignissimos, suscipit commodi, voluptas magni laboriosam iure. Quidem voluptas, in provident error hic aut maxime harum velit quas itaque possimus accusamus numquam facere quod repellendus tempore labore voluptates aliquam eveniet autem totam facilis sit natus? Ab reiciendis labore iure, doloribus, dicta pariatur dolores eligendi perspiciatis eveniet illum perferendis possimus ipsa maiores modi expedita amet quae magnam laboriosam, libero delectus dolor voluptatem eius.
                        </p>
                    </div>
                </div>

                {/* FAQ 7 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Me?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum doloribus minima corporis voluptatum animi vel consectetur consequatur nisi repudiandae praesentium id iure magnam repellat similique, placeat assumenda facilis ipsa velit suscipit. Aliquid necessitatibus pariatur minima ex deserunt quibusdam iste repellat perferendis autem quaerat incidunt labore magni explicabo reprehenderit perspiciatis, ratione doloribus. Ipsa, rerum necessitatibus dolorum eos voluptatem repellendus corporis officia labore fuga aperiam quis earum maxime impedit minima veniam eum eligendi? Quo reiciendis nobis ut tempora nisi numquam, ad autem amet sapiente cumque modi. Ipsum harum, voluptatibus culpa omnis ut hic necessitatibus iusto magni nobis autem eos laborum quidem neque sit facere amet numquam aliquam aliquid quisquam tenetur debitis a, consequuntur deleniti! Officiis iure culpa corrupti quo eligendi excepturi eius libero, amet fugit consequatur tempore. Ratione sequi eligendi veritatis nulla nisi repudiandae voluptas nihil ipsum tempora voluptatibus explicabo aut minima id, excepturi sapiente quis. Magnam, reprehenderit, necessitatibus voluptates et eos molestiae possimus impedit tenetur repudiandae molestias ratione veniam veritatis, tempore illum quaerat temporibus! Ullam animi aliquid aperiam molestias maxime excepturi illum qui laborum, quam temporibus accusamus? Pariatur sunt tempora minima ratione voluptate accusantium voluptas eaque dolores ullam. Dolor beatae at eaque repellat necessitatibus ipsa id iste eum esse doloribus, pariatur vero quia porro saepe delectus, cum ad! Illo omnis nostrum asperiores qui amet, cum in ipsam tempora facere exercitationem repellendus quibusdam necessitatibus, repudiandae cumque laboriosam. Dolorem, ratione ipsum itaque minus ad nihil debitis commodi earum officia repellendus reprehenderit totam fugiat eos aperiam quos nostrum ducimus. Sint exercitationem amet asperiores dolores minus neque eligendi fuga, harum necessitatibus, atque eum! Quos commodi consectetur voluptatem. Esse nobis ab necessitatibus, ipsum tenetur mollitia quae quasi, est doloremque reprehenderit commodi cumque, aperiam repellendus explicabo in impedit id placeat rem assumenda fuga. Reprehenderit totam, consequatur dolor corrupti dolorum dolorem ut. Temporibus porro, architecto rem incidunt enim iste, animi quidem fuga atque ullam eveniet itaque. Voluptatibus expedita sequi explicabo repudiandae atque ipsam corporis soluta, voluptatum reiciendis vel non cum sint magni delectus ipsa ab iusto asperiores laudantium animi facilis praesentium earum? Assumenda, voluptate? Aliquam quibusdam provident commodi vero corporis assumenda, atque hic nisi quidem. Excepturi debitis minus quaerat enim, autem aliquam, facere dolorem sint neque eligendi cum aliquid officiis beatae? Ab excepturi asperiores minima rem doloribus modi quod, reprehenderit dolor voluptates molestias tenetur illo? Est alias, molestias soluta veritatis praesentium maxime ipsa doloremque fugiat animi excepturi reprehenderit blanditiis in iste incidunt non cum itaque odio modi corporis tenetur! At quidem temporibus explicabo dolores maiores qui laudantium officia ducimus aspernatur quos ullam quae tempore, minus quibusdam tenetur quia pariatur asperiores provident! Aut voluptatem magnam minima doloremque ducimus alias aperiam voluptate provident adipisci aliquid obcaecati fuga dignissimos, suscipit commodi, voluptas magni laboriosam iure. Quidem voluptas, in provident error hic aut maxime harum velit quas itaque possimus accusamus numquam facere quod repellendus tempore labore voluptates aliquam eveniet autem totam facilis sit natus? Ab reiciendis labore iure, doloribus, dicta pariatur dolores eligendi perspiciatis eveniet illum perferendis possimus ipsa maiores modi expedita amet quae magnam laboriosam, libero delectus dolor voluptatem eius.
                        </p>
                    </div>
                </div>

                {/* FAQ 8 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Me?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam, ab adipisci error facilis deleniti eligendi voluptate esse fugiat sit laudantium dolores dolore amet veritatis velit aut non natus illum, officiis quam consectetur? Quos, nihil quia. Ea voluptates exercitationem blanditiis at dolor, consequuntur, fugit assumenda cum impedit repellendus saepe, repudiandae quod! Dicta, non. Cumque voluptatibus eum ullam mollitia, voluptas ratione ut veniam deserunt minus quam ipsum labore reprehenderit consequuntur rem eos hic? Sapiente est assumenda debitis officiis quos doloremque ex unde minima porro, fuga saepe repudiandae sequi consequuntur magni vitae. Suscipit doloremque excepturi iusto illo ea? Eum quaerat iusto vitae fugiat commodi sed iste, ullam minus at temporibus sequi quis voluptatem perferendis quae placeat deserunt facilis veritatis. Aut, recusandae. Quasi quos, dolore vel nemo quo nulla dolores, sed perferendis cupiditate repellat, odit a corporis modi enim dolorem dolor eum sapiente. Nobis voluptates, neque ratione minima ducimus eum beatae iure! Distinctio aliquam iste doloribus ex architecto eum alias earum, fugiat impedit deleniti praesentium corrupti enim magnam accusamus odio quibusdam quam sit animi. Unde, totam quo mollitia ducimus culpa dolor illo, libero dolores harum vitae aliquam. Cupiditate, doloremque praesentium vero corporis earum beatae quibusdam saepe eaque esse, id facere quisquam fuga quos.
                        </p>
                    </div>
                </div>

                {/* FAQ 9 */}
                <div className="FAQ-Container">
                    <button onClick={toggle} className="accordion">What is Me?<i className="fa-solid fa-chevron-down"></i></button>
                    <div className="FAQ-Pannel">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veniam, ab adipisci error facilis deleniti eligendi voluptate esse fugiat sit laudantium dolores dolore amet veritatis velit aut non natus illum, officiis quam consectetur? Quos, nihil quia. Ea voluptates exercitationem blanditiis at dolor, consequuntur, fugit assumenda cum impedit repellendus saepe, repudiandae quod! Dicta, non. Cumque voluptatibus eum ullam mollitia, voluptas ratione ut veniam deserunt minus quam ipsum labore reprehenderit consequuntur rem eos hic? Sapiente est assumenda debitis officiis quos doloremque ex unde minima porro, fuga saepe repudiandae sequi consequuntur magni vitae. Suscipit doloremque excepturi iusto illo ea? Eum quaerat iusto vitae fugiat commodi sed iste, ullam minus at temporibus sequi quis voluptatem perferendis quae placeat deserunt facilis veritatis. Aut, recusandae. Quasi quos, dolore vel nemo quo nulla dolores, sed perferendis cupiditate repellat, odit a corporis modi enim dolorem dolor eum sapiente. Nobis voluptates, neque ratione minima ducimus eum beatae iure! Distinctio aliquam iste doloribus ex architecto eum alias earum, fugiat impedit deleniti praesentium corrupti enim magnam accusamus odio quibusdam quam sit animi. Unde, totam quo mollitia ducimus culpa dolor illo, libero dolores harum vitae aliquam. Cupiditate, doloremque praesentium vero corporis earum beatae quibusdam saepe eaque esse, id facere quisquam fuga quos.
                        </p>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}