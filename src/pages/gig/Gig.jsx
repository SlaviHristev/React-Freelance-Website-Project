import React from "react";
import "./Gig.scss"
import { Slider } from "infinite-react-carousel";

const Gig = () => {
    return (
        <div className='gig'>
            <div className="container">
                <div className="left">
                    <span className="breadcrumbs">FREELANCE4U > GRAPHICS & DESIGN ></span>
                    <h1>I will create ai generated art for you</h1>

                    <div className="user">
                        <img className="pp" src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <span>Slavi H</span>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                        </div>

                        <span>5</span>
                    </div>
                    <Slider slidesToShow={1} arrowsScroll={1} className='slider'>
                        <img src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <img src="https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <img src="https://images.pexels.com/photos/1004783/pexels-photo-1004783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Slider>
                    <h2>About This Gig</h2>
                    <p>I use an AI program to create images based on text prompts. This means I can help you to create a vision you have
                        through a textual description of your scene without requiring any reference images.
                    </p>
                    <div className="seller">
                        <h2>About The Seller</h2>
                        <div className="user">
                            <img className="pp" src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <div className="info">
                                <span>Slavi H</span>
                                <div className="stars">
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                    <img src="/img/star.png" alt="" />
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">From</span>
                                    <span className="desc">USA</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member since</span>
                                    <span className="desc">Aug 2022</span>
                                </div>
                                <div className="item">
                                    <span className="title">Avg. response time</span>
                                    <span className="desc">4 hours</span>
                                </div>
                                <div className="item">
                                    <span className="title">Last delivery</span>
                                    <span className="desc">1 day</span>
                                </div>
                                <div className="item">
                                    <span className="title">Languages</span>
                                    <span className="desc">English</span>
                                </div>
                            </div>
                            <hr />
                            <p>
                                My name is Ciaran, I enjoy creating AI generated art in my spare time. I have a lot of experience using the AI program and that means I know what to prompt the AI with to get a great and incredibly detailed result.
                            </p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="info">
                                    <span>Slavi H</span>
                                    <div className="country">
                                        <img src="https://images.pexels.com/photos/7485857/pexels-photo-7485857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <span>Bulgaria</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                            </div>
                            <p>
                                This is very good!
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>

                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="info">
                                    <span>Slavi H</span>
                                    <div className="country">
                                        <img src="https://images.pexels.com/photos/7485857/pexels-photo-7485857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <span>Bulgaria</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                            </div>
                            <p>
                                This is very good!
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>

                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img className="pp" src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="info">
                                    <span>Slavi H</span>
                                    <div className="country">
                                        <img src="https://images.pexels.com/photos/7485857/pexels-photo-7485857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                        <span>Bulgaria</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                                <img src="/img/star.png" alt="" />
                            </div>
                            <p>
                                This is very good!
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/img/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/img/dislike.png" alt="" />
                                <span>No</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>1 AI generated image</h3>
                        <h2>$ 29.99</h2>
                    </div>
                        <p>I will create an unique high quality AI generated image based on a description that you give me</p>
                    <div className="details">
                        <div className="item">
                            <img src="/img/clock.png" alt="" />
                            <span>2 days Delivery</span>
                        </div>
                        <div className="item">
                            <img src="/img/recycle.png" alt="" />
                            <span>3 Revisions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt writing</span>
                        </div>
                        <div className="item">
                            <img src="/img/greencheck.png" alt="" />
                            <span>Prompt writing</span>
                        </div>
                    </div>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Gig