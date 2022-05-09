import React from 'react'
import Navigation from './components/navBar/Navigation';
import '../src/styles/App.css'
import BrandLift from '../src/assets/images/BrandLift-Desktop.png'

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
        </div>
    )
}

export default App;