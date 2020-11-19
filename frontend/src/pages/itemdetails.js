import React from 'react';
import { Item } from '../models/Item';
import "./Home.css";
import {  Link } from 'react-router-dom';
import axios from 'axios';



export class Itemdetails extends React.Component{
    items = [
        {
            Distributorname:"PPeasy Distributor",
            name: "Box of masks",
            quantity: 500,
            price: 9.99,
            location: "Dallas,TX",
            imgurl: "https://images-na.ssl-images-amazon.com/images/I/61u2LVt1C0L._AC_SL1200_.jpg"
            },
            {
                Distributorname: "Bill's Gloves",
                name: "Box of Gloves",
                quantity: 250,
                price: 8.99,
                location: "Houston, TX",
                imgurl: "data:image/jpeg;base64,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"
            }
        ];
        state = {
            posts: [],
            isLoading: true,
            errors: null
          };


    showItems(){

    }
    getListings() { //https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/
        // We're using axios instead of Fetch
        axios
          // The API we're requesting data from
          .get("https://randomuser.me/api/?results=5")  //CHANGE TO GET A LIST OF ALL PRODUCTS
          // Once we get a response, we'll map the API endpoints to our props
          .then(response =>
            response.data.results.map(user => ({
              name: `${user.name.first} ${user.name.last}`,
              username: `${user.login.username}`,
              email: `${user.email}`,
              image: `${user.picture.thumbnail}`
            }))
          )
          
          // Let's make sure to change the loading state to display the data
          .then(users => {
            this.setState({
              users,
              isLoading: false
            });
          })
          // We can still use the `.catch()` method since axios is promise-based
          .catch(error => this.setState({ error, isLoading: false }));
          
      }

      componentDidMount() {
        this.getListings();
      }


    render(){
        const { isLoading, posts } = this.state;
        return <>
            
            <h3> Available Products: </h3>
            <br />
            <div>
                
            </div>
            <li><div class="card" 
            style={{
                width: "500%",
                border: "solid 3px #d3d3d3",
                margin: "10px auto"
                }}>
                    
                <div data-role="page" class="pages" >
                {this.items.map((item, index) => (
          <div key={index}>
            <h1> {item.Distributorname}</h1>
            <p><img className = "Image" src = {item.imgurl}/></p>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.location}</p>
            <p>${item.price}</p>
            <br/>
          </div>
        ))}       
       </div>
        </div>
        </li>
        <div>     
            <button id= 'order-button'>        
                <Link className="btn btn-link order-history-button" to="/orders"> Order History</Link>
            </button>
        </div>
            <br />
            <h2>Random Post</h2>
            <div>
            {!isLoading ? (
              
            posts.map(post => {
              const { _id, title, content } = post;
              return (
                
                <div key={_id}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                  
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
            <br />
        </>
    }

}