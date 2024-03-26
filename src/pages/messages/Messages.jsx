import React from "react";
import "./Messages.scss"
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/requests.js";
import moment from "moment";

const Messages = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const { isLoading, error, data } = useQuery({
        queryKey: ["conversations"],
        queryFn: () =>
            newRequest
                .get(
                    `/conversations`
                )
                .then((res) => {
                    return res.data;
                }),
    });

    return (
        <div className='messages'>
            {isLoading ? 'loading...'
            :error ? 'error':
            (<div className="container">
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
                    {data.map(c=>(

                        <tr className= { currentUser.isSeller && !c.readBySeller || !currentUser.isSeller && !c.readByBuyer && "active"} key={c.id}>
                        <td>
                            {currentUser.isSeller ? c.buyerId : c.sellerId}
                        </td>
                        <td><Link to='/message/123' className="link">
                            {c?.lastMessage}</Link></td>
                        <td>{moment(c.updatedAt).fromNow()}</td>
                        <td>
                        { currentUser.isSeller && !c.readBySeller || !currentUser.isSeller && !c.readByBuyer &&
                            (<button>Mark as Read</button>)}
                        </td>
                    </tr>
                        ))}
                   
                   
                </table>
            </div>)}
        </div>
    )
}

export default Messages