import React from "react";
import "./Messages.scss"
import { Link } from "react-router-dom";

const Messages =() =>{

    const message = ``
    return(
        <div className='messages'>
        <div className="container">
        <div className="title">
            <h1>
                Orders
            </h1>
        </div>
        <table>
            <tr>
                <th>Buyer</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
            <tr className="active">
                <td>
                  Gosho
                </td>
                <td><Link to='/message/123' className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem eum delectus consectetur quos suscipit possimus porro ad vitae sequi!</Link></td>
                <td>2 days ago</td>
                <td><button>Mark as Read</button></td>
                
            </tr>
            <tr className="active">
                <td>
                  Pesho
                </td>
                <td><Link to='/message/123' className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem eum delectus consectetur quos suscipit possimus porro ad vitae sequi!</Link></td>
                <td>2 days ago</td>
                <td><button>Mark as Read</button></td>
                
            </tr>
            <tr>
                <td>
                  Ivan
                </td>
                <td><Link to='/message/123' className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem eum delectus consectetur quos suscipit possimus porro ad vitae sequi!</Link></td>
                <td>2 days ago</td>
            </tr>
            <tr>
                <td>
                  Ivan
                </td>
                <td><Link to='/message/123' className="link">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi exercitationem eum delectus consectetur quos suscipit possimus porro ad vitae sequi!</Link></td>
                <td>2 days ago</td>
            </tr>
        </table>
        </div></div>
    )
}

export default Messages