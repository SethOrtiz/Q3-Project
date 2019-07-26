import React from "react";


const About = () => {


    return (
        <div>
            <section className="section">
                <div className="container my-5">
                    <div className="row gap-y">

                        <div className="col-md-3 mr-md-auto">
                            <p className="lead-4 text-right">Passionate about creating templates for startups</p>
                        </div>

                        <div className="col-md-4">
                            <h6>Our Mission</h6>
                            <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                                because it is pain, but because occasionally circumstances occur in which toil and pain
                                can procure.</p>
                        </div>

                        <div className="col-md-4">
                            <h6>Our Vision</h6>
                            <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself,
                                because it is pain, but because occasionally circumstances occur in which toil and pain
                                can procure.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section text-white p-4 bg-secondary" >
                <div className="container-wide">
                    <div className="row no-gutters">


                            <img className="col-md-3 pr-4" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80" alt=""/>


                        <div className="col-md-8 p-6 p-md-8">
                            <h4>From The Founder</h4>
                            <p className="lead">Instrument cultivated alteration any favourable expression law far nor.
                                Both new like tore but year. An from mean on with when sing pain.</p>
                            <p>Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs.
                                Prosperous understood middletons in conviction an uncommonly do. Supposing so be
                                resolving breakfast am or perfectly. Is drew am hill from mr. Picture for attempt joy
                                excited ten carried manners talking how. Suspicion neglected he resolving agreement
                                perceived at an.</p>
                            <p>Written enquire painful ye to offices forming it. Then so does over sent dull on.
                                Likewise offended humoured mrs fat trifling answered. On ye position greatest so
                                desirous. So wound stood guest weeks no terms up ought. By so these am so rapid blush
                                songs begin.</p>
                        </div>

                    </div>
                </div>
            </section>

            <div className="section">
                <div className="container my-5">

                    <div className="row pt-5">
                        <div className="col-md-6">

                            <form action="../assets/php/sendmail.php" method="POST" data-form="mailer">

                                <div className="form-group">
                                    <input className="form-control form-control-lg" type="text" name="name"
                                           placeholder="Your Name" />
                                </div>

                                <div className="form-group">
                                    <input className="form-control form-control-lg" type="email" name="email"
                                           placeholder="Your Email Address" />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" name="message" rows="4"
                                              placeholder="Your Message"> </textarea>
                                </div>

                                <button className="btn btn-lg btn-primary btn-block" type="submit">Send Inquiry</button>
                            </form>

                        </div>


                        <div className="col-md-5 ml-auto">
                            <div className="bg-gray h-full p-5">
                                <p>Give us a call or stop by our door anytime, we try to answer all enquiries within 24
                                    hours on business days.</p>
                                <p>We are open from 9am — 5pm week days.</p>

                                <hr className="w-20 my-6" />

                                    <p className="lead">652 Main Road, Apt 12<br/>New York, USA 10033</p>

                                    <div>
                                        <span className="d-inline-block w-5 text-lighter" title="Email">E:</span>
                                        <span className="small-1">info@domain.com</span>
                                    </div>

                                    <div>
                                        <span className="d-inline-block w-5 text-lighter" title="Phone">P:</span>
                                        <span className="small-1">+1 (123) 456-7890</span>
                                    </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>

    )}

export default About;