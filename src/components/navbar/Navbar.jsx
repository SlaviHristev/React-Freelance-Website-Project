import React, { useEffect, useState } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open,setOpen] = useState(false);

    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() =>{
        window.addEventListener('scroll', isActive);

        return () =>{
            window.removeEventListener('scroll', isActive)
        }
    },[])

    const currentUser = {
        id:1,
        username:"Slavi Hr",
        isSeller:true,
    }

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    {/* <Link to="/"> */}
                        <span className="text">fiverr</span>
                    {/* </Link> */}
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && (<div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                    <span>Gigs</span>
                                    <span>Add New Gig</span>
                                    </>
                                )}
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div>)}
                        </div>
                    )}
                </div>
            </div>
            {active  && (
                <>
                    <hr />
                    <div className="menu">
                        <span>Test1</span>
                        <span>Test2</span>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar