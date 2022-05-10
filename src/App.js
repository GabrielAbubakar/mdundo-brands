import React from 'react'
import '../src/styles/App.css'
import Navigation from './components/navBar/Navigation';
import GrowthCard from './components/growthCard/GrowthCard';
import BrandLift from '../src/assets/images/BrandLift-Desktop.png'
import YoutubePlayer from '../src/assets/images/YoutubePlayer.png'
import AudioAdPhone from '../src/assets/images/AudioAdPhone.png'
import Map from '../src/assets/images/map.png'
import Logo1 from '../src/assets/images/Logo1.svg';
import Logo2 from '../src/assets/images/Logo2.svg';
import Logo3 from '../src/assets/images/Logo3.svg';
import Logo4 from '../src/assets/images/Logo4.svg';
import Logo5 from '../src/assets/images/Logo5.svg';


const App = () => {
    return (
        <div className='container'>
            <Navigation />

            <section className="home">
                <div className="home__container">
                    <div className="home__text-content">
                        <h1>Get Started With Mdundo Brandlift Tool Today</h1>
                        <p>Increase brand awareness, expand your audience, and boost foot traffic, among other things. Track the impact of your ad and gain insights on delivery and audience engagement.</p>
                        <a href="#try">Try Now</a>
                    </div>

                    <div className="home__img-container">
                        <img src={BrandLift} alt="bradlift desktop " />
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="features__container">
                    <div className="features__top">
                        <div className="features__video-box">
                            <img src={YoutubePlayer} alt="youtube player" />
                        </div>
                        <div className="features__top-content">
                            <h2>Effectively reach your target audience across Africa</h2>
                            <a href="#vid">Watch Introductory Video</a>
                        </div>
                    </div>

                    <div className="features__mid">
                        <div className="features__mid-content">
                            <h2>Capture the Attention of your Audience with High <span>impact audio ads!</span></h2>
                            <p>
                                5-10 second Audio Ad, played just before your target audience listens to their favorite song!
                            </p>
                            <a href="#playAd">Play Ad</a>
                        </div>
                        <div className="features__img-box">
                            <img src={AudioAdPhone} alt="audio ad phone" />
                        </div>
                    </div>

                    <div className="features__bottom">
                        <GrowthCard percent="38%"
                            title="Average Brand Lift Increase"
                            details="Audio Ad Campaigns increase our clients’ brand lift score by an average 49% relative to their competition influencing real customer decisions." />

                        <GrowthCard percent="40%"
                            title="Use Ad-Blockers"
                            details="Audio Ad Campaigns cannot be blocked by ad-blocker currently used by average of 40% of African’s below the age of 34 influencing real customer decisions." />

                        <GrowthCard percent="53%"
                            title="Trust Influencer Marketing"
                            details="Audio Ad Campaigns are delivered in parallel with music from top musicians creating a trusting and personal message influencing real customer decisions." />

                    </div>
                </div>
            </section>

            <section className="contact">
                <div className="contact__container">
                    <div className="contact__content">
                        <h2>We have a young, highly engaged audience!</h2>
                        <p>
                            Get in touch with us to capture the attention of your target audience with maximum impact, Today!
                        </p>
                        <div className="contact__buttons">
                            <a href="#touch">Get in Touch</a>
                            <a href="#numbers">View Q4 numers here</a>
                        </div>
                    </div>
                    <div className="contact__img-box">
                        <img src={Map} alt="map" />
                    </div>
                </div>
            </section>

            <section className="clients">
                <div className="clients__container">
                    <h2>Our strong global partners</h2>
                    <div className="clients__top">
                        <div className="clients__logos-top">
                            <img src={Logo1} alt="first client" />
                            <img src={Logo2} alt="first client" />
                            <img src={Logo3} alt="first client" />
                            <img src={Logo4} alt="first client" />
                            <img src={Logo5} alt="first client" />
                        </div>
                        <div className="clients__logos-bottom">
                            <img src={Logo1} alt="first client" />
                            <img src={Logo2} alt="first client" />
                            <img src={Logo3} alt="first client" />
                            <img src={Logo4} alt="first client" />
                            <img src={Logo5} alt="first client" />
                        </div>
                    </div>

                    <h2>what people say about us</h2>
                    <div className="clients__bottom">
                        <div className="clients__testimonials">
                            <div className="clients__testimonials-logo">

                            </div>
                            <div className="clients__testimonials-review">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                                </p>
                            </div>
                            <div className="clients__testimonials-reviewer">
                                <div className="reviewer__img">

                                </div>
                                <div className="reviewer__title">
                                    <h4>Michael James</h4>
                                    <p>CEO, Panther</p>
                                </div>
                            </div>
                        </div>
                        <div className="clients__testimonials">
                            <div className="clients__testimonials-logo">

                            </div>
                            <div className="clients__testimonials-review">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                                </p>
                            </div>
                            <div className="clients__testimonials-reviewer">
                                <div className="reviewer__img">

                                </div>
                                <div className="reviewer__title">
                                    <h4>Michael James</h4>
                                    <p>CEO, Panther</p>
                                </div>
                            </div>
                        </div>
                        <div className="clients__testimonials">
                            <div className="clients__testimonials-logo">

                            </div>
                            <div className="clients__testimonials-review">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                                </p>
                            </div>
                            <div className="clients__testimonials-reviewer">
                                <div className="reviewer__img">

                                </div>
                                <div className="reviewer__title">
                                    <h4>Michael James</h4>
                                    <p>CEO, Panther</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;