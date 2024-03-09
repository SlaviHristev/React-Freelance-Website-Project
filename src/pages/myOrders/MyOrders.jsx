import React from "react";
import "./MyOrders.scss"


const MyOrders =() =>{

    const currentUser = {
        id:1,
        username: 'Slavi H',
        isSeller:true,
    }

    return(
        <div className='orders'>
        <div className="container">
        <div className="title">
            <h1>
                Orders
            </h1>
        </div>
        <table>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
            </tr>
            <tr>
                <td>
                    <img className="img" src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>29</td>
                <td>123</td>
                <td>
                    <img className="delete" src="/img/message.png" alt="" />
                </td>
            </tr>
            <tr>
                <td>
                    <img className="img" src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>29</td>
                <td>123</td>
                <td>
                    <img className="delete" src="/img/message.png" alt="" />
                </td>
            </tr>
            <tr>
                <td>
                    <img className="img" src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </td>
                <td>Gig1</td>
                <td>29</td>
                <td>123</td>
                <td>
                    <img className="delete" src="/img/message.png" alt="" />
                </td>
            </tr>
        </table>
        </div></div>
    )
}

export default MyOrders