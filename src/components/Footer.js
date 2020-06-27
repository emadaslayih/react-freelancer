import React from "react";
import {Image} from "react-bootstrap";

const Footer =()=>{
    return(
        <div className="footer">
             <div className="container">
            <div className="upper-footer row">
                <div className="col-lg-4">
                    <Image src="footer.png"/>
                    <div className="link">
                    <i className="fas fa-globe"></i>
                        <a href="/">US (International) / English</a>
                    </div>
                    <div className="link">
                    <i className="fas fa-question-circle"></i>
                        <a href="/">Help & Support</a>
                    </div>

                </div>


                <div className="col-lg-8 row">
                    <div className="col-md-3">
                        <h5>Freelancer</h5>
                        <ul className="list-unstyled">
                        <li><a href="/">Categories</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Contests</a></li>
                        <li><a href="/">Freelancers</a></li>
                        <li><a href="/">Enterprise</a></li>
                        <li><a href="/">Preferred Freelancer Program</a></li>
                        <li><a href="/">Project Management</a></li>
                        <li><a href="/">Local Jobs</a></li>
                        <li><a href="/">Showcase</a></li>
                        <li><a href="/">API for Developers</a></li>
                        <li><a href="/">Get Verified</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h5>About</h5>
                        <ul className="list-unstyled">
                        <li><a href="/">About us</a></li>
                        <li><a href="/">How it Works</a></li>
                        <li><a href="/">Security</a></li>
                        <li><a href="/">Investor</a></li>
                        <li><a href="/">Sitemap</a></li>
                        <li><a href="/">Quotes</a></li>
                        <li><a href="/">News</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Terms</h5>
                        <ul className="list-unstyled">
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms and Conditions</a></li>
                        <li><a href="/">Copyright Policy</a></li>
                        <li><a href="/">Code of Conduct</a></li>
                        <li><a href="/">Fees and Charges</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Apps</h5>
                        <div className="row">
                            <div className="col-6 col-md-12">
                                <a href="/"><Image src="app-store.png"/></a>
                            </div>
                            <div className="col-6 col-md-12">
                                <a href="/"><Image src="google-play.png"/></a> 
                            </div>    
                        </div> 
                        <div className="row social">
                        <div className="col-3">
                                <a href="/"><i className="fab fa-facebook"></i></a>
                            </div>
                            <div className="col-3">
                                <a href="/"><i className="fab fa-twitter"></i></a>
                            </div>
                            <div className="col-3">
                                <a href="/"><i className="fab fa-youtube"></i></a>
                            </div>
                            <div className="col-3">
                                <a href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>                 
                    </div>
                </div>
            </div>
            <div className="lower-footer">
                <div className="row">
                    <div className="col-lg-3 col-md-6 d-none d-md-block">
                        <span className="num">45,276,528</span>
                        <span>Registered Users</span>                    
                    </div>
                    <div className="col-lg-3 col-md-6 d-none d-md-block">
                        <span className="num">18,067,307</span>
                        <span>Total Jobs Posted</span>     
                    </div>
                    <div className="col-lg-6 mt-md-4 mt-0">
                        <p>Freelancer &copy; is a registered Trademark of Freelancer Technology Pty Limited (ACN 141 959 042)</p>
                        <p>Copyright &copy; 2020 Freelancer Technology Pty Limited (ACN 141 959 042)</p>
                    </div>
                </div>


            </div>
        </div>

        </div>
       
    )
}

export default Footer;