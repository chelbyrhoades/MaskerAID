import React from 'react';
import { Link } from 'react-router-dom';

function Listing(props) {

    return (

        <div className="card">
            <div className="card-header">
                {props.listing.distributorName}
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <h5 className="card-title">{props.listing.name}</h5>
                        <span className="card-text tag badge badge-pill badge-primary">{`$${props.listing.price}`}</span>
                        <p className="card-text">{`In stock: ${props.listing.quantity}`}</p>
                        <p className="card-text">{`Location: ${props.listing.location}`}</p>
                        <Link to={`/listing/${props.listing.id}`} className="btn btn-primary">Edit listing</Link>
                    </div>
                    <div className="col-3">
                        <img src={props.listing.imgurl} className="prod-img"/>
                    </div>
                </div>
            </div>
        </div>
    
    );

}

export default Listing;