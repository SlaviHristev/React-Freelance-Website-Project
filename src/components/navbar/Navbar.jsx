import React, { useEffect, useState } from "react";
import "./Navbar.scss"
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/requests";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();

    const {pathname} = useLocation()

    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() =>{
        window.addEventListener('scroll', isActive);

        return () =>{
            window.removeEventListener('scroll', isActive)
        }
    },[])

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const handleLogout = async () =>{
        try {
            await newRequest.post('/auth/logout');
            localStorage.setItem('currentUser',null);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span className="text">Freelance4U</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Freelance4U Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={currentUser.img || '/img/man.png'} alt="" />
                            <span>{currentUser?.username}</span>
                            {open && (<div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                    <Link className="link" to="/mygigs">Gigs</Link>
                                    <Link className="link" to="/add">Add New Gig</Link>
                                    </>
                                )}
                                <Link className="link" to="/orders">Orders</Link>
                                <Link className="link" to="/messages">Messages</Link>
                                <Link className="link" onClick={handleLogout}>Logout</Link>
                            </div>)}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== '/') && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to='/'>Graphics & Design</Link>
                        <Link className="link">Video & Animation</Link>
                        <Link className="link">Writing & Translation</Link>
                        <Link className="link">AI Services</Link>
                        <Link className="link">Digital Marketing</Link>
                        <Link className="link">Music & Audio</Link>
                        <Link className="link">Programming & Tech</Link>
                        <Link className="link">Business</Link>
                        <Link className="link">Lifestyle</Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    )
}

export default Navbar