import React, { useReducer, useState } from "react";
import "./Add.scss"
import { INITIAL_STATE, gigReducer } from "../../reducers/gigReducer.js";

const Add =() =>{
    const [singleFile, setSingleFile] = useState(undefined);
    const [files,setFiles] = useState([]);
    const [uploading,setUploading] = useState(false)
    const [state,dispatch] = useReducer(gigReducer,INITIAL_STATE)


    const handleChange = (e) =>{
        dispatch({type:"CHANGE_INPUT", payload:{name:e.target.name, value:e.target.value}})
    }

    const handleFeature = (e) =>{
        e.preventDefault();
        dispatch({type: 'ADD_FEATURE', payload: e.target[0].value }),
        e.target[0].value = '';
    };
    
    return(
        <div className='add'>
            <div className="container">
                <h1>Add New Gig</h1>
                <div className="sections">
                    <div className="left">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder="e.g. I will do something I'm really good at"  name="title" onChange={handleChange}/>
                        <label htmlFor="">Category</label>
                        <select name="cat" id="cat" onChange={handleChange}>
                            <option value="design">Design</option>
                            <option value="web">Web Development</option>
                            <option value="animation">Animation</option>
                            <option value="music">Music</option>
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Images</label>
                        <input type="file" multiple />
                        <label htmlFor="">Description</label>
                        <textarea name="desc" id="" cols="30" rows="16" placeholder="Brief description to introduce your service to customers" onChange={handleChange}></textarea>
                        <button>Create</button>
                    </div>
                    <div className="right">
                        <label htmlFor="">Service Title</label>
                        <input type="text" name="shortTitle" placeholder="e.g. One-page web design" onChange={handleChange}/>
                        <label htmlFor="">Short Description</label>
                        <textarea name="shortDesc" id="" cols="30" rows="10" placeholder="Short Description of your service" onChange={handleChange}></textarea>
                        <label htmlFor="">Delivery Time</label>
                        <input type="number" min={1} name="deliveryTime" onChange={handleChange} />
                        <label htmlFor="">Revision Number</label>
                        <input type="number" min={1} name="revisionNumber" onChange={handleChange}/>
                        <label htmlFor="">Add Features</label>
                        <form action="" onSubmit={handleFeature}>
                        <input type="text" placeholder="e.g. page design" />
                        <button type="submit">Add</button>
                        </form>
                        <label htmlFor="">Price</label>
                        <input type="number" name="price" min={1} onChange={handleChange}/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add