import React from "react";

import SearchBar from "./SearchBar";

class Footer extends React.Component{

    onSearchSubmit(term) {
        console.log(term)
    }

    render() {
        return (
            <div className="container-fluid p-0 footer">
                <div className="search text-center">
                    <h2 className="mb-4 text-white mx-auto">Ready to get started? Sign up now!</h2>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
                <div className="lower-footer p-5">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-6 text-lg-left">
                                <ul className="list-unstyled pages">
                                    <li className="d-inline"><a href="/">About</a></li>
                                    <li className="d-inline">.</li>
                                    <li className="d-inline"><a href="/">Contact</a></li>
                                    <li className="d-inline">.</li>
                                    <li className="d-inline"><a href="/">Terms of Use</a></li>
                                    <li className="d-inline">.</li>
                                    <li className="d-inline"><a href="/">Privacy Policy</a></li>
                                </ul>
                                <p>© Your Website 2019. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 text-lg-right">
                                <ul className="social list-unstyled">
                                    <li className="d-inline"><a href="/"><i className="fab fa-facebook"></i></a></li>
                                    <li className="d-inline"><a href="/"><i className="fab fa-twitter-square"></i></a></li>
                                    <li className="d-inline"><a href="/"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>



            </div>
        );
    }
}

export default Footer;