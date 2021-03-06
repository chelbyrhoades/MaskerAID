import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {  Link } from 'react-router-dom';
import "./ItemDetails.css";
import {CartService} from '../services/cartService';

function ItemDetails(props) {
    console.log(props.items);
    //plural in the table
        let cartService = new CartService();
        return (
        <div>
            {props.items.map(item => 
            <div key={item.listingID}>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title"><strong>{item.productName}</strong></h5>
                    </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-8">
                                    <span className="card-text badge badge-pill badge-primary"><h3><strong>{`$${item.price}.00`}</strong></h3></span>
                                    <p className="card-text"><strong>Type:</strong> {item.ppeType}</p>
                                    <p className="card-text"><strong>Stock:</strong> {item.quantity}</p>
                                    <p className="card-text"><strong>Location: </strong>{item.country}</p>
                                    <p className="card-text"><strong>Contact Information: </strong>{item.email}</p> 
                                    <br/>
                                </div>
                            <div className="col-3">
                                <img src={item.imageURL} className="prod-img"/>
                            </div>
                            <Link to="/cart"
                            className="btn btn-primary btn-lg"
                            onClick={ () =>  cartService.addToCart(item)}>
                                Add to Cart
                            </Link>
                            <Link to={`/distInfo/${item.listingID}`} 
                            className="btn btn-secondary btn-lg">
                                More info
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>);
}
export default ItemDetails;