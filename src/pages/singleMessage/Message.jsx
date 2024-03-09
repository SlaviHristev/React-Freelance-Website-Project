import React from "react";
import "./Message.scss"
import { Link } from "react-router-dom";

const Message =() =>{
    return(
        <div className='message'>
            <div className="container">
                <span className="breadcrumbs">
                    <Link to='/messages' >MESSAGES</Link> > SLAVI H > 
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis illo expedita sequi provident voluptatem officia esse nam ad odit.
                    </p>
                    </div>

                    <div className="item owner">
                        <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis illo expedita sequi provident voluptatem officia esse nam ad odit.
                    </p>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis illo expedita sequi provident voluptatem officia esse nam ad odit.
                    </p>
                    </div>

                    <div className="item owner">
                        <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis illo expedita sequi provident voluptatem officia esse nam ad odit.
                    </p>
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis illo expedita sequi provident voluptatem officia esse nam ad odit.
                    </p>
                    </div>

                    <div className="item owner">
                        <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis illo expedita sequi provident voluptatem officia esse nam ad odit.
                    </p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" id="" placeholder="write a message" cols="30" rows="10"></textarea>
                     <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message