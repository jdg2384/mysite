// Redux Imports
import React, { Component } from 'react';
//import Sticky from 'react-stickynode';
import Sticky from 'react-sticky-el';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './about.css';
import '../Common/common.css';
//Images
import hat from '../../Images/hat.png';
import me from '../../Images/fish.png';
import reel from '../../Images/reel.png';
import fly from '../../Images/fly.png';
class About extends Component {
    
    render() {
        return (
            <div>
                <div id="about" className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 blueParent">
                            <Sticky>
                                <div className="col-md-12 blue test"> 
                                    <img src={hat} className="hat" alt={'hat Svg'}/>
                                    <h2 className="h2Backgrounds">About</h2>
                                </div>
                            </Sticky>
                        </div>
                        <div className="col-md-6 white text-center ">
                            <img src={me} className="me img-responsive" alt={'me'}/>
                            <h3>Joseph Grounds</h3>
                            <h4 className="text-left">
                                I am a Software Engineer living in Boulder, Colorado. Huge music lover, 
                                can't get enough Folk, Bluegrass, and Rock!! I love backpacking especially 
                                if there is a fly rod attached to it. Spending time in or near a river is 
                                where I feel most centered. If you have never been tubing I suggest you 
                                get on that. Digital Artwork and illustrations were my gateway to the 
                                creative industry, which led me to Galvanize and the programming world.
                            </h4>
                            <img src={reel} className="reel img-responsive" alt={'reel'}/>
                            <h3>Full Stack Developer</h3>
                            <h4 className="text-left">
                                A user-centered mindset and sensitivity for design turned out to be the 
                                perfect fit when collaborating with agencies, clients, and brands to 
                                develop digital concepts and solve problems together. This rough framework 
                                outlines my process of developing digital experiences.
                            </h4>
                            <img src={fly} className="fly img-responsive" alt={'fly'}/>
                            <h3>Languages | Frameworks | Libraries</h3>
    
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><h5>JavaScript</h5></td>
                                        <td><h5>React</h5></td>
                                        <td><h5>React Native</h5></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Redux.js</h5></td>
                                        <td><h5>Flux.js</h5></td>
                                        <td><h5>Swagger</h5></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Node.js</h5></td>
                                        <td><h5>Express.js</h5></td>
                                        <td><h5>Ruby on Rails</h5></td>
                                    </tr>
                                    <tr>
                                        <td><h5>SQL</h5></td>
                                        <td><h5>PostgreSQL</h5></td>
                                        <td><h5>MongoDB</h5></td>
                                    </tr>
                                    <tr>
                                        <td><h5>JSX</h5></td>
                                        <td><h5>HTML</h5></td>
                                        <td><h5>CSS</h5></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Supertest.js</h5></td>
                                        <td><h5>Mocha.js</h5></td>
                                        <td><h5>Chai.js</h5></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;
