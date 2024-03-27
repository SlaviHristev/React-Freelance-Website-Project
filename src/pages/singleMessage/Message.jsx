import React from "react";
import "./Message.scss"
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/requests";

const Message = () => {
    const queryClient = useQueryClient();
    const { id } = useParams();

    const { isLoading, error, data } = useQuery({
        queryKey: ["messages"],
        queryFn: () =>
            newRequest
                .get(
                    `/messages/${id}`
                )
                .then((res) => {
                    return res.data;
                }),


                
    });

    const mutation = useMutation({
        mutationFn: (message) => {
            return newRequest.put(`/messages`, message);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["message"])
        }
    });

    const handleSubmit= (e) =>{
        e.preventDefault()
        mutation.mutate({
            conversationId:id,
            desc:e.target[0].value,
        })
    }

    return (
        <div className='message'>
            <div className="container">
                <span className="breadcrumbs">
                    <Link to='/messages' >MESSAGES</Link> > SLAVI H >
                </span>
                {isLoading ? 'loading..'
                    : error ? 'error'
                        : (<div className="messages">
                            {data.map(m => (

                                <div className="item" key={m._id}>
                                    <img src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <p>
                                        {m.desc}
                                    </p>
                                </div>
                            ))
                            }

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
                        </div>)}
                <hr />
                <form className="write" onSubmit={handleSubmit}>
                    <textarea name="" id="" placeholder="write a message" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Message