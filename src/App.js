import React from 'react'
import Navigation from './components/navBar/Navigation';
import '../src/styles/App.css'
import BrandLift from '../src/assets/images/BrandLift-Desktop.png'
import YoutubePlayer from '../src/assets/images/YoutubePlayer.png'
import AudioAdPhone from '../src/assets/images/AudioAdPhone.png'

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
                        <div className="features__bottom-box">
                            <h3>38%</h3>
                            <h4>Average Brand Lift Increase</h4>
                            <p>
                                Audio Ad Campaigns increase our clients’ brand lift score by an average 49% relative to their competition influencing real customer decisions.
                            </p>
                        </div>
                        <div className="features__bottom-box">
                            <h3>40%</h3>
                            <h4>Use Ad-Blockers</h4>
                            <p>
                                Audio Ad Campaigns cannot be blocked by ad-blocker currently used by average of 40% of African’s below the age of 34 influencing real customer decisions.
                            </p>
                        </div>
                        <div className="features__bottom-box">
                            <h3>53%</h3>
                            <h4>Trust Influencer Marketing</h4>
                            <p>
                                Audio Ad Campaigns are delivered in parallel with music from top musicians creating a trusting and personal message influencing real customer decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;