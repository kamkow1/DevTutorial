import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="https://github.com/kamkow1" className="text-white">autor</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">projekt na github</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#!" className="text-white">kontakt</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="text-center p-3 footer-bottom">
                    &copy; {new Date().getFullYear()} Copyright:
                    <a className="text-white" href="https://github.com/kamkow1"> kamkow1</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;