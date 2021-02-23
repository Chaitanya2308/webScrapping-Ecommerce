
import React, { useState, useEffect } from 'react';
import Display from './display'

function Amazon() {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(name)
   
    }
    return (
        <div className="container">
           
            <form onSubmit={handleSubmit}>
                <div className="form-group row mt-5">
                    <div className="col-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter the Item"
                        value={name}
                        onChange={e => setName(e.target.value)}
                     />

                    </div>
                    <div className="col-auto">
                    <button type="submit" className="btn btn-primary"> Search</button>

                    </div>

                </div>
              
            </form>
 
            <Display/>

        </div>

    );
}

export default Amazon
